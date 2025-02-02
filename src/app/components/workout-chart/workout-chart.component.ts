import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { WorkoutService } from 'src/app/services/workout-data.service';

@Component({
  selector: 'app-workout-chart',
  templateUrl: './workout-chart.component.html',
  styleUrls: ['./workout-chart.component.css']
})
export class WorkoutChartComponent implements OnInit {
  selectedUser: any;
  usersList: any; 

  constructor(private workoutService: WorkoutService,private cdRef: ChangeDetectorRef) {}

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: { 
        title: { display: true, text: 'Workout Type' }
      },
      y: {
        title: { display: true, text: 'Minutes' },
        beginAtZero: true
      }
    }
  };

  public barChartType: ChartType = 'bar';
  public barChartData: ChartConfiguration['data'] = {
    labels: [],
    datasets: [
      { data: [], label: 'Workout Minutes' }
    ]
  };

  ngOnInit() {
    this.loadUsersData();
  }

  loadUsersData() {
    this.usersList  = this.workoutService.getWorkouts()
      console.log(this.usersList);
      if (this.usersList.length > 0) {
        this.selectUser(this.usersList[0]);
      }
  }

  updateChartData(user: any) {
    if (!user || !user.workouts || user.workouts.length === 0) {
      console.error("No workouts data for this user");
      return;
    }
    const workoutMinutes = user.workouts.reduce((acc: any, workout: any) => {
      if (acc[workout.type]) {
        acc[workout.type] += workout.duration;
      } else {
        acc[workout.type] = workout.duration;
      }
      console.log(acc);
      
      return acc;
    }, {});
  console.log(workoutMinutes);
  this.barChartData = {
    labels: Object.keys(workoutMinutes),
    datasets: [
      {
        data: Object.values(workoutMinutes),
        label: 'Workout Minutes'
      }
    ]
  };
  this.cdRef.detectChanges();
  }
  

  selectUser(user: any) {
    this.selectedUser = user;
    console.log(user);
    
    this.updateChartData(user);
  }
}

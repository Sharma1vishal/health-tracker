import { Component, OnInit } from '@angular/core';
import { WorkoutService } from 'src/app/services/workout-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  totalWorkouts: number = 0;
  totalCalories: number = 0;
  totalDuration: number = 0;

  constructor(private workoutService: WorkoutService) {}

  ngOnInit(): void {
    this.loadDashboardStats();
  }

  loadDashboardStats(): void {
    const stats = this.workoutService.getDashboardStats();
    this.totalWorkouts = stats.totalWorkouts;
    this.totalCalories = stats.totalCalories;
    this.totalDuration = stats.totalDuration;
  }
}

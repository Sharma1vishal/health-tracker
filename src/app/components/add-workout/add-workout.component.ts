import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WorkoutService } from 'src/app/services/workout-data.service';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.css']
})
export class AddWorkoutComponent implements OnInit {
  workoutForm: FormGroup;
  usersList: any[] = [];

  constructor(private fb: FormBuilder, private workoutService: WorkoutService, private router: Router) {
    this.workoutForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      duration: ['', [Validators.required, Validators.min(1)]],
      calories: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit() {
    this.loadUsersData();
  }

  loadUsersData() {
    this.usersList = this.workoutService.getWorkouts();
    console.log(this.usersList);
  }

  submitWorkout() {
    const { name, type, duration, calories } = this.workoutForm.value;
    const user = this.usersList.find(u => u.name === name);
    if (user) {
      const existingWorkout = user.workouts.find((workout:any) => workout.type === type);

      if (existingWorkout) {
        existingWorkout.duration += duration;
        existingWorkout.calories += calories;
      } else {
        user.workouts.push({ type, duration, calories });
      }
    } else {
      this.usersList.push({
        name,
        workouts: [{ type, duration, calories }]
      });
      this.router.navigate(['/dashboard']);
    }

    localStorage.setItem('workouts', JSON.stringify(this.usersList));
    alert('Workout Added Successfully');
    this.workoutForm.reset();
  }
}

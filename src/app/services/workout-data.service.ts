import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  private storageKey = 'workouts'; 

  constructor() {}

  getWorkouts(): any[] {
    const storedData = localStorage.getItem(this.storageKey);
    return storedData ? JSON.parse(storedData) : [];
  }

  saveWorkout(workout: any): void {
    const workouts = this.getWorkouts();
    workouts.push(workout);
    localStorage.setItem(this.storageKey, JSON.stringify(workouts));
  }

  getDashboardStats(): any {
    const workouts = this.getWorkouts().flatMap(user => user.workouts);

    const totalWorkouts = workouts.length;
    const totalCalories = workouts.reduce(
      (sum, workout) => sum + (workout.calories || 0),
      0
    );
    const totalDuration = workouts.reduce(
      (sum, workout) => sum + (workout.duration || 0),
      0
    );

    return {
      totalWorkouts,
      totalCalories,
      totalDuration,
    };
  }
}

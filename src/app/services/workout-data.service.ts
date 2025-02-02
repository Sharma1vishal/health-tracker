import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  private storageKey = 'workouts'; 

  constructor() {}

  getWorkouts(): any[] {
    const storedData = localStorage.getItem(this.storageKey);

    if (!storedData) {
      const userData = [
        {
          id: 1,
          name: 'John Doe',
          workouts: [
            { type: 'Running', duration: 30, calories: 300 },
            { type: 'Cycling', duration: 45, calories: 400 }
          ]
        },
        {
          id: 2,
          name: 'Jane Smith',
          workouts: [
            { type: 'Swimming', duration: 60, calories: 500 },
            { type: 'Running', duration: 20, calories: 200 }
          ]
        },
        {
          id: 3,
          name: 'Mike Johnson',
          workouts: [
            { type: 'Yoga', duration: 50, calories: 200 },
            { type: 'Cycling', duration: 40, calories: 350 }
          ]
        },
      ];

      localStorage.setItem(this.storageKey, JSON.stringify(userData));

      return userData;
    }

    const parsedData = JSON.parse(storedData);
    if (parsedData.length > 0) {
      
      localStorage.removeItem('userData'); 
    }

    return Array.isArray(parsedData) ? parsedData : [];
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
      (sum, workout) => sum + (this.getValidNumber(workout.calories) || 0),
      0
    );

    const totalDuration = workouts.reduce(
      (sum, workout) => sum + (this.getValidNumber(workout.duration) || 0),
      0
    );    

    return {
      totalWorkouts,
      totalCalories,
      totalDuration,
    };
  }

  private getValidNumber(value: any): number {
    const parsedValue = parseFloat(value);
    return isNaN(parsedValue) ? 0 : parsedValue;
  }
}

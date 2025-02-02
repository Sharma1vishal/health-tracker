import { Component, OnInit } from '@angular/core';

interface Workout {
  name: string;
  type: string;
  duration: number;
  calories: number;
}

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {
  workouts: any[] = [];
  filteredWorkouts: Workout[] = []; 
  searchQuery = '';                
  filterType = '';
  currentPage = 1;
  itemsPerPage = 5;
  totalPages = 1;

  ngOnInit() {
    this.loadWorkouts(); 
  }

  loadWorkouts() {
    const savedWorkouts = localStorage.getItem('workouts');
    this.workouts = savedWorkouts ? JSON.parse(savedWorkouts) : [];
    this.flattenWorkouts(); 
    this.applyFilters();     
  }

  flattenWorkouts() {
    const summedWorkouts: { [key: string]: Workout } = {};

    this.workouts.forEach(user => {
      user.workouts.forEach((workout: any) => {
        if (summedWorkouts[user.name]) {
          summedWorkouts[user.name].type = summedWorkouts[user.name].type
            ? `${summedWorkouts[user.name].type}, ${workout.type}`
            : workout.type;
          summedWorkouts[user.name].duration += workout.duration;
          summedWorkouts[user.name].calories += workout.calories;
        } else {
          summedWorkouts[user.name] = {
            name: user.name,
            type: workout.type,
            duration: workout.duration,
            calories: workout.calories
          };
        }
      });
    });

    console.log("dsts",summedWorkouts);
    
    this.workouts = Object.values(summedWorkouts);
    this.filteredWorkouts = [...this.workouts]; 
    this.totalPages = this.getTotalPages(); 
  }


  onItemsPerPageChange(itemsPerPage: number) {
    this.itemsPerPage = itemsPerPage; 
    this.currentPage = 1;
    this.applyFilters();              
  }

  
  onPageChange(page: number) {
    this.currentPage = page;
    this.applyFilters(); 
  }

  
  applyFilters() {
    this.filteredWorkouts = this.workouts.filter(w =>
      w.name.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
      (this.filterType ? w.type === this.filterType : true)
    );
    this.totalPages = this.getTotalPages(); 
  }

  
  get uniqueWorkoutTypes(): string[] {
    return [...new Set(this.workouts.map(workout => workout.type))];
  }

  
  getTotalPages(): number {
    return Math.ceil(this.filteredWorkouts.length / this.itemsPerPage);
  }

  
  paginate(workouts: Workout[]) {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return workouts.slice(start, start + this.itemsPerPage); 
  }
}

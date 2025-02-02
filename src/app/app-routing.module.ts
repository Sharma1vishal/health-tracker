import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';
import { WorkoutChartComponent } from './components/workout-chart/workout-chart.component';
import { AddWorkoutComponent } from './components/add-workout/add-workout.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'workout-list', component: WorkoutListComponent },
  { path: 'workout-graph', component: WorkoutChartComponent },
  { path: 'add-workout',component:AddWorkoutComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

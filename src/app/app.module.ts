import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddWorkoutComponent } from './components/add-workout/add-workout.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';  
import { PaginationComponent } from './components/common/pagination/pagination.component';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';
import { WorkoutChartComponent } from './components/workout-chart/workout-chart.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddWorkoutComponent,
    WorkoutListComponent,
    PaginationComponent,
    PageNotFoundComponent,
    WorkoutChartComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgChartsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

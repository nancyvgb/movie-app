import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { TopFiveComponent } from './top-five/top-five.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';


const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponentComponent, data: {animation: 'Home'}},
  {path: 'addMovie', component: AddMovieComponent,  data: {animation: 'AddMovie'}},
  { path: 'topfive', component: TopFiveComponent, data: {animation: 'TopFive'} },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

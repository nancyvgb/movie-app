import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { TopFiveComponent } from './top-five/top-five.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';


const routes: Routes = [
  {path: 'home', component: HomeComponentComponent},
  {path: 'addMovie', component: AddMovieComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'topfive', component: TopFiveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

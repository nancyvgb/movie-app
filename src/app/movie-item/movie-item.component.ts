import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MoviesService} from '../movies.service'
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  @Input() movieinfo: any;
  @Input() selectedMovie: boolean;
  @Input() movieIndex: number;
  @Output() removeItem = new EventEmitter<object>();
   mySubscription: any;
  constructor(private movieService :  MoviesService, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
    
   }

  ngOnInit(): void {

  }
  
   getMovieInfo(event) {
    console.log('movie deatil', event)
  }

  removeMove(index) {
   let movieList =  this.movieService.getItem('movieList')
   console.log('skice', movieList.splice(index, 1))
    this.movieService.setItem('movieList', movieList);
    this.removeItem.emit(movieList);
    this.router.navigated = true;
    //this.router.navigate(['/home']);
  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
}

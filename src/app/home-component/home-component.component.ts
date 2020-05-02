import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service'
import { Subscription } from 'rxjs';
import {MovieModel} from '../models/movie-model'
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-home-component',
  animations: [
    trigger('openClose', [
      state('open', style({
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '97px',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 2,
        display: 'block'
      })),
      state('close', style({
        display: 'none'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {
  clickEventsubscription: Subscription;
  showSideBar: boolean = false;
  emptyState: boolean;
  moviesList: Array<object> = [];
  movieDetail: object;
  constructor(private moviesService: MoviesService) {
    this.clickEventsubscription = this.moviesService.getClickEvent().subscribe(() => {
      this.toggleSideBar();
    })
  }

  ngOnInit(): void {
    this.emptyState = this.moviesList.length == 0;
    let data = localStorage.getItem('movieList');
    this.moviesService.itemValue.subscribe((nextValue) => {
    let list = JSON.parse(nextValue);
    this.moviesList = list;
      console.log('this.moviesList', this.moviesList)
   })
   
  
   // console.log('this.moviesList', this.moviesList)
  }

  /**
   *toggle side bar on mobile view
   *
   * @memberof HomeComponentComponent
   */
  toggleSideBar() {
    this.showSideBar = !this.showSideBar;
  }
  
  /**
   *
   * Get movie info from child component
   * @param {*} event
   * @memberof HomeComponentComponent
   */
  getMovieInfo(event) {
    this.movieDetail = event
    console.log('this.movieDetail', this.movieDetail)
  }

}

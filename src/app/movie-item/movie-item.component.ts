import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MoviesService} from '../movies.service'

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
  constructor(private movieService :  MoviesService) { }

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
    console.log('index', movieList)
  }
}

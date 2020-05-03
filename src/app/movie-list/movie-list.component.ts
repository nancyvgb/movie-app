import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Input() movieList: Array<object>;
  @Output() sendMovieInfo = new EventEmitter<object>();
  @Output() updateHomeView = new EventEmitter<object>();
  selectedIndex: number = null;
  constructor() { }

  ngOnInit(): void {
    console.log('this.movieList', this.movieList)
  }
  movieDetail(movie: object, index: number) {
    this.sendMovieInfo.emit(movie);
    this.selectedIndex = index;
  }
  removeItem(event) {
    this.movieList = event;
    this.updateHomeView.emit(event);
  }

}

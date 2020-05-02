import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  @Input() movieinfo: any;
  @Input() selectedMovie: boolean;
  @Input() movieIndex: number;
  constructor() { }

  ngOnInit(): void {
    console.log('movieInfo', this.movieinfo)
  }
  
   getMovieInfo(event) {
    console.log('movie deatil', event)
  }
}

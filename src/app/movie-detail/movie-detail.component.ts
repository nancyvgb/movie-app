import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  @Input() movieDetail: any;
  constructor() { }

  ngOnInit(): void {
    console.log('movieDetail', this.movieDetail)
  }
 
}

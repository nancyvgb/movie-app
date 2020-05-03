import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  @Input() movieDetail: any;
  startDate: any;
  constructor() {
    if(this.movieDetail) {
      this.startDate = new Date(this.movieDetail.releaseDate.year, this.movieDetail.releaseDate.month, this.movieDetail.releaseDate.day);
    }
   
   }

  ngOnInit(): void {
    console.log('movieDetail', this.movieDetail)
    console.log('startDate', this.startDate)
    console.log('date')
  }
 
}

import { Component, OnInit } from '@angular/core';
import { MoviesTop } from '../models/movies-top-model'
import { MoviesService } from '../movies.service';



@Component({
  selector: 'app-top-five',
  templateUrl: './top-five.component.html',
  styleUrls: ['./top-five.component.scss']
})
export class TopFiveComponent implements OnInit {
  moviesTopFive = Array<MoviesTop>();
  showSpinner : boolean = true;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {

    
    this.moviesService.getTopFive().subscribe(response => {
      this.moviesTopFive = response;   
      this.showSpinner = false;
    }
    );

    
  }

}

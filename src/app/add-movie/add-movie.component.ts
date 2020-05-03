import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {MovieModel} from '../models/movie-model'
import { NgForm } from '@angular/forms';
import {MoviesService} from '../movies.service'
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  public movieObject =  new MovieModel();
  datemodel: NgbDateStruct;
  imageSrc: string;
  movieList: Array<object> = [];
  @ViewChild('movieform') movieForm: NgForm;

  constructor(private movieService: MoviesService, private router: Router) { }
  ngOnInit(): void {
   let  savedMovies = this.movieService.getItem('movieList');
    this.movieList = savedMovies ? savedMovies : [];
    console.log('this.movieList', this.movieList)
  }

  public picked(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      this.handleInputChange(file); //turn into base64   
    } else {
      alert("No file selected");
    }
  }

  handleInputChange(files) {
    var file = files;
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert("invalid format");
      return;
    }
    reader.onloadend = this._handleReaderLoaded;
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded = (e) => {
    let reader = e.target;
    var base64result = reader.result.substr(reader.result);
    this.movieObject.image = base64result;

  }
  onSubmit() {
    this.movieObject.title = this.movieForm.value.title;
    this.movieObject.releaseDate = new Date(this.movieForm.value.date.year, this.movieForm.value.date.month, this.movieForm.value.date.day);
    this.movieObject.description = this.movieForm.value.description;
  //  this.movieList.push(this.movieObject)
    
    this.movieList = [...this.movieList, this.movieObject ] // [1,2,3,4]
    this.movieService.setItem('movieList', this.movieList);
    this.router.navigate(['/home']);

   // localStorage.setItem('movieList', JSON.stringify(this.movieList)); //set updated array to local storage
  }
 
}

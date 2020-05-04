import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {MovieModel} from '../models/movie-model'
import { NgForm } from '@angular/forms';
import {MoviesService} from '../movies.service';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


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
  closeResult = '';
  modalText: string = ''
  @ViewChild('movieform') movieForm: NgForm;

  constructor(private movieService: MoviesService, private router: Router, private modalService: NgbModal) { }
  ngOnInit(): void {
    let  savedMovies = this.movieService.getItem('movieList'); //get current movies from local storage
    this.movieList = savedMovies ? savedMovies : [];
  }

  public picked(event, modal) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      this.handleInputChange(file); //turn into base64   
    } else {
      this.modalText = "No file Selected"
      this.open(modal);
    }
  }

  handleInputChange(files) {
    var file = files;
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
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
    this.movieList = [...this.movieList, this.movieObject ]
    this.movieService.setItem('movieList', this.movieList);
    this.router.navigate(['/home']);
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  } 
}

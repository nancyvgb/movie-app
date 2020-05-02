import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {BehaviorSubject} from 'rxjs';
import {MovieModel} from '../app/models/movie-model'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private subject = new Subject<any>();
  itemValue = new BehaviorSubject(this.theItem);

  constructor() { }

  sendClickEvent() {
    this.subject.next();
  }
  getClickEvent(): Observable<any>{ 
    return this.subject.asObservable();
  }
  set theItem(value) {
    this.itemValue.next(value); // this will make sure to tell every subscriber about the change.
    localStorage.setItem('movieList', value);
  }
 
  get theItem()   {
    return localStorage.getItem('movieList');
  }
}

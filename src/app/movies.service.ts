import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private subject = new Subject<any>();

  constructor() { }

  sendClickEvent() {
    this.subject.next();
  }
  getClickEvent(): Observable<any>{ 
    return this.subject.asObservable();
  }
  
   setItem(key:string, value:Array<any>){
     let data =  JSON.stringify(value); 
    localStorage.setItem(key, data);
  }

   getItem(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }
}

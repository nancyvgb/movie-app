import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {MoviesTop} from './models/movies-top-model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';// This is where I import map operator


@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  private subject = new Subject<any>();
  

  constructor(private http: HttpClient) { }

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

  public getTopFive(): Observable<MoviesTop[]> 
  {
    const url = 'http://www.mocky.io/v2/5dc3c053300000540034757b';
    return this.http.get<any>(url).pipe(
        map(results => results.movies),
      );
  }
  
}

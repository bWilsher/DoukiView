import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  storedResponse: any;


  getFilms(){
    return this.http.get('https://group-project-3ab61.firebaseio.com/Movies.json')
  }

  generateArray(res) {
    return Object.keys(res).map((key) =>{ return res[key]})
    } 

    onGetFilms(){
        this.getFilms().subscribe(res => { 
          this.storedResponse = this.generateArray(res);
        });
      }

}

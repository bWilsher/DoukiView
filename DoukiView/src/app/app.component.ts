import { Component } from '@angular/core';
import {FilmService} from './Films.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  storedResponse: any;
  constructor(private http: HttpClient, private Films: FilmService){
    console.log(this.Films.storedResponse);
  }

  


}

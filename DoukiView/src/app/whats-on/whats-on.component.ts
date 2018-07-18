import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {FilmService} from '../Films.service';

@Component({
  selector: 'app-whats-on',
  templateUrl: './whats-on.component.html',
  styleUrls: ['./whats-on.component.css']
})
export class WhatsOnComponent implements OnInit {
  // filmList: object[] = [{name:"Star Wars", posterImage: "http://wwwcdn.howdesign.com/wp-content/uploads/a44ea639e2a22cf9.jpg"}, {name: "Maze Runner", posterImage:"https://cdn.cinematerial.com/p/297x/9ebaqxve/maze-runner-the-death-cure-movie-poster-md.jpg"}, {name: "John Wick 2",posterImage: "http://lwlcdn.lwlies.com/wp-content/uploads/2017/11/John-Wick-2-900x0-c-default.jpg" }, {name:"Star Wars", posterImage: "http://wwwcdn.howdesign.com/wp-content/uploads/a44ea639e2a22cf9.jpg"}, {name: "Maze Runner", posterImage:"https://cdn.cinematerial.com/p/297x/9ebaqxve/maze-runner-the-death-cure-movie-poster-md.jpg"}, {name: "John Wick 2",posterImage: "http://lwlcdn.lwlies.com/wp-content/uploads/2017/11/John-Wick-2-900x0-c-default.jpg" }, {name:"Star Wars", posterImage: "http://wwwcdn.howdesign.com/wp-content/uploads/a44ea639e2a22cf9.jpg"}, {name: "Maze Runner", posterImage:"https://cdn.cinematerial.com/p/297x/9ebaqxve/maze-runner-the-death-cure-movie-poster-md.jpg"}, {name: "John Wick 2",posterImage: "http://lwlcdn.lwlies.com/wp-content/uploads/2017/11/John-Wick-2-900x0-c-default.jpg" }];
  //  filmList: object[] = [{name: {{storedResponse.}}}]

  constructor(private http: HttpClient, private Films: FilmService){
    this.Films.onGetFilms();
  }


  ngOnInit() {
  }


}

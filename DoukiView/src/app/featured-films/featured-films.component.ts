import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-films',
  templateUrl: './featured-films.component.html',
  styleUrls: ['./featured-films.component.css']
})
export class FeaturedFilmsComponent implements OnInit {

  imageArray: String[];
  imageIndex: number;
  


  constructor() {
    this.imageIndex = 0;
    this.imageArray = ["https://resizing.flixster.com/EEy-z7iTK_ed7y78dbkdwyVKBWs=/4096x1862/v1.bjsxOTYyMjA1O2o7MTc3OTc7MTIwMDs0MDk2OzE4NjI", "https://cdn.movieweb.com/img.news.tops/NEFa39xFnSMrIM_1_b/Jurassic-World-3-Story-Fallen-Kingdom-Connection.jpg", "https://i.kym-cdn.com/photos/images/original/000/964/872/5b5.jpg"];
    
   }

  ngOnInit() {
  }

  //Shift the carousel right if possible, wrap around if not
  moveRight() {
   
    if (this.imageIndex < this.imageArray.length - 1) {
      this.imageIndex++;
     
    } else {
      this.imageIndex = 0;
     
    }

  }
  //Shif the carousel left if possible, wrap around if not
  moveLeft() {
    if (this.imageIndex > 0) {
      this.imageIndex--;
    } else {
      this.imageIndex = this.imageArray.length - 1;
    }
  }

}



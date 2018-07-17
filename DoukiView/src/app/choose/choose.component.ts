import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent implements OnInit {

  constructor() { 
    function myFunction() {
      var x = document.createElement("INPUT");
      x.setAttribute("type", "date");
      x.setAttribute("value", "2014-02-09");
      document.body.appendChild(x);
  }
  }

  ngOnInit() {
  }

}

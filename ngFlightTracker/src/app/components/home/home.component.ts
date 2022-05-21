import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  subTitle = 'The most amazing flight search engine!';
  //=================
  header = 'Options';
  flighInfo = {
    home: 'Home',
    about: 'About',
    search: 'Search'
  };
  //===================
  constructor() { }

  ngOnInit(): void {
  }

}

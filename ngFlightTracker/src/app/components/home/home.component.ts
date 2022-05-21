import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/flight';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //==================
  color1 = '#7F6C79';
  color2 = '#8DAA91';
  // color3 = '#7F6C79';

  subTitle = 'The most amazing flight search engine!';
  //=================
  header = 'Options';
  flighInfo = {
    home: 'Home',
    about: 'About',
    search: 'Search'
  };
  //===================
  flight = new Flight();

  constructor() { }

  ngOnInit(): void {
  }

}

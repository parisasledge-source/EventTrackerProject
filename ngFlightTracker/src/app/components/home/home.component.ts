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

  title = 'The most amazing flight search engine!';
  subTitle = 'The most amazing flight search engine!';
  //=================
  header = 'Options';
  flighInfo = {
    home: 'Home',
    about: 'About',
    search: 'Search'
  };
  //===================
  display = true;

  newFlight: Flight = new Flight();
  flight =
  [
    new Flight('AA2477', '2022-05-01T08:35:00', '2022-05-01T08:35:00', '2022-05-01T08:35:00', '2022-05-01T08:35:00', 'Seattle', 'Dallas',  'American Airlines', 'aa', 611.39, 'https://www.airport-technology.com/wp-content/uploads/sites/14/2017/10/main-1262.jpg'),
    new Flight('AA2477', '2022-05-01T08:35:00', '2022-05-01T08:35:00', '2022-05-01T08:35:00', '2022-05-01T08:35:00', 'Seattle', 'Dallas',  'American Airlines', 'aa', 611.39, 'https://www.airport-technology.com/wp-content/uploads/sites/14/2017/10/main-1262.jpg')
  ];

  flight1 = new Flight();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.flight.push(this.newFlight);
    this.newFlight = new Flight();
  }

}

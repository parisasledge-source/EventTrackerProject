import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/flight';
import { FlightTrackerService } from 'src/app/services/flight-tracker.service';

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
  display = false;

  newFlight: Flight = new Flight();

  flight: Flight[] = [];
  //flight1 = new Flight();

  constructor(private flightTrackerService: FlightTrackerService) { }


  ngOnInit(): void {
    this.flight = this.flightTrackerService.index();
  }

  getNumberOfFlights(){
    return this.flight.length;
  }

  onSubmit() {
    //this.flight.push(this.newFlight);
    this.flightTrackerService.create(this.newFlight);
    this.newFlight = new Flight();
    this.flight = this.flightTrackerService.index();
  }

}

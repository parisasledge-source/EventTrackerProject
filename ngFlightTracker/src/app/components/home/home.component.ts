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

  title = 'Flight Tracker';
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
  tempFlight: Flight = new Flight();

  flight: Flight[] = [];
  //flight1 = new Flight();

  constructor(private flightTrackerService: FlightTrackerService) { }


  ngOnInit(): void {
    this.reload();
  }

  reload() {
    this.flightTrackerService.index().subscribe(
      data => this.flight = data,
      err => console.error(err)
    );
  }

  getNumberOfFlights(){
    return this.flight.length;
  }

  displayFlight(flight: Flight) {
    //this.selected = flight;
  }

  // displayTable(){
  //   this.selected = null;
  // }

  addFlight(){
    this.flightTrackerService.create(this.newFlight).subscribe(
      data => {this.reload();
                this.newFlight = new Flight()},
      err => console.error(err)
    )

  }

  updateFlight(flight: Flight, id: number){
    this.flightTrackerService.update(flight, id).subscribe(
      data => {
        this.reload();
        //this.editFlight = null;
        Object.assign({}, flight);
      },
      err => console.error(err)
    );

  }

  deleteFlight(id: number) {
    this.flightTrackerService.destroy(id).subscribe(
      data => this.reload(),
      err => console.error(err)
    );
  }
}

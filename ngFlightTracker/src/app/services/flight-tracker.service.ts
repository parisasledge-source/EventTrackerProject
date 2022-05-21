import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../models/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightTrackerService {

  private flight: Flight[] =
  [
    new Flight('AA2477', '2022-05-01T08:35:00', '2022-05-01T08:35:00', '2022-05-01T08:35:00', '2022-05-01T08:35:00', 'Seattle', 'Dallas',  'American Airlines', 'aa', 611.39, 'https://www.airport-technology.com/wp-content/uploads/sites/14/2017/10/main-1262.jpg'),
    new Flight('AA2477', '2022-05-01T08:35:00', '2022-05-01T08:35:00', '2022-05-01T08:35:00', '2022-05-01T08:35:00', 'Seattle', 'Dallas',  'American Airlines', 'aa', 611.39, 'https://www.airport-technology.com/wp-content/uploads/sites/14/2017/10/main-1262.jpg')
  ];

  private url = environment.baseUrl + 'api/flights';

  constructor(
    private http: HttpClient
  ) { }

  index(): Flight[] {
    return [...this.flight];
  }

  create(newFlight: Flight): void {
      this.flight.push(newFlight);
  }
}

import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../models/flight';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightTrackerService {

  // private baseUrl = 'http://localhost:8086/'
  // private url = this.baseUrl + 'api/flights';

  private flight: Flight[] =
  [
    // new Flight('AA2477', '2022-05-01T08:35:00', '2022-05-01T08:35:00', '2022-05-01T08:35:00', '2022-05-01T08:35:00', 'Seattle', 'Dallas',  'American Airlines', 'aa', 611.39, 'https://www.airport-technology.com/wp-content/uploads/sites/14/2017/10/main-1262.jpg'),
    // new Flight('AA2477', '2022-05-01T08:35:00', '2022-05-01T08:35:00', '2022-05-01T08:35:00', '2022-05-01T08:35:00', 'Seattle', 'Dallas',  'American Airlines', 'aa', 611.39, 'https://www.airport-technology.com/wp-content/uploads/sites/14/2017/10/main-1262.jpg')
  ];

  private url = environment.baseUrl + 'api/flights';

  constructor(
    private http: HttpClient
  ) { }

  // index(): Flight[] {
  //   return [...this.flight];
  // }

  index(){
    return this.http.get<Flight[]>(this.url)
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('FlightTrackerService: error retrieving flight list');

      })
    )
  }

  show(id: number){
    return this.http.get<Flight>(this.url + '/' + id)
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('FlightService: error retrieving Flight list');

      })
    )
  }

  create(newFlight: Flight) {
    const httpOptions = {
      headers: {
        'Content-type': 'application/json'
      }
    };
    return this.http.post<Flight>(this.url, newFlight, httpOptions).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('FlightService: error creating Flight');

      })
    )
  }


}

import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightTrackerService {

  private url = environment.baseUrl + 'api/flights';

  constructor(
    private http: HttpClient
  ) { }
}

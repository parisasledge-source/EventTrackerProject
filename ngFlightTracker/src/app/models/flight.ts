export class Flight {
  name: string;
  std: string;
  sta: string;
  atd: string;
  status: string;
  fromAirport: string;
  toAirport: string;
  airline: string;
  aircraft: string;
  price: number;
  photoUrl: string;

  constructor(
  name: string ='',
  std: string ='',
  sta: string ='',
  atd: string ='',
  status: string ='',
  fromAirport: string ='',
  toAirport: string ='',
  airline: string ='',
  aircraft: string ='',
  price: number = 0,
  photoUrl: string= ''
  ){
    this.name = name;
    this.std = std;
    this.sta = sta;
    this.atd = atd;
    this.status = status;
    this.fromAirport = fromAirport;
    this.toAirport = toAirport;
    this.airline = airline;
    this.aircraft = aircraft;
    this.price = price;
    this.photoUrl = photoUrl;

  }
}

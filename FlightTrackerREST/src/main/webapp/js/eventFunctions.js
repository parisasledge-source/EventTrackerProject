window.addEventListener('load', function(e) {
	console.log('document loaded');
	init();
});

function init() {
	document.flightForm.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		let flightId = document.flightForm.flightId.value;
		if (!isNaN(flightId) && flightId > 0) {
			getFlight(flightId);
		}
	});
	console.log("in init()");
	document.createFlightTrackForm.submit.addEventListener('click', createFlightTrack);
	document.updateFlightTrackForm.submit.addEventListener('click', updateFlightTrack);
}

//=================

// mysql> select * from flight;
// +----+--------+-----------------------------+---------------------------+--------------------------+------------------------+------------------------------------------+------------------------------------------+-------------------+-------------------+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
// | id | name   | scheduled_time_of_departure | scheduled_time_of_arrival | actual_time_of_departure | actual_time_of_arrival | from_airport                             | to_airport                               | airline           | aircraft          | price | photo_url                                                                                                                                                                   |
// +----+--------+-----------------------------+---------------------------+--------------------------+------------------------+------------------------------------------+------------------------------------------+-------------------+-------------------+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
// |  1 | AA2477 | 2022-05-01 07:35:00         | 2022-05-01 13:30:00       | 2022-05-01 07:42:00      | 2022-05-01 18:01:00    | Seattle-Tacoma International Airport     | Dallas/Fort Worth International Airport  | American Airlines | Airbus A321-253NX |   641 | https://www.airport-technology.com/wp-content/uploads/sites/14/2017/10/main-1262.jpg                                                                                        |
// |  2 | AA1405 | 2022-05-01 14:30:00         | 2022-05-01 18:21:00       | 2022-05-01 14:36:00      | 2022-05-01 22:03:00    | Dallas/Fort Worth International Airport  | Miami International Airport              | American Airlines | Airbus A321-253NX |   228 | https://cdn.jetphotos.com/640/5/48967_1533110589.jpg                                                                                                                        |
// |  3 | AA2289 | 2022-05-01 19:35:00         | 2022-05-01 22:31:00       | 2022-05-01 19:52:00      | 2022-05-02 05:10:00    | Miami International Airport              | Los Angeles International Airport        | American Airines  | Airbus A321-253NX |   461 | https://www.hostelman.com/wp-content/uploads/2019/07/40270_Miami-International-Airport.jpg                                                                                  |
// |  4 | AA314  | 2022-05-02 08:45:00         | 2022-05-02 16:46:00       | 2022-05-02 08:59:00      | 2022-05-02 20:26:00    | Los Angeles International Airport        | Miami International Airport              | American Airlines | Airbus A321-253NX |   396 | https://www.balcousa.com/wp-content/uploads/2018/09/CA-LAX-Airport-Shutterstock-2.jpg                                                                                       |
// |  5 | AA385  | 2022-05-02 19:57:00         | 2022-05-03 00:55:00       | 2022-05-02 20:15:00      | 2022-05-03 05:15:00    | Miami International Airport              | Jorge Chavez International Airport       | American Airlines | Airbus A321-253NX |   284 | https://www.hostelman.com/wp-content/uploads/2019/07/40270_Miami-International-Airport.jpg                                                                                  |
// |  6 | AA350  | 2022-05-03 08:00:00         | 2022-05-03 15:32:00       | 2022-05-03 08:14:00      | 2022-05-03 20:08:00    | Jorge Chavez International Airport       | Dallas/Fort Worth International Airport  | American Airlines | Airbus A321-253NX |  1104 | https://live.staticflickr.com/1780/29098893777_403f4c195f_b.jpg                                                                                                             |
// |  7 | AA1796 | 2022-05-03 17:10:00         | 2022-05-03 17:43:00       | 2022-05-03 17:14:00      | 2022-05-04 00:23:00    | Dallas/Fort Worth International Airport  | Phoenix Sky Harbor International Airport | American Airlines | Airbus A321-253NX |   268 | https://cdn.jetphotos.com/640/5/48967_1533110589.jpg                                                                                                                        |
// |  8 | AA630  | 2022-05-04 18:42:00         | 2022-05-05 00:09:00       | 2022-05-04 18:51:00      | 2022-05-05 04:52:00    | Phoenix Sky Harbor International Airport | O'Hare International Airport             | American Airlines | Airbus A321-253NX |   602 | https://www.gannett-cdn.com/presto/2020/03/26/PPHX/48e71124-fd98-4f4c-967e-546889e0eb4e-american_air_2.JPG?crop=2999,1687,x1,y50&width=660&height=372&format=pjpg&auto=webp |
// |  9 | AA891  | 2022-05-04 09:55:00         | 2022-05-04 11:39:00       | 2022-05-04 10:05:00      | 2022-05-04 18:13:00    | O'Hare International Airport             | Phoenix Sky Harbor International Airport | American Airlines | Airbus A321-253NX |   614 | https://assets.dnainfo.com/photo/2016/7/1468614649-265834/extralarge.jpg                                                                                                    |
// | 10 | AA356  | 2022-05-05 07:17:00         | 2022-05-05 11:38:00       | 2022-05-05 08:30:00      | 2022-05-05 17:27:00    | Phoenix Sky Harbor International Airport | Dallas/Fort Worth International Airport  | American Airlines | Airbus A321-253NX |   357 | https://www.gannett-cdn.com/presto/2020/03/26/PPHX/48e71124-fd98-4f4c-967e-546889e0eb4e-american_air_2.JPG?crop=2999,1687,x1,y50&width=660&height=372&format=pjpg&auto=webp |
// | 11 | AA2198 | 2022-05-05 12:40:00         | 2022-05-05 13:42:00       | NULL                     | NULL                   | Dallas/Fort Worth International Airport  | Austin-Bergstrom International Airport   | American Airlines | Airbus A321-253NX |   178 | https://cdn.jetphotos.com/640/5/48967_1533110589.jpg                                                                                                                        |
// | 12 | AA1579 | 2022-05-07 06:45:00         | 2022-05-07 09:09:00       | 2022-05-07 07:07:00      | 2022-05-07 14:13:00    | Dallas/Fort Worth International Airport  | O'Hare International Airport             | American Airlines | Airbus A321-253NX |   318 | https://cdn.jetphotos.com/640/5/48967_1533110589.jpg                                                                                                                        |
// +----+--------+-----------------------------+---------------------------+--------------------------+------------------------+------------------------------------------+------------------------------------------+-------------------+-------------------+-------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+



function getFlight(flightId) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/flights/' + flightId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let flight = JSON.parse(xhr.responseText);
				console.log(flight);
				displayFlight(flight);
			} else {
				console.log('Flight not found.')
			}
		}
	};
	xhr.send();
}

function displayFlight(flight) {

	let dataDiv = document.getElementById('flightData');
	dataDiv.textContent = '';

	let h2 = document.createElement('h2');
	h2.textContent = flight.name;
	dataDiv.appendChild(h2);

	let ul = document.createElement('ul');
	let fromAirport = document.createElement('li');
	let toAirport = document.createElement('li');
	let std = document.createElement('li');
	let sta = document.createElement('li');
	let atd = document.createElement('li');
	let status = document.createElement('li');
	let airline = document.createElement('li');
	let aircraft = document.createElement('li');
	let price = document.createElement('li');

	fromAirport.textContent = flight.fromAirport;
	toAirport.textContent = flight.toAirport;
	std.textContent = flight.std;
	sta.textContent = flight.sta;
	atd.textContent = flight.atd;
	status.textContent = flight.status;
	airline.textContent = flight.airline;
	aircraft.textContent = flight.aircraft;
	price.textContent = flight.price;

	ul.appendChild(fromAirport);
	ul.appendChild(toAirport);
	ul.appendChild(std);
	ul.appendChild(sta);
	ul.appendChild(atd);
	ul.appendChild(status);
	ul.appendChild(airline);
	ul.appendChild(aircraft);
	ul.appendChild(price);

	dataDiv.appendChild(ul);
}

function createFlightTrack(e){
	e.preventDefault();
	//console.log('Hello create Flight'); 
	
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/flights/createFlight', true);
	
	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body
	
	xhr.onreadystatechange = function() {
	  if (xhr.readyState === 4 ) {
	    if ( xhr.status == 200 || xhr.status == 201 ) { // Ok or Created
	      let data = JSON.parse(xhr.responseText);
	     // console.log(data);
	     displayFlight(data);
	    }
	    else {
	      console.error("POST request failed.");
	      console.error(xhr.status + ': ' + xhr.responseText);
	    }
	  }
	}

	let flight = { 
		name : document.createFlightTrackForm.name.value,
		std : document.createFlightTrackForm.std.value,
		sta : document.createFlightTrackForm.sta.value,
		atd : document.createFlightTrackForm.atd.value,
		status : document.createFlightTrackForm.status.value, 
		fromAirport : document.createFlightTrackForm.fromAirport.value,
		toAirport : document.createFlightTrackForm.toAirport.value,
		airline : document.createFlightTrackForm.airline.value,
		aircraft : document.createFlightTrackForm.aircraft.value,
		price : document.createFlightTrackForm.price.value
	};
	console.log(flight);
	xhr.send(JSON.stringify(flight));
}

function updateFlightTrack(flightId){
	e.preventDefault();
	//console.log('Hello create Flight'); 
	
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/flights/' + flightId, true);
	
	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body
	
	xhr.onreadystatechange = function() {
	  if (xhr.readyState === 4 ) {
	    if ( xhr.status == 200 || xhr.status == 201 ) { // Ok or Created
	      let data = JSON.parse(xhr.responseText);
	     // console.log(data);
	     displayFlight(data);
	    }
	    else {
	      console.error("POST request failed.");
	      console.error(xhr.status + ': ' + xhr.responseText);
	    }
	  }
	}

	let flight = { 
		name : document.updateFlightTrackForm.name.value,
		std : document.updateFlightTrackForm.std.value,
		sta : document.updateFlightTrackForm.sta.value,
		atd : document.updateFlightTrackForm.atd.value,
		status : document.updateFlightTrackForm.status.value, 
		fromAirport : document.updateFlightTrackForm.fromAirport.value,
		toAirport : document.updateFlightTrackForm.toAirport.value,
		airline : document.updateFlightTrackForm.airline.value,
		aircraft : document.updateFlightTrackForm.aircraft.value,
		price : document.updateFlightTrackForm.price.value
	};
	console.log(flight);
	xhr.send(JSON.stringify(flight));
}
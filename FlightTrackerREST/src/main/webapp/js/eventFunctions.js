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
	document.flightsForm.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		
		getFlights();
	});
	console.log("in init()");
	document.createFlightTrackForm.submit.addEventListener('click', createFlightTrack());
	document.updateFlightTrackForm.submit.addEventListener('click', updateFlightTrack());
	document.deleteFlightTrackForm.submit.addEventListener('click', deleteFlightTrack());
	//document.flightsForm.lookup.addEventListener('click', getFlights());
}

function getFlights() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/index');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status < 400) {
				let flights = JSON.parse(xhr.responseText);
				console.log(flights);
				displayFlights(flights);
			} else {
				console.log('Flights not found.')
			}
		}
	};
	xhr.send();
}

function displayFlights(flights) {
	let flightList = document.getElementById('flightList');
	flightList.textContent = "";

	for (let i = 0; i < flights.length; i++) {
		let flightInfo = flights[i].name + ": " + flights[i].fromAirport;
		let li = document.createElement('li');
		li.textContent = flightInfo;
		flightList.appendChild(li);
	}
	var flightsDiv = document.getElementById('flights');
	var table = document.createElement('table');
	table.id = 'flightsTable';
	var thead = document.createElement('thead');
	for (p in flights[0]) {
		var th = document.createElement('th');
		th.textContent = p.toUpperCase();
		thead.appendChild(th);
	}
	table.appendChild(thead);
	var tbody = document.createElement('tbody');

	flights.forEach(function(val, ind, arr) {
		var tr = document.createElement('tr');
		var name = document.createElement('td');
		var fromAirport = document.createElement('td');

		name.textContent = val.name;
		fromAirport.textContent = val.fromAirport;

		tr.appendChild(name);
		tr.appendChild(fromAirport);
		tbody.appendChild(tr);
	});
	table.appendChild(tbody);
	flightsDiv.appendChild(table);
}

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

function createFlightTrack(e) {
	e.preventDefault();
	//console.log('Hello create Flight'); 

	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/flights/createFlight', true);

	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) { // Ok or Created
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
		name: document.createFlightTrackForm.name.value,
		std: document.createFlightTrackForm.std.value,
		sta: document.createFlightTrackForm.sta.value,
		atd: document.createFlightTrackForm.atd.value,
		status: document.createFlightTrackForm.status.value,
		fromAirport: document.createFlightTrackForm.fromAirport.value,
		toAirport: document.createFlightTrackForm.toAirport.value,
		airline: document.createFlightTrackForm.airline.value,
		aircraft: document.createFlightTrackForm.aircraft.value,
		price: document.createFlightTrackForm.price.value
	};
	console.log(flight);
	xhr.send(JSON.stringify(flight));
}

function updateFlightTrack(e) {
	e.preventDefault();
	//console.log('Hello create Flight'); 

	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/flights/' + document.updateFlightTrackForm.flightId.value, true);

	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) { // Ok or Created
				let data = JSON.parse(xhr.responseText);
				// console.log(data);
				displayFlight(data);
			}
			else {
				console.error("PUT request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	}

	let flight = {
		name: document.updateFlightTrackForm.name.value,
		std: document.updateFlightTrackForm.std.value,
		sta: document.updateFlightTrackForm.sta.value,
		atd: document.updateFlightTrackForm.atd.value,
		status: document.updateFlightTrackForm.status.value,
		fromAirport: document.updateFlightTrackForm.fromAirport.value,
		toAirport: document.updateFlightTrackForm.toAirport.value,
		airline: document.updateFlightTrackForm.airline.value,
		aircraft: document.updateFlightTrackForm.aircraft.value,
		price: document.updateFlightTrackForm.price.value
	};
	console.log(flight);
	xhr.send(JSON.stringify(flight));
}

function deleteFlightTrack(e) {
	e.preventDefault();
	//console.log('Hello create Flight'); 

	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/flights/' + document.deleteFlightTrackForm.flightId.value, true);

	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) { // Ok or Created
				flight.reset();
				let data = JSON.parse(xhr.responseText);
				//flight.reset();
				// console.log(data);
				displayFlight(data);
			}
			else {
				console.error("DELETE request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	}

	let flight = {
		name: document.deleteFlightTrackForm.name.value,
		std: document.deleteFlightTrackForm.std.value,
		sta: document.deleteFlightTrackForm.sta.value,
		atd: document.deleteFlightTrackForm.atd.value,
		status: document.deleteFlightTrackForm.status.value,
		fromAirport: document.deleteFlightTrackForm.fromAirport.value,
		toAirport: document.deleteFlightTrackForm.toAirport.value,
		airline: document.deleteFlightTrackForm.airline.value,
		aircraft: document.deleteFlightTrackForm.aircraft.value,
		price: document.deleteFlightTrackForm.price.value
	};
	console.log(flight);
	xhr.send(JSON.stringify(flight));
	//flight.reset();
}
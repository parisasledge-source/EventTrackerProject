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
	//document.createFlightForm.submit.addEventListener('click', createFlight);
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
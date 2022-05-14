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
}
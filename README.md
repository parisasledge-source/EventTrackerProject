# FlightTrackerProject

## Description
Flight Tracker is a web application that enables a user to track information about a flight, including flight name, departure date & time, arrival date & time, departure airport, arrival airport, price and airline information.
User can choose to see the list of all flights. User can search for a flight by its flight ID, flight name, airport name or price. User can also add a new flight information to the list to be able to track the new flight information. Finally, user can update the newly added information or delete it from the list.

## Section one (Backend process)

### Steps & overview
Building flight entity table in MySQL workbench

Building Flight Java entity class which matches the flight entity table in MySQL workbench

Building JUnit Test (FlightTest) and testing Flight Java entity class

Creating FlightRepository, FlightService, FlightServiceImplementer, and FlightController

Creating the logic and methods in controller and service to perform the basic CRUD operations of REST API

Testing these routes using Postman

### Technologies used and lessons learned
Creating a JPA Project
  1. Creating entity table in MySQL workbench
  2. Creating Java entity class POJO that models the database table
  3. Mapping POJO using JPA

Configuring a Spring Boot app to publish REST API
  1. Using Spring REST annotations
  2. Using Spring Data JPA to perform all CRUD operations
  3. Sending and receiving JSON

### Tests:
### Paths for Postman Tests:

Flight List: (GET)
http://localhost:8086/api/index

Flight Retrieve By ID: (GET)
http://localhost:8086/api/flights/12

Flight Retrieve By Keyword(Flight Name): (GET)
http://localhost:8086/api/flights/search/1796

Flight Retrieve By Keyword(Airport Name): (GET)
http://localhost:8086/api/flights/search2/Dallas

Flight Retrieve By Price Range: (GET)
http://localhost:8086/api/flights/search/price/400/700

Flight Create: (POST)
http://localhost:8086/api/flights/createFlight

Flight Update: (PUT)
http://localhost:8086/api/flights/13

Flight Delete: (DELETE)
http://localhost:8086/api/flights/13

## Section Two (Frontend Process with JavaScript)

### Steps & overview
Creating index.html file

Creating eventFunction.js file and sourcing this javascript file to the html file

Creating getFlights() function which executes an XMLHttpRequest to get all of the flights and displays the list of data using a table

Creating getFlight() function which executes an XMLHttpRequest to get a flight information by ID search and displays it using a list

Creating 'createFlightTrackForm' form with a submit button in the html file and creating a POST request ('POST', 'api/flights/createFlight') in the javascript file (When this submit button is pressed it builds a JSON object from the form field values, and sends it to the POST request, and then it calls 'displayFlights(flights)' function to reload a list of all the flights which includes the newly created flight)

Creating 'updateFlightTrackForm' with a submit button in the html file and creating a PUT request ('PUT', 'api/flights/') in the javascript file (This submit button builds a JSON object, and sends it to the PUT request, and then it calls 'displayFlights(flights)' function to reload a list of all flights which includes the newly updated flight)

Creating 'deleteFlightTrackForm' with a submit button in the html file and creating a DELETE request in the javascript file ('DELETE', 'api/flights/') that would delete the selected flight

Adding a function that uses the response data to present the data in the form of "Total Number of Flights" (Every time a new object is added to the list the total number of flight is increased by one and displayed with a reload of the list of all the flights)

### Technologies used
1. Adding java scripts to a web application
2. Sending asynchronous requests to Java controllers with JavaScript's XMLHttpRequest
3. Consuming and parsing JSON responses with JavaScript
4. Building HTML with JavaScript
5. Sending POST/PUT/DELETE requests with XMLHttpRequest

### lessons learned/Practices
1. Implementing full CRUD
2. Performing all interactions with the database RESTfully
3. Using Javascript to access data and manipulating the DOM
4. Presenting the aggregated data in an additional format

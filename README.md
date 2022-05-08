## FlightTrackerProject

### Description
Flight Tracker is a web application that enables a user to track information about a flight, including flight name, departure date & time, arrival date & time, departure airport, arrival airport and airline information.
User can choose to see the list of all flights. User can search for a flight by its flight ID, flight name or airport name. User can also add a new flight information to the list to be able to track the flight information locally. Finally, user can update the newly added information to the list or delete it from the list.

### Backend process/The first section of FlightTrackerProject
Building the entity table in MySQL workbench
Building the Java entity class that matches the entity table in MySQL workbench
Building JUnit Test class and testing the Java entity class
Creating FlightRepository, FlightService, FlightServiceImplementer, and REST controller(FlightController)
Creating the logic and methods in controller and service to perform the basic CRUD operations of REST API
Testing these routes using Postman

### Technologies used and lessons Practiced
Practicing in creating a JPA Project
  1. Practicing in creating entity table in MySQL workbench
  2. Practicing in creating Java entity class POJO that models the database table
  3. Mapping POJO using JPA
  
Configuring a Spring Boot app to publish REST API
  1. Using Spring REST annotations
  2. Using Spring Data JPA to perform all CRUD operations
  3. Sending and receiving JSON

Paths for Postman:

Flight List: (GET)
http://localhost:8086/api/index

Flight Retrieve By ID: (GET)
http://localhost:8086/api/flights/12

Flight Retrieve By Keyword(Flight Name): (GET)
http://localhost:8086/api/flights/search/1796

Flight Retrieve By Keyword(Airport Name): (GET)
http://localhost:8086/api/flights/search2/Dallas

Flight Create: (POST)
http://localhost:8086/api/flights/createFlight

Flight Update: (PUT)
http://localhost:8086/api/flights/13

Flight Delete: (DELETE)
http://localhost:8086/api/flights/13

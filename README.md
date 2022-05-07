## EventTrackerProject

### Description
Flight Tracker is a web application that enables a user to track information about a flight, including flight name, departure date & time, arrival date & time, departure airport, arrival airport and airline information.
User can choose to see the list of all flights. User can search for a flight by its flight ID or flight name. User can also add a new flight information to the list to be able to track the flight information locally. Finally, user can update the newly added information to the list or delete it from the list.

Paths for Postman:

Flight List: (GET)
http://localhost:8086/api/index

Flight Retrieve By ID: (GET)
http://localhost:8086/api/flights/12

Flight Retrieve By Keyword: (GET)
http://localhost:8086/api/flights/search/1796

Flight Create: (POST)
http://localhost:8086/api/flights/createFlight

Flight Update: (PUT)
http://localhost:8086/api/flights/13

Flight Delete: (DELETE)
http://localhost:8086/api/flights/13

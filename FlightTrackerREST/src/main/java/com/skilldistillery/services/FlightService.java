package com.skilldistillery.services;

import java.util.List;

import com.skilldistillery.entities.Flight;

public interface FlightService {
	List<Flight> index();
	Flight findById(int id);
	
	Flight create(Flight flight);
//	Flight create(int id, Flight flight);
	Flight update(Flight flight, int id);
	void delete(int id);

}

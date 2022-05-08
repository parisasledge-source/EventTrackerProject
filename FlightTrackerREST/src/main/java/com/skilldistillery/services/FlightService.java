package com.skilldistillery.services;

import java.time.LocalDateTime;
import java.util.List;

import com.skilldistillery.entities.Flight;

public interface FlightService {
	List<Flight> index();
	Flight findById(int id);
	List<Flight> searchFlightsByKeyword(String keyword);
	List<Flight> searchFlightsByKeyword2(String keyword2);
	List<Flight> searchFlightsByPriceRange(double min, double max);
	Flight create(Flight flight);
	Flight update(Flight flight, int id);
	void delete(int id);

	
//	****************    My Stretch Goals:   ****************
//	List<Flight> searchFlightsByStd(LocalDateTime d);
//	List<Flight> searchFlightsByStdRange(LocalDateTime st, LocalDateTime en);
}

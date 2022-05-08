package com.skilldistillery.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.entities.Flight;
import com.skilldistillery.repositories.FlightRepository;

@Service
public class FlightServiceImpl implements FlightService {
	
	@Autowired
	FlightRepository repo;
	
	@Override
	public List<Flight> index() {
		
		return repo.findAll();
	}

	@Override
	public Flight findById(int id) {
		Optional<Flight> op = repo.findById(id);
		Flight f = null;
		if (op.isPresent()) {
			f = op.get();
		}
		return f;
	}
	
	@Override
	public List<Flight> searchFlightsByKeyword(String keyword) {
		keyword = "%" + keyword +"%";
		return repo.findByNameLike(keyword);
	}
	
	@Override
	public List<Flight> searchFlightsByKeyword2(String keyword2) {
		keyword2 = "%" + keyword2 +"%";
		return repo.findByFromAirportLike(keyword2);
	}
	
	@Override
	public List<Flight> searchFlightsByPriceRange(double min, double max) {
		return repo.findByPriceBetween(min, max);
	}
	
	@Override
	public Flight create(Flight flight) {
		
		return repo.saveAndFlush(flight);
	}

	@Override
	public Flight update(Flight flight, int id) {
		flight.setId(id);
		
		if (repo.existsById(id)) {
			return repo.save(flight);
		}
		return null;
	}

	@Override
	public void delete(int id) {
		if (repo.existsById(id)) {
			repo.deleteById(id);
		}	
	}
	
	
//	****************    My Stretch Goals:   ****************
//	@Override
//	public List<Flight> searchFlightsByDate(LocalDateTime date) {
//		//date = "%" + date +"%";
//		return repo.findByStdLike(date);
//	}
	
//	@Override
//	public List<Flight> searchFlightsByStdRange(LocalDateTime st, LocalDateTime en) {
//		return repo.findByStdBetween(st, en);
//	}
}

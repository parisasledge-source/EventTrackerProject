package com.skilldistillery.services;

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
	public Flight create(Flight flight) {
		//Optional<Flight> op = repo.findById(id);
		
		return repo.saveAndFlush(flight);
	}
	
//	@Override
//	public Flight create(int id,  Flight flight) {
//		Optional<Flight> opt = repo.findById(id);
//		if (opt.isPresent()) {
//			//flight.setFlight(opt.get());
//			repo.saveAndFlush(flight);
//			return flight;
//		}
//		
//		return null;
//	}

	@Override
	public Flight update(Flight flight, int id) {
		flight.setId(id);
		
		if (repo.existsById(id)) {
			return repo.save(flight);
		}
		return null;
	}
//
	@Override
	public void delete(int id) {
		if (repo.existsById(id)) {
			repo.deleteById(id);
		}
		
	}
	
	
}

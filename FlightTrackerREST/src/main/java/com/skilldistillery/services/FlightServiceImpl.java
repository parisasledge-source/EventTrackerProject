package com.skilldistillery.services;

import java.util.List;

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
	
	
}

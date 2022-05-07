package com.skilldistillery.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.entities.Flight;
import com.skilldistillery.services.FlightService;

@RequestMapping("api")
@RestController
public class FlightController {
	
	@Autowired
	FlightService serv;
	
	@GetMapping("index")
	public List<Flight> index()
	{
		return serv.index();
	}
}

package com.skilldistillery.controllers;

import java.time.LocalDateTime;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.entities.Flight;
import com.skilldistillery.services.FlightService;

@RequestMapping("api")
@RestController
@CrossOrigin({"*", "http://localhost:4203"})
public class FlightController {
	
	@Autowired
	FlightService serv;
	
	@GetMapping("flights")
	public List<Flight> index()
	{
		return serv.index();
	}
	
	@GetMapping("flights/{id}")
	public Flight show(HttpServletResponse resp, @PathVariable int id) {
		Flight flight = serv.findById(id);
		if(flight == null) {
			resp.setStatus(404);
		}
		return flight;
	}
	
	 @GetMapping("flights/search/{keyword}")
	  public List<Flight> searchByKeyword(@PathVariable String keyword){
		  return serv.searchFlightsByKeyword(keyword);
		  
	  }
	 
	 @GetMapping("flights/search2/{keyword2}")
	 public List<Flight> searchByKeyword2(@PathVariable String keyword2){
		 return serv.searchFlightsByKeyword2(keyword2);
		 
	 }
	 
	  @GetMapping("flights/search/price/{low}/{hi}")
	  public List<Flight> searchByPriceRange(@PathVariable Integer low, @PathVariable Integer hi){
		return serv.searchFlightsByPriceRange(low, hi);
		  
	  }
	 
	@PostMapping("flights")
	public Flight addFlight(HttpServletResponse resp, @RequestBody Flight flight) {
		Flight newFlight = serv.create(flight);
		if (newFlight == null) {
			resp.setStatus(404);
		}
		if(newFlight != null) {
			resp.setStatus(201);
		}
		return newFlight;
	}
	
	@PutMapping("flights/{id}")
	public Flight updateFlight(@RequestBody Flight flight, @PathVariable int id) {
		return serv.update(flight, id);
	}
	
	@DeleteMapping("flights/{id}")
	public void deleteFlight(@PathVariable int id) {
		serv.delete(id);
	}
	
	
	
//	 ********************************    My Stretch Goals:   ********************************
//	 @GetMapping("flights/search/{date}")
//	 public List<Flight> searchByDate(@PathVariable LocalDateTime date){
//		 return serv.searchFlightsByDate(date);
//		 
//	 }
	
	@GetMapping("flights/search/std/{s}/{e}")
	public List<Flight> searchFlightsByStdRange(@PathVariable String s, @PathVariable String e){
		LocalDateTime start = LocalDateTime.parse(s);
		LocalDateTime end = LocalDateTime.parse(e);
		return serv.searchFlightsByStdRange(start, end);
		
	}
}

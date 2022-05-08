package com.skilldistillery.repositories;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.skilldistillery.entities.Flight;

public interface FlightRepository extends JpaRepository<Flight, Integer>{

	List<Flight> findByNameLike(@Param("Keyword") String keyword);
	List<Flight> findByFromAirportLike(@Param("Keyword2") String keyword2);
	List<Flight> findByPriceBetween(double low, double high);
	
//	****************    My Stretch Goals:   ****************
//	List<Flight> findByStdLike(@Param("d") LocalDateTime date);
	
//	List<Flight> findByStdBetween(
//            //@Param("s") 
//            LocalDateTime start,
//            //@Param("e") 
//            LocalDateTime end);
}

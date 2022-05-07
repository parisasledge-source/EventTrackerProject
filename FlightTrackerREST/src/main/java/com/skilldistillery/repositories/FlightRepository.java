package com.skilldistillery.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.skilldistillery.entities.Flight;

public interface FlightRepository extends JpaRepository<Flight, Integer>{

	//List<Flight> findByNameLike(@Param("Keyword") String keyword);

}

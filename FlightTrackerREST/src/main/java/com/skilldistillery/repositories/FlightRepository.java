package com.skilldistillery.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.entities.Flight;

public interface FlightRepository extends JpaRepository<Flight, Integer>{

}

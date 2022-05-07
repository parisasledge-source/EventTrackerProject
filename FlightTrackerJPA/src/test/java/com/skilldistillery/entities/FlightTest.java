package com.skilldistillery.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class FlightTest {
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Flight flight;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("FlightJPA");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		flight = em.find(Flight.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		flight = null;
	}

	@Test
	@DisplayName("Testing Basic Flight mapping")
	void test() {
		
//		mysql> select * from flight where id = 1;
//		+----+--------+-----------------------------+---------------------------+--------------------------+------------------------+--------------+------------+-------------------+-------------------+
//		| id | name   | scheduled_time_of_departure | scheduled_time_of_arrival | actual_time_of_departure | actual_time_of_arrival | from_airport | to_airport | airline           | aircraft          |
//		+----+--------+-----------------------------+---------------------------+--------------------------+------------------------+--------------+------------+-------------------+-------------------+
//		|  1 | AA2477 | 2022-05-01 07:35:00         | 2022-05-01 13:30:00       | 2022-05-01 07:42:00      | 2022-05-01 18:01:00    | SEA          | DFW        | American Airlines | Airbus A321-253NX |
//		+----+--------+-----------------------------+---------------------------+--------------------------+------------------------+--------------+------------+-------------------+-------------------+
		
		
		assertNotNull(flight);
		assertEquals("AA2477", flight.getName());
		assertEquals(2022, flight.getStd().getYear());
		assertEquals(05, flight.getStd().getMonthValue());
		assertEquals(01, flight.getStd().getDayOfMonth());
		assertEquals(2022, flight.getSta().getYear());
		assertEquals(05, flight.getSta().getMonthValue());
		assertEquals(01, flight.getSta().getDayOfMonth());
		assertEquals("SEA", flight.getFromAirport());
		assertEquals("DFW", flight.getToAirport());
		assertEquals("American Airlines", flight.getAirline());
		
	}
	

}

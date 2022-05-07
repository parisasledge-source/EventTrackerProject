package com.skilldistillery.entities;

import java.time.LocalDate;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Flight {
	
//	mysql> mysql> desc flight;
//	+-----------------------------+--------------+------+-----+---------+-------+
//	| Field                       | Type         | Null | Key | Default | Extra |
//	+-----------------------------+--------------+------+-----+---------+-------+
//	| id                          | int(11)      | NO   | PRI | NULL    |       |
//	| name                        | varchar(500) | NO   |     | NULL    |       |
//	| scheduled_time_of_departure | datetime     | YES  |     | NULL    |       |
//	| scheduled_time_of_arrival   | datetime     | YES  |     | NULL    |       |
//	| actual_time_of_departure    | datetime     | YES  |     | NULL    |       |
//	| actual_time_of_arrival      | datetime     | YES  |     | NULL    |       |
//	| from_airport                | varchar(500) | YES  |     | NULL    |       |
//	| to_airport                  | varchar(500) | YES  |     | NULL    |       |
//	| airline                     | varchar(500) | YES  |     | NULL    |       |
//	| aircraft                    | varchar(500) | YES  |     | NULL    |       |
//	+-----------------------------+--------------+------+-----+---------+-------+
//	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String name;
	
	@Column(name="scheduled_time_of_departure")
	private LocalDate std;
	
	@Column(name="scheduled_time_of_arrival")
	private LocalDate sta;
	
	@Column(name="actual_time_of_departure")
	private LocalDate atd;
	
	@Column(name="actual_time_of_arrival")
	private LocalDate status;
	
	@Column(name="from_airport")
	private String fromAirport;
	
	@Column(name="to_airport")
	private String toAirport;
	
	private String airline;
	
	private String aircraft;
	
	// methods


	public Flight() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public LocalDate getStd() {
		return std;
	}

	public void setStd(LocalDate std) {
		this.std = std;
	}

	public LocalDate getSta() {
		return sta;
	}

	public void setSta(LocalDate sta) {
		this.sta = sta;
	}

	public LocalDate getAtd() {
		return atd;
	}

	public void setAtd(LocalDate atd) {
		this.atd = atd;
	}

	public LocalDate getStatus() {
		return status;
	}

	public void setStatus(LocalDate status) {
		this.status = status;
	}

	public String getFromAirport() {
		return fromAirport;
	}
	
	public void setFromAirport(String fromAirport) {
		this.fromAirport = fromAirport;
	}
	
	public String getToAirport() {
		return toAirport;
	}
	
	public void setToAirport(String toAirport) {
		this.toAirport = toAirport;
	}
	
	public String getAirline() {
		return airline;
	}
	
	public void setAirline(String airline) {
		this.airline = airline;
	}
	
	public String getAircraft() {
		return aircraft;
	}
	
	public void setAircraft(String aircraft) {
		this.aircraft = aircraft;
	}
	
	@Override
	public String toString() {
		return "Flight [id=" + id + ", name=" + name + ", std=" + std + ", sta=" + sta + ", atd=" + atd + ", status="
				+ status + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Flight other = (Flight) obj;
		return id == other.id;
	}

}

package com.skilldistillery.entities;

import java.time.LocalDateTime;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Flight {
	
//	mysql> desc flight;
//	+-----------------------------+---------------+------+-----+---------+----------------+
//	| Field                       | Type          | Null | Key | Default | Extra          |
//	+-----------------------------+---------------+------+-----+---------+----------------+
//	| id                          | int(11)       | NO   | PRI | NULL    | auto_increment |
//	| name                        | varchar(500)  | NO   |     | NULL    |                |
//	| scheduled_time_of_departure | datetime      | YES  |     | NULL    |                |
//	| scheduled_time_of_arrival   | datetime      | YES  |     | NULL    |                |
//	| actual_time_of_departure    | datetime      | YES  |     | NULL    |                |
//	| actual_time_of_arrival      | datetime      | YES  |     | NULL    |                |
//	| from_airport                | varchar(500)  | YES  |     | NULL    |                |
//	| to_airport                  | varchar(500)  | YES  |     | NULL    |                |
//	| airline                     | varchar(500)  | YES  |     | NULL    |                |
//	| aircraft                    | varchar(500)  | YES  |     | NULL    |                |
//	| price                       | decimal(10,0) | YES  |     | NULL    |                |
//	| photo_url                   | varchar(2000) | YES  |     | NULL    |                |
//	+-----------------------------+---------------+------+-----+---------+----------------+

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String name;
	
	@Column(name="scheduled_time_of_departure")
	private LocalDateTime std;
	
	@Column(name="scheduled_time_of_arrival")
	private LocalDateTime sta;
	
	@Column(name="actual_time_of_departure")
	private LocalDateTime atd;
	
	@Column(name="actual_time_of_arrival")
	private LocalDateTime status;
	
	@Column(name="from_airport")
	private String fromAirport;
	
	@Column(name="to_airport")
	private String toAirport;
	
	private String airline;
	
	private String aircraft;
	
	private double price;
	
	@Column(name="photo_url")
	private String photoUrl;
	
	
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

	public LocalDateTime getStd() {
		return std;
	}

	public void setStd(LocalDateTime std) {
		this.std = std;
	}

	public LocalDateTime getSta() {
		return sta;
	}

	public void setSta(LocalDateTime sta) {
		this.sta = sta;
	}

	public LocalDateTime getAtd() {
		return atd;
	}

	public void setAtd(LocalDateTime atd) {
		this.atd = atd;
	}

	public LocalDateTime getStatus() {
		return status;
	}

	public void setStatus(LocalDateTime status) {
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
	
	public double getPrice() {
		return price;
	}
	
	public void setPrice(double price) {
		this.price = price;
	}
	
	public String getPhotoUrl() {
		return photoUrl;
	}
	
	public void setPhotoUrl(String photoUrl) {
		this.photoUrl = photoUrl;
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

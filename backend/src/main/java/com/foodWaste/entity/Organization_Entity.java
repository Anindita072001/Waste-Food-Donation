package com.foodWaste.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Entity
@Data
@Table(name="orgaDetails")
public class Organization_Entity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int organization_id;
	
	@NotNull(message="enter the organization_type")
	private String organization_type;
	
	@NotNull(message="enter the organization_name")
private String organization_name;
	
	@NotNull(message="enter the organization_owner_name")
private String organization_owner_name;
	
	@NotNull(message="enter the location")
	private String location;
	
	@NotNull(message="enter the organization_number")
private Long organization_number;
	
	@NotNull(message="enter the organization_email_id")
private String emailId;
	
	@NotNull(message="enter the organization_password")
private String organization_password;



}

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
@Table(name="donorDetails")
public class Donor_Entity {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
private int donor_id;
	
	@NotNull(message="enter the name")
private String donor_name;
	
	@NotNull(message="enter the number")
private Long donor_number;
	
	@NotNull(message="enter the emailId")

private String emailId;
	
	@NotNull(message="enter the location")
private String donor_location;
	
	@NotNull(message="enter the password")
private String donor_password;
	
	


}

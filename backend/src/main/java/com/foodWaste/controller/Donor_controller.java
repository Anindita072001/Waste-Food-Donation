package com.foodWaste.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.foodWaste.dto.DonorDTO;
import com.foodWaste.entity.Donor_Entity;
import com.foodWaste.service.DonorService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "*")
public class Donor_controller {
	@Autowired
	DonorService ds;
	
	@PostMapping("/adddonorname")
	public ResponseEntity<String> adddonorname(@RequestBody @Valid  DonorDTO donor  ) {
		Donor_Entity d1 = ds.loginDonor(donor.getEmailId());
		if(d1==null) {
			ds.adddonorname(donor);
			return new ResponseEntity<>("Registration Successfull", HttpStatus.OK);
		}
		else {
			
			return new ResponseEntity<>("Registration Failed", HttpStatus.BAD_REQUEST);

		}
		
	}
	
	@PostMapping("/login")
    public ResponseEntity<String> loginSubmit(@RequestBody DonorDTO donor) {
		
		
		try {
			String pass = donor.getDonorPassword();
			Donor_Entity user= ds.loginDonor(donor.getEmailId());
			if(user==null) {
				return new ResponseEntity<>("User not present", HttpStatus.CONFLICT);
			}
			else if (user !=null && user.getDonor_password().equals(pass)) {
	        	
	        	return new ResponseEntity<>(String.valueOf(user.getDonor_id()),HttpStatus.OK);
	            	
	          
	        } else {
	        	return new ResponseEntity<>("incorrect password", HttpStatus.BAD_REQUEST);
	        	
	        	
	        }
		}catch(Exception e) {
			return new ResponseEntity<>("Error during login", HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
    }
	
	
	
	@GetMapping("/getdonorname")
    public List<Donor_Entity> getAlldonor() {
	 	return ds.fetchAllDonor_Entity();
       
    }
    
  
    @GetMapping("/getdonorname/{id}") 
	  public Donor_Entity getdonornameById(@PathVariable("id")int donor_id)
	  {
		  return ds.getDonorById(donor_id);
	  }
    
    @PutMapping("/donorname/{id}")
    public Donor_Entity updatedonorname(@PathVariable("id") int id, @RequestBody DonorDTO donor) {
	
      return ds.upadteDonorById(id, donor) ; 
    }
  
  @DeleteMapping("/donordelete/{id}")
  public String deletedonorname(@PathVariable("id") int donor_id) {
	
	 return ds.deletedonortById(donor_id);
  }
}

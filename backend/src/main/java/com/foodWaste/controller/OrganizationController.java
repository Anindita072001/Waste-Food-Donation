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

import com.foodWaste.dto.OrganizationDTO;
import com.foodWaste.entity.Organization_Entity;
import com.foodWaste.service.OrganizationService;

import jakarta.validation.Valid;



@RestController
@CrossOrigin(origins = "*")
public class OrganizationController {
	@Autowired
	OrganizationService os;
	
	@PostMapping("/addorganizationname")
	public ResponseEntity<String> addorganizationname(@RequestBody @Valid OrganizationDTO orga  ) {
						
		Organization_Entity o1 = os.loginOrga(orga.getEmailId());
		if(o1==null) {
			os.addorganizationname(orga);
			return new ResponseEntity<>("Registration Successfull", HttpStatus.OK);
		}
		else {
			
			return new ResponseEntity<>("User Already Exist", HttpStatus.CREATED);
		}
	}
	
	@PostMapping("/orgLogin")
    public ResponseEntity<String> loginSubmit(@RequestBody OrganizationDTO orga) {
		String pass = orga.getOrganizationPassword();
		Organization_Entity user= os.loginOrga(orga.getEmailId());
		if(user==null) {
			return new ResponseEntity<>("User not present", HttpStatus.CONFLICT);
		}
		else if (user !=null && user.getOrganization_password().equals(pass)) {
        	
        	return new ResponseEntity<>(String.valueOf(user.getOrganization_id()),HttpStatus.OK);
            	
          
        } else {
        	return new ResponseEntity<>("invalid login", HttpStatus.BAD_REQUEST);
        	
        	
        }
    }
	
	
	@GetMapping("/getorganizationname")
    public List<Organization_Entity> getAllorga() {
	 	       return os.fetchAllOrganization_Entity();
    }
    
    
    @GetMapping("/getorganizationname/{id}") //localhost:8080/getPatient/5
	  public Organization_Entity getorganizationnameById(@PathVariable("id")int organization_id)
	  {
    			
		  		  return os.getOrganizationById(organization_id);
	  }
    
    @PutMapping("/organizationname/{id}")
    public Organization_Entity updateorganizationname(@PathVariable("id") int id, @RequestBody OrganizationDTO orga) {
    	return os.upadteOrganizationById(id, orga);
         }
  
  @DeleteMapping("/organizationname/{id}")
  public String deleteorganizationname(@PathVariable("id") int organization_id) {
	return os.deletePatientById(organization_id);
	   }
}

package com.foodWaste.controller;


import java.io.IOException;
import java.sql.Date;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.foodWaste.entity.Donor_Entity;
import com.foodWaste.entity.Post_Entity;
import com.foodWaste.service.PostService;

@RestController
@CrossOrigin
public class PostController {
	@Autowired
PostService ps;
	
	@PostMapping(value = "/addpostname",  consumes = "multipart/form-data")
	public ResponseEntity<Post_Entity> adddonorname(
			@RequestParam("description") String description,
			@RequestParam("category") String category,
            @RequestParam("location") String location,
            @RequestParam("post_date") Date postDate,
            @RequestParam("food_type") String foodType,
            @RequestParam("de") Donor_Entity de,
            @RequestParam("image") MultipartFile image  ) throws IOException {
		
		Post_Entity pe = new Post_Entity();
		pe.setDescribtion(description);
		pe.setCategory(category);
		pe.setFood_type(foodType);
		pe.setLocation(location);
		pe.setPost_date(postDate);
		pe.setDe(de);
		pe.setImage(image.getBytes());
		
		return new ResponseEntity<> (ps.addpostname(pe),HttpStatus.CREATED);
		
	}
	
	
	@GetMapping("/getpostname")
    public List<Post_Entity> getAllpost() {
	 	
       return ps.fetchAllPost_Entity();
    }
    
    
    @GetMapping("/getpostname/{id}") 
	  public Post_Entity getpostnameById(@PathVariable("id")int post_id)
	  {
    	return ps.getpostById(post_id);
		 
	  }
    
    @PutMapping("/postname/{id}")
    public Post_Entity updatepostname(@PathVariable("id") int post_id, @RequestBody Post_Entity post) {
    	return ps.upadtepostById(post_id, post);
       
    }
  
  @DeleteMapping("/postname/{id}")
  public String deletepostname(@PathVariable("id") int post_id) {
	return ps.deletepostById(post_id);
	 
  }
  @DeleteMapping("/deleteByDonor/{donorId}")
  public ResponseEntity<String> deletePostsByDonorId(@PathVariable("donorId") int donorId) {
      ps.deletePostsByDonorId(donorId);
      return ResponseEntity.ok("All posts for donor ID " + donorId + " deleted successfully");
  }
}

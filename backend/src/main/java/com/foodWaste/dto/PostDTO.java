package com.foodWaste.dto;

import java.sql.Date;

import jakarta.persistence.Column;
import lombok.Data;

@Data
public class PostDTO {

	
	
	private String foodType;
	private Date location;
	
	private Date postDate;
	
	
	private String describtion;
	
	@Column(columnDefinition = "LONGBLOB")
	private byte[] image;
	
}

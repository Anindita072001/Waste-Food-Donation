package com.foodWaste.service;
import java.util.List;

import com.foodWaste.dto.DonorDTO;
import com.foodWaste.entity.Donor_Entity;
public interface DonorService {
	DonorDTO adddonorname(DonorDTO donor); // Insert
	List<Donor_Entity> fetchAllDonor_Entity(); // select
	Donor_Entity getDonorById(int donor_id); // select by id
	Donor_Entity upadteDonorById(int donor_id,DonorDTO  donor); // Update
	String deletedonortById(int donor_id);
	Donor_Entity loginDonor(String email);
}

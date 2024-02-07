package com.foodWaste.service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import org.springframework.transaction.annotation.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.foodWaste.Repository.DonerRepository;
import com.foodWaste.dto.DonorDTO;
import com.foodWaste.entity.Donor_Entity;
@Service
@Transactional
public class DonorImpl implements DonorService {
	@Autowired
	DonerRepository dr;
	
	@Override
	public DonorDTO adddonorname(DonorDTO donor) {
		Donor_Entity de1 = new Donor_Entity();
		System.out.println("yyyyyyyyyyyyyyyyyy  "+donor);
		de1.setDonor_name(donor.getDonorName());
		de1.setEmailId(donor.getEmailId());
		de1.setDonor_number(donor.getDonorNumber());
		de1.setDonor_location(donor.getDonorLocation());
		de1.setDonor_password(donor.getDonorPassword());
		 dr.save(de1);
		 return donor;
	}
	@Override
	public Donor_Entity loginDonor(String email) {
		Donor_Entity de= dr.findByEmailId(email);

		return de;
	}
	
	@Override
	public List<Donor_Entity> fetchAllDonor_Entity() {
		List<Donor_Entity> allDonor_Entity = dr.findAll();
		return allDonor_Entity;
	}

	@Override
	public Donor_Entity getDonorById(int donor_id) {
		Optional<Donor_Entity> donor = dr.findById(donor_id);
		if (donor.isPresent()) {

			return donor.get();
		}
		return null;
	}

	@Override
	public Donor_Entity upadteDonorById(int donor_id, DonorDTO donor) {
		Optional<Donor_Entity> d1 = dr.findById(donor_id);
		
		if (d1.isPresent()) {
			
			Donor_Entity originaldonor = d1.get();
			
			 if (Objects.nonNull(donor.getDonorName()) && !"".equalsIgnoreCase(donor.getDonorName())) {
				 originaldonor.setDonor_name(donor.getDonorName());
	            }
			 
			 if (Objects.nonNull(donor.getDonorNumber()) && !(0==donor.getDonorNumber())) {
				 originaldonor.setDonor_number(donor.getDonorNumber());
	            }
			 
			 if (Objects.nonNull(donor.getEmailId()) && !"".equalsIgnoreCase(donor.getEmailId())) {
				 originaldonor.setEmailId(donor.getEmailId());
	            }
			 
			 if (Objects.nonNull(donor.getDonorLocation()) && !"".equalsIgnoreCase(donor.getDonorLocation())) {
				 originaldonor.setDonor_location(donor.getDonorLocation());
	            }
			 
			 if (Objects.nonNull(donor.getDonorPassword()) && !"".equalsIgnoreCase(donor.getDonorPassword())) {
				 originaldonor.setDonor_password(donor.getDonorPassword());
	            }
			 
			
			 
			return dr.save(originaldonor);
	            
			
		}
		return null;
	}

	@Override
	public String deletedonortById(int donor_id) {
		if(dr.findById(donor_id).isPresent()) {
			dr.deleteById(donor_id);
			
			return "user deleted successfully";
		}
		return "No such user in the database";
	}
	

}

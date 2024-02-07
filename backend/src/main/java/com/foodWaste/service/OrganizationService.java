package com.foodWaste.service;

import java.util.List;

import com.foodWaste.dto.OrganizationDTO;
import com.foodWaste.entity.Organization_Entity;

public interface OrganizationService {

	OrganizationDTO addorganizationname(OrganizationDTO organization); // Insert
	List<Organization_Entity> fetchAllOrganization_Entity(); // select
	Organization_Entity getOrganizationById(int organization_id); // select by id
	Organization_Entity upadteOrganizationById(int Organization_id,OrganizationDTO  organization); // Update
	String deletePatientById(int organization_id);
	Organization_Entity loginOrga(String email);
}

package com.foodWaste.service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.foodWaste.Repository.OrganizationRepository;
import com.foodWaste.dto.OrganizationDTO;
import com.foodWaste.entity.Organization_Entity;
@Service
@Transactional
public class OrganizationImpl implements OrganizationService {
	@Autowired
	OrganizationRepository or;
	
	@Override
	public OrganizationDTO addorganizationname(OrganizationDTO organization) {
		
		Organization_Entity de1 = new Organization_Entity();
		de1.setOrganization_type(organization.getOrganizationType());
		de1.setOrganization_name(organization.getOrganizationName());
		de1.setOrganization_owner_name(organization.getOrganizationOwnerName());
		de1.setLocation(organization.getLocation());
		de1.setOrganization_number(organization.getOrganizationNumber());
		de1.setEmailId(organization.getEmailId());
		de1.setOrganization_password(organization.getOrganizationPassword());
		 or.save(de1);
		 return organization;
	}

	@Override
	public Organization_Entity loginOrga(String email) {
		Organization_Entity oe= or.findByEmailId(email);
		
		return oe;
	}
	
	@Override
	public List<Organization_Entity> fetchAllOrganization_Entity() {
		List<Organization_Entity> allOrganization_Entity = or.findAll();
		return allOrganization_Entity;
	}

	@Override
	public Organization_Entity getOrganizationById(int organization_id) {
		Optional<Organization_Entity> organization = or.findById(organization_id);
		if (organization.isPresent()) {

			return organization.get();
		}
		return null;
		
	}

	@Override
	public Organization_Entity upadteOrganizationById(int OrgaID, OrganizationDTO organization) {
		Optional<Organization_Entity> o1 = or.findById(OrgaID);
		
		if (o1.isPresent()) {
			
			Organization_Entity originalorga = o1.get();
			
			 if (Objects.nonNull(organization.getOrganizationType()) && !"".equalsIgnoreCase(organization.getOrganizationType())) {
				 originalorga.setOrganization_type(organization.getOrganizationType());;
	            }
			
			 if (Objects.nonNull(organization.getOrganizationName()) && !"".equalsIgnoreCase(organization.getOrganizationName())) {
				 originalorga.setOrganization_name(organization.getOrganizationName());
	            }
			 
			 if (Objects.nonNull(organization.getOrganizationOwnerName()) && !"".equalsIgnoreCase(organization.getOrganizationOwnerName())) {
				 originalorga.setOrganization_owner_name(organization.getOrganizationOwnerName());
	            }
			 
			 if (Objects.nonNull(organization.getOrganizationNumber()) && !(0==organization.getOrganizationNumber())) {
				 originalorga.setOrganization_number(organization.getOrganizationNumber());
	            }
			 
			 if (Objects.nonNull(organization.getEmailId()) && !"".equalsIgnoreCase(organization.getEmailId())) {
				 originalorga.setEmailId(organization.getEmailId());;
	            }
			 
			 
			 if (Objects.nonNull(organization.getLocation()) && !"".equalsIgnoreCase(organization.getLocation())) {
				 originalorga.setLocation(organization.getLocation());
	            }
			 
			 if (Objects.nonNull(organization.getOrganizationPassword()) && !"".equalsIgnoreCase(organization.getOrganizationPassword())) {
				 originalorga.setOrganization_password(organization.getOrganizationPassword());
	            }
			 
			
			 
			return or.save(originalorga);
	            
			
		}
		return null;
	}

	@Override
	public String deletePatientById(int organization_id) {
		if(or.findById(organization_id).isPresent()) {
			or.deleteById(organization_id);
			return "user deleted successfully";
		}
		return "No such user in the database";
	}
	

}

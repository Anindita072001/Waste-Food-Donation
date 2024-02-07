package com.foodWaste.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.foodWaste.entity.Organization_Entity;
@Repository
public interface OrganizationRepository extends JpaRepository<Organization_Entity, Integer> {
	Organization_Entity findByEmailId(String email);
}

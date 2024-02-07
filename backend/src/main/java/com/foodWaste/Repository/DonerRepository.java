package com.foodWaste.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.foodWaste.entity.Donor_Entity;

@Repository
public interface DonerRepository extends JpaRepository<Donor_Entity, Integer> {
	Donor_Entity findByEmailId(String email);
}

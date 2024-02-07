package com.foodWaste.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.foodWaste.entity.Post_Entity;
@Repository
public interface PostRepository extends JpaRepository<Post_Entity, Integer> {
	
	
	 	@Transactional
	    @Modifying
	    @Query("DELETE FROM Post_Entity p WHERE p.de.donor_id = :donorId")
	    void deleteByDonorId(@Param("donorId") int donorId);

}

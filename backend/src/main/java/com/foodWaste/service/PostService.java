package com.foodWaste.service;

import java.util.List;


import com.foodWaste.entity.Post_Entity;

public interface PostService {
	Post_Entity addpostname(Post_Entity post); // Insert
	List<Post_Entity> fetchAllPost_Entity(); // select
	Post_Entity getpostById(int post_id); // select by id
	Post_Entity upadtepostById(int Post_id,Post_Entity post); // Update
	String deletepostById(int post_id);
	void deletePostsByDonorId(int donorId);
}

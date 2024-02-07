package com.foodWaste.service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodWaste.Repository.PostRepository;

import com.foodWaste.entity.Post_Entity;
@Service
public class PostImpl implements PostService{
	@Autowired
    PostRepository pr;
	@Override
	public Post_Entity addpostname(Post_Entity post) {
		
		return pr.save(post);
	}

	@Override
	public List<Post_Entity> fetchAllPost_Entity() {
		List<Post_Entity> allPost_Entity = pr.findAll();
		return allPost_Entity;
		
	}

	@Override
	public Post_Entity getpostById(int post_id) {
		Optional<Post_Entity> post = pr.findById(post_id);
		if (post.isPresent()) {

			return post.get();
		}
		return null;
	}

	@Override
	public Post_Entity upadtepostById(int Post_id, Post_Entity post) {
		Optional<Post_Entity> p1 = pr.findById(Post_id);
		
		if (p1.isPresent()) {
			
			Post_Entity originalpost = p1.get();
			
			 if (Objects.nonNull(post.getFood_type()) && !"".equalsIgnoreCase(post.getFood_type())) {
				 originalpost.setFood_type(post.getFood_type());
	            }
			 if (Objects.nonNull(post.getDescribtion()) && !"".equalsIgnoreCase(post.getDescribtion())) {
				 originalpost.setDescribtion(post.getDescribtion());
	            }
			 if (Objects.nonNull(post.getLocation()) && !"".equalsIgnoreCase(post.getLocation())) {
				 originalpost.setLocation(post.getLocation());
	            }
			 
			 if (Objects.nonNull(post.getCategory()) && !"".equalsIgnoreCase(post.getCategory())) {
				 originalpost.setCategory(post.getCategory());
	            }
			 
			 if (Objects.nonNull(post.getPost_date()) ) {
				 originalpost.setPost_date(post.getPost_date());
	            }
			 
			
			 
			return pr.save(originalpost);
	            
			
		}
		return null;
	}

	@Override
	public String deletepostById(int post_id) {
		if(pr.findById(post_id).isPresent()) {
			
			pr.deleteById(post_id);
			return "user deleted successfully";
		}
		return "No such user in the database";
	}
	
	
	public void deletePostsByDonorId(int donorId) {
        pr.deleteByDonorId(donorId);
    }
		
	
	

}

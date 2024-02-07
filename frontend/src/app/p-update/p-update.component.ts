import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-p-update',
  templateUrl: './p-update.component.html',
  styleUrl: './p-update.component.css'
})
export class PUpdateComponent implements OnInit{

  postById:any;
  receivedData:any;
  updatePost={
    food_type: "",
    post_date: "",
    location: "",
    describtion: "",
    category: ""
  }
  constructor(private server:ConnectionService, private route:ActivatedRoute,private router:Router){}


  ngOnInit(){
    this.route.params.subscribe(params => {
      this.receivedData = params['poID'];
    });
    console.log(this.receivedData);

    this.server.getPostById(this.receivedData).subscribe(
      (data)=>{
        this.postById = data;
        console.log(this.postById);
        
      },
      (error)=>{
        console.log(error);
        
      }
    )
    
  }

  updatePostSubmit(){
    this.updatePost.food_type = this.postById.food_type;
    this.updatePost.category= this.postById.category;
    this.updatePost.describtion = this.postById.describtion;
    this.updatePost.location = this.postById.location;
    this.updatePost.post_date = this.postById.post_date;
    this.server.updatePost(this.postById.post_id,this.updatePost).subscribe(
      (data)=>{
        console.log(data);
        this.router.navigate(['/donerprofile']);
      },
      (error)=>{
        console.log(error);
        
      }
    )

  }

}

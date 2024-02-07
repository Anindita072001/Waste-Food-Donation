import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit{

  posts: any[]=[];
  receivedData:any;
  constructor(private server:ConnectionService, private router:Router, private route:ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.receivedData = params['pCategory'];
      
    });
    // console.log("pc" , this.receivedData);
    
    this.server.getAllPosts().subscribe(
      (data) => {
        


        data.sort((a, b) => {
          const dateA = new Date(a.post_date);
          const dateB = new Date(b.post_date);
          return dateB.getTime() - dateA.getTime();
        });

        
        this.posts = data;
        if(this.receivedData.toLowerCase()=="human"){
          this.posts =data.filter(d=>d.category.toLowerCase()===this.receivedData.toLowerCase());
          // console.log("ok",this.posts);
          
          
        }

        if(this.receivedData.toLowerCase()=="animal"){
          this.posts =data.filter(d=>d.category.toLowerCase()===this.receivedData.toLowerCase());
          // console.log("ok",this.posts);
          
        }
        // else{
        //   this.posts = data;
        // }
        // console.log(this.posts);
     
      },
      (error) => {
        console.log(error);
      }
    );
  }

  isPastDate(dateString: string): boolean {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const postDate = new Date(dateString);

    const yesterday = new Date();
    yesterday.setHours(0, 0, 0, 0);
    yesterday.setDate(currentDate.getDate() - 1);
    
    
    
    return postDate < yesterday;
  }
  
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectionService } from '../../connection.service';
import {Router } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-doner-profile',
  templateUrl: './doner-profile.component.html',
  styleUrl: './doner-profile.component.css',
  host: {ngSkipHydration: 'true'},
})
export class DonerProfileComponent implements OnInit{

  donorData:any;
  dID:number;
  c:boolean=true;
  posts:any[]=[];
  postById:any;
  dpoID:any;
  constructor(private service:ConnectionService , private router:Router){}
  updateData={
    donorName:"",
    donorNumber:null,
    emailId:"",
    donorLocation:"",
    donorPassword:""

  }

 
  openModel(){
    const modelDiv = document.getElementById('myModel');
    if(modelDiv!=null){
      modelDiv.style.display = 'block';
    }
  }
  
  closeModel(){
    const modelDiv = document.getElementById('myModel');
    if(modelDiv!=null){
      modelDiv.style.display = 'none';
    }
  }


  openModel2(){
    const modelDiv = document.getElementById('myModel2');
    if(modelDiv!=null){
      modelDiv.style.display = 'block';
    }
  }
  
  closeModel2(){
    const modelDiv = document.getElementById('myModel2');
    if(modelDiv!=null){
      modelDiv.style.display = 'none';
    }
  }

  openModel3(dpoid){
    const modelDiv = document.getElementById('myModel3');
    if(modelDiv!=null){
      this.dpoID = dpoid;
      modelDiv.style.display = 'block';
    }
  }
  
  closeModel3(){
    const modelDiv = document.getElementById('myModel3');
    if(modelDiv!=null){
      modelDiv.style.display = 'none';
    }
  }

  

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.dID=Number(window.sessionStorage.getItem('doID'));
      console.log("demo" ,this.dID);
    }
      
      
      this.service.getDonorData(this.dID).subscribe(
        (data) => {
          this.donorData= data; 
          console.log("data=>",data);
         
        },
        (error) => {
          console.error("error=>",error); 
        }
      );

      this.service.getAllPosts().subscribe(
        (data) => {
          
          this.posts = data.filter(post => {
            const postDate = post.de.donor_id;
            return postDate === this.dID;
          });
          // this.posts = data;
          console.log(this.posts);
        },
        (error) => {
          console.log(error);
        }
      );
    
}
updateSubmit(){
  this.updateData.donorName=this.donorData.donor_name;
  this.updateData.donorNumber=this.donorData.donor_number;
    this.updateData.donorLocation=this.donorData.donor_location;
    this.updateData.emailId=this.donorData.emailId;
  this.updateData.donorPassword=this.donorData.donor_password;
  console.log("Updated data -> ",this.donorData);
  this.service.updateDoner(this.dID,this.updateData).subscribe(
    (data) => {
      this.donorData= data;
      this.closeModel();
      this.router.navigate(["/donerprofile"]);
      window.location.reload();
      console.log(data);
      
    },
    (error) => {
      console.error(error); 
    }
  )
  
}

deleteDonor(){


  this.service.deleteDonorPost(this.donorData.donor_id).subscribe(
    (data) => {
      this.donorData= data;
     
      console.log(data);
      
    },
    (error) => {
      console.error(error); 
    }
  )



  this.service.deleteDoner(this.donorData.donor_id).subscribe(
    (data) => {
      this.donorData= data;
      this.closeModel();
      window.localStorage.removeItem('loggedIn');
      window.localStorage.removeItem('doID');
      // window.location.reload();
      this.router.navigate(["/"]);
      
      window.location.href = '';
      
    },
    (error) => {
      console.error(error); 
    }
  )
}


updateSubmitPost(poID){
    this.router.navigate(['/profileEdit', poID]);
}

deletePost1(){
  this.service.deletePost(this.dpoID).subscribe(
    (data)=>{
      console.log(data);
      this.router.navigate(['/donerprofile']);
      window.location.reload();
      
    },
    (error)=>{  
      console.log(error);
      
    }
  )
}

}

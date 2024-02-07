import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../connection.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orga-profile',
  templateUrl: './orga-profile.component.html',
  styleUrl: './orga-profile.component.css'
})
export class OrgaProfileComponent implements OnInit{
  orgData:any;
  orgID:number;
  // private hasRefreshed: boolean = false;
  updateData={
    organizationType:"",
    organizationName:"",
    organizationOwnerName:"",
    location:"",
    organizationNumber:null,
    emailId:"",
    organizationPassword:""
  }
  
  constructor(private service:ConnectionService , private router:Router){
    
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

  
  ngOnInit(): void {
    
      this.orgID=Number(window.localStorage.getItem('orgID'));
      console.log(this.orgID);
      
      this.service.getOrganizationData(this.orgID).subscribe(
        (data) => {
          this.orgData= data; 
          console.log(data);
          
        },
        (error) => {
          console.error(error); 
        }
      );
    
    
}

updateSubmit(){
  this.updateData.organizationType=this.orgData.organization_type;
  this.updateData.organizationName=this.orgData.organization_name;
  this.updateData.organizationOwnerName=this.orgData.organization_owner_name;
  this.updateData.location=this.orgData.location;
  this.updateData.organizationNumber=this.orgData.organization_number;
  this.updateData.emailId=this.orgData.emailId;
  this.updateData.organizationPassword=this.orgData.organization_password;
  // console.log("updateddata =>",this.updateData);
  
  this.service.updateOrga(this.orgID,this.updateData).subscribe(
    (data) => {
      this.orgData= data;
      
      this.closeModel();
      this.router.navigate(["/orgaprofile"]);
      window.location.reload();
      console.log(data);
      
    },
    (error) => {
      console.error(error); 
    }
  )
  
}

deleteOrga(){


  

  this.service.deleteOrga(this.orgData.organization_id).subscribe(
    (data) => {
      this.orgData= data;
      this.closeModel();
      window.localStorage.removeItem('orgLoggedIn');
      window.localStorage.removeItem('orgID');
      
      this.router.navigate(["/"]);
      window.location.href = '';
      
      
    },
    (error) => {
      console.error(error); 
    }
  )
}
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConnectionService } from '../connection.service';
import { error } from 'console';
import { Observable, Subscriber } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {
  donorID: number;
  userImage:Observable<any>;
  poData={
    description:"",
    location:"",
    post_date:null,
    food_type:"",
    category:"",
    de:null
  }
  base64code:any;
  
  selectedFile: File;


  donateData:FormGroup;

  constructor(private fb: FormBuilder, private server: ConnectionService,private router: Router) {
    this.donorID = Number(window.localStorage.getItem('doID'));
  }

  ngOnInit(): void {
    this.donorID = Number(window.localStorage.getItem('doID'));

    this.donateData = this.fb.group({
      description:['', Validators.required],
      location:['', Validators.required],
      post_date:['', [Validators.required, this.dateValidator]],
      food_type:['', Validators.required],
      category:['',Validators.required]
      
    })



    
  }

  
  onFileChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.selectedFile = target.files[0];
      this.convertToBase64(this.selectedFile);
    }
  }

  convertToBase64(file: File): void {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      this.base64code = fileReader.result; // Base64 representation of the image
    };
  }
  
  


  
  readFile(file:File,subscriber:Subscriber<any>){
    const filereader = new FileReader();
    filereader.readAsDataURL(file);

    filereader.onload=()=>{
      subscriber.next(filereader.result);
      subscriber.complete()
    }
    filereader.onerror=()=>{
      subscriber.error();
    }

  }
  

  
  submitPost() {
    
    const formData = new FormData();
    this.poData.de = this.donorID;
    console.log(this.poData.de);
    console.log(this.donorID);

    formData.append('description', this.poData.description);
    formData.append('location', this.poData.location);
    formData.append('post_date', this.poData.post_date);
    formData.append('food_type', this.poData.food_type);
    formData.append('category', this.poData.category);
    formData.append('de', this.poData.de);
    formData.append('image', this.selectedFile);
    
    
    
    this.server.createPost(formData).subscribe({
      next:(success)=>{console.log(success);
        this.router.navigate(['/post']);
      },
      error:(error)=>{console.log(error);
      }
    })
  
  
  }




  dateValidator(control) {
    const selectedDate = new Date(control.value);
    if (isNaN(selectedDate.getTime())) {
      return { 'invalidDate': true };
    }
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    if (currentDate==selectedDate) {
      return null;
    }
    if (selectedDate <= currentDate) {  
      return { 'invalidDate': true }; 
    }
    return null; 
  }
  
}


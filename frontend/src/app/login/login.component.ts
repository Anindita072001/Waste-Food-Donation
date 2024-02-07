import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ConnectionService } from '../connection.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  
  isInnvalid:boolean=false;
  invalidMsg:any;
  doLogin:FormGroup;
  constructor(private service:ConnectionService,private fb:FormBuilder,private router: Router){
    this.router.onSameUrlNavigation= 'reload';
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  ngOnInit(): void {
    this.doLogin=this.fb.group({
      emailId:['',[Validators.required, Validators.email]],
      donorPassword:['',[Validators.required, Validators.minLength(6)]]
    })
    
  }
  loginDonor(){
    const ld = this.doLogin.value;
    this.service.login(ld).subscribe({
      next:(response)=>{console.log(response.body);
        window.sessionStorage.setItem('loggedIn', 'true');
        window.sessionStorage.setItem('doID',response.body);
       
        this.router.navigate(['/post',"All"])
        window.location.href = '/post/All';
       
       
      },
      error:(error:HttpErrorResponse)=>{console.log(error.error);
        this.invalidMsg = error.error;
        this.isInnvalid = true;
      }
        
      
  })
  }


  // logout() {
  //   this.loggedIn.next(false);
  //   localStorage.removeItem('loggedIn');
  // }

 

}

import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-org-login',
  templateUrl: './org-login.component.html',
  styleUrl: './org-login.component.css'
})
export class OrgLoginComponent implements OnInit{
  isInnvalid:boolean=false;
  invalidMsg:any;
  orgLogin:FormGroup;
  constructor(private service:ConnectionService,private fb:FormBuilder,private router: Router){}
  ngOnInit(): void {
    this.orgLogin=this.fb.group({
      emailId:['', [Validators.required, Validators.email]],
      organizationPassword:['', Validators.required]
    })
  }
  loginOrg(){
    const ld = this.orgLogin.value;
    console.log(ld);
    
    this.service.orgLogin(ld).subscribe({
      next:(response)=>{console.log(response.body);
        localStorage.setItem('orgLoggedIn', 'true');
        localStorage.setItem('orgID',response.body);
        
        this.router.navigate(['/post',"All"]);
        window.location.href = '/post/All';
      },
      error:(error:HttpErrorResponse)=>{console.log(error);
        this.invalidMsg = error.error;
        this.isInnvalid = true;
      }
        
      
  })
  }
}

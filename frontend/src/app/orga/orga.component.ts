import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConnectionService } from '../connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orga',
  templateUrl: './orga.component.html',
  styleUrl: './orga.component.css'
})
export class OrgaComponent implements OnInit{
  orgaReg : FormGroup;
  constructor(private service:ConnectionService, private fb:FormBuilder,private router: Router){}


  ngOnInit(): void{
    this.orgaReg=this.fb.group({
      organizationType:['', Validators.required],
      organizationName:['', Validators.required],
      organizationOwnerName:['', Validators.required],
      location:['', Validators.required],
      organizationNumber:['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      emailId:['', [Validators.required, Validators.email]],
      organizationPassword:['', [Validators.required, Validators.minLength(6)]]
    })
  }
  public orgaRegister(){
    const orgaData =this.orgaReg.value;
    console.log(orgaData);
   
    
    this.service.orgaRegistration(orgaData).subscribe({
     next:(response)=>{console.log(response);
      this.router.navigate(["/orgLogin"])
     },
     error:(error)=>console.log(error)
     
    }
     
    )
  }
}


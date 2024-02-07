import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-doner',
  templateUrl: './doner.component.html',
  styleUrl: './doner.component.css'
})
export class DonerComponent implements OnInit{
   donerReg : FormGroup;
   constructor(private service:ConnectionService, private fb:FormBuilder,private router: Router) {
    
    }
  ngOnInit():void {
    this.donerReg=this.fb.group({
      donorName:['', Validators.required],
      donorNumber:['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      emailId:['', [Validators.required, Validators.email]],
      donorLocation:['', Validators.required],
      donorPassword:['', [Validators.required, Validators.minLength(6)]]
    })
  }

  public register(){
   const dData =this.donerReg.value;
   console.log(dData);
  
   
   this.service.doRegistration(dData).subscribe({
    next:(success)=>{console.log(success);
      this.router.navigate(["/login"]);
    },
    error:(error)=>console.log(error)
    
   }
    
   )
    
  }

}

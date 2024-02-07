import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  isLogin:boolean=false;
  isOrgLogin:boolean=false;
  // h="human";

constructor(private router:Router){}

  ngOnInit(): void {
    this.isLogin = Boolean(window.sessionStorage.getItem('loggedIn'));
    console.log("ok or not??" ,this.isLogin);
    
    this.isOrgLogin = Boolean(window.localStorage.getItem('orgLoggedIn'));
  }

  submitLogout(){
    window.sessionStorage.removeItem('loggedIn');
    window.sessionStorage.removeItem('doID');
    this.isLogin = Boolean(window.sessionStorage.getItem('loggedIn'));
    this.router.navigateByUrl('')
    window.location.href = '';
  }
  orgLogout(){
    window.localStorage.removeItem('orgLoggedIn');
    window.localStorage.removeItem('orgID');
    this.isOrgLogin = Boolean(window.localStorage.getItem('orgLoggedIn'));
    this.router.navigateByUrl('')
    window.location.href = '';
   
  }
  
  forHuman(){
    this.router.navigate(['/post',"Human"])
    window.location.href="/post/human";
  }

  forAnimal(){
    this.router.navigate(['/post',"Animal"])
    window.location.href="/post/Animal";
  }

  forAll(){
    this.router.navigate(['/post',"All"])
    window.location.href="/post/All";
  }
}

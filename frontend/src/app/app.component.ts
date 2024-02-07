import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'final_sprint2';
  displayMenu:boolean=false;

  isLogin:boolean;
  isOrgLogin:boolean;

  ngOnInit(): void {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined' && typeof sessionStorage !== 'undefined') {
      this.isLogin = Boolean(window.sessionStorage.getItem('loggedIn'));
    this.isOrgLogin = Boolean(window.localStorage.getItem('orgLoggedIn'));
    this.displayMenu= (this.isLogin || this.isOrgLogin)

    }
    
  }

  
}


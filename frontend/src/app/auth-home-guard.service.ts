import { Injectable } from '@angular/core';
import { ConnectionService } from './connection.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthHomeGuardService {

  constructor(private service:ConnectionService,private router:Router) { }
  canActivate(): boolean {
    if (this.service.checkLoggedInStatus() || this.service.checkLoggedInStatus1()) {
      if (this.service.checkLoggedInStatus()) {
        
        this.router.navigate(['donerprofile'])
        return false;
      }
      else if(this.service.checkLoggedInStatus1()){
        
        this.router.navigate(['orgaprofile']);
        return false;
      }
      
     
      
    } else {

      return true;
    }
  }
}

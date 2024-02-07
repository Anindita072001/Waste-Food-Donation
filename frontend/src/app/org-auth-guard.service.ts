import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ConnectionService } from './connection.service';

@Injectable({
  providedIn: 'root'
})
export class OrgAuthGuardService implements CanActivate{
 
  constructor(private service: ConnectionService, private router: Router) { }
  canActivate(): boolean {
    
    if (this.service.checkLoggedInStatus1()) {
     
      return true;
    } else {
      this.router.navigate(['/orgLogin']);
      return false;
    }
  }
}

import { Injectable } from '@angular/core';
import { ConnectionService } from './connection.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private service: ConnectionService, private router: Router) { }
  canActivate(): boolean {
    if (this.service.checkLoggedInStatus()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}

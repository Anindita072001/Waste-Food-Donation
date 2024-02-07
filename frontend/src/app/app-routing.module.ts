import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DonerComponent } from './doner/doner.component';

import { OrgaComponent } from './orga/orga.component';
import { ProfileComponent } from './profile/profile.component';
import { DonerProfileComponent } from './profile/doner-profile/doner-profile.component';
import { OrgaProfileComponent } from './profile/orga-profile/orga-profile.component';
import { DonateComponent } from './donate/donate.component';
import { GallaryComponent } from './gallary/gallary.component';
import { PostComponent } from './post/post.component';
import { AuthGuardService } from './auth-guard.service';
import { HomaPageComponent } from './homa-page/homa-page.component';
import { OrgLoginComponent } from './org-login/org-login.component';
import { OrgAuthGuardService } from './org-auth-guard.service';
import { AuthHomeGuardService } from './auth-home-guard.service';
import { FooterComponent } from './footer/footer.component';
import { MoreComponent } from './more/more.component';
import { PUpdateComponent } from './p-update/p-update.component';



const routes: Routes = [
  
  {path: 'login', component: LoginComponent,canActivate:[AuthHomeGuardService]},
  {path: 'orgLogin',component:OrgLoginComponent,canActivate:[AuthHomeGuardService]},
 
  {path: 'donersignup', component: DonerComponent},
  {path: 'orgasignup', component: OrgaComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'donerprofile', component: DonerProfileComponent,canActivate: [AuthGuardService]},
  {path: 'orgaprofile', component: OrgaProfileComponent,canActivate: [OrgAuthGuardService]},
  {path: 'donateNow', component: DonateComponent},
  {path: 'gallary', component: GallaryComponent},
  // {path: 'post', component:PostComponent},
  {path: 'post/:pCategory', component:PostComponent},
  {path: '', component:HomaPageComponent,canActivate:[AuthHomeGuardService]},
  {path: 'footer', component:FooterComponent},
  {path: 'more', component:MoreComponent},
  {path: 'profileEdit/:poID', component:PUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

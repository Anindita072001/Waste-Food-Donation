import { NgModule } from '@angular/core';

import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GallaryComponent } from './gallary/gallary.component';

import { DonateComponent } from './donate/donate.component';
import { LoginComponent } from './login/login.component';

import { DonerComponent } from './doner/doner.component';
import { OrgaComponent } from './orga/orga.component';
import { ProfileComponent } from './profile/profile.component';
import { DonerProfileComponent } from './profile/doner-profile/doner-profile.component';
import { OrgaProfileComponent } from './profile/orga-profile/orga-profile.component';
import { PostComponent } from './post/post.component';
import { ConnectionService } from './connection.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrgLoginComponent } from './org-login/org-login.component';
import { HomaPageComponent } from './homa-page/homa-page.component';
import { SafePipe } from './safe.pipe';
import { MoreComponent } from './more/more.component';
import { PUpdateComponent } from './p-update/p-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GallaryComponent,
   
    DonateComponent,
    LoginComponent,
   
    DonerComponent,
    OrgaComponent,
    ProfileComponent,
    DonerProfileComponent,
    OrgaProfileComponent,
    PostComponent,
    OrgLoginComponent,
    HomaPageComponent,
    SafePipe,
    MoreComponent,
    PUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [
    provideClientHydration(),
    [ConnectionService]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ParticlesModule } from 'ngx-particle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TokenComponent } from './token/token.component';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { ServiceComponent } from './service/service.component';
import { PartnersComponent } from './partners/partners.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterComponent } from './footer/footer.component';
import { ScrollSpyModule } from 'ngx-scrollspy';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
import { VerifyComponent } from './verify/verify.component';
import { UserComponent } from './user/user.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { AllservicesComponent } from './allservices/allservices.component';
import { SpecialComponent } from './special/special.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    TokenComponent,
    ServiceComponent,
    PartnersComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    NotfoundComponent,
    LoadingComponent,
    VerifyComponent,
    UserComponent,
    UpdateprofileComponent,
    UpdatepasswordComponent,
    AllservicesComponent,
    SpecialComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent,
    ChangepasswordComponent,
    ContactComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    AnimateOnScrollModule.forRoot(),
    CarouselModule,
    BrowserAnimationsModule,
    ScrollSpyModule.forRoot(),
    IvyCarouselModule,
    HttpClientModule,
    ToastrModule.forRoot({countDuplicates:true,closeButton:true}),
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


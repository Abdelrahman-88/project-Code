import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllservicesComponent } from './allservices/allservices.component';
import { AuthGuard } from './auth.guard';
import { ChangeGuard } from './change.guard';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { SpecialComponent } from './special/special.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
import { UserComponent } from './user/user.component';
import { VerifyComponent } from './verify/verify.component';

const routes: Routes = [
  {path:"" , redirectTo:"home" , pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"register", canActivate:[LoginGuard], component:RegisterComponent},
  {path:"verify", component:VerifyComponent},
  {path:"login", canActivate:[LoginGuard], component:LoginComponent},
  {path:"user", canActivate:[AuthGuard], component:UserComponent},
  {path:"updateprofile", canActivate:[AuthGuard], component:UpdateprofileComponent},
  {path:"updatepassword", canActivate:[AuthGuard], component:UpdatepasswordComponent},
  {path:"forgetpassword", component:ForgetpasswordComponent},
  {path:"resetpassword", canActivate:[ChangeGuard], component:ResetpasswordComponent},
  {path:"changepassword", canActivate:[ChangeGuard], component:ChangepasswordComponent},
  // {path:"allservices", component:AllservicesComponent},
  {path:"special", component:SpecialComponent},
  {path:"**" , component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

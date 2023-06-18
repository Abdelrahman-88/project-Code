import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Url ='http://localhost:3000/'

  userData = new BehaviorSubject(null);
  userId = new BehaviorSubject(null);

  constructor(private _HttpClient:HttpClient,private _Router:Router) { 
    if(localStorage.getItem("userToken") != null){      
      this.saveUserData();
    }
    if(localStorage.getItem("userId") != null){      
      this.saveUserId();
    }
  }

  register(body:object):Observable<any>{
    return this._HttpClient.post(`${this.Url}register`,body)
  }

  verify(body:object,id:string):Observable<any>{
    return this._HttpClient.patch(`${this.Url}verifyEmail/${id}`,body)
  }

  resendKey(id:string):Observable<any>{
    return this._HttpClient.get(`${this.Url}resendVerificationKey/${id}`)
  }

  logIn(body:object):Observable<any>{
    return this._HttpClient.post(`${this.Url}logIn`,body)
  }

  updateProfile(id:any,token:any,body:object):Observable<any>{
    const headers = { 'Authorization': `Bearer ${token}` };
    return this._HttpClient.patch(`${this.Url}updateProfile/${id}`,body,{headers})
  }

  updatePassword(id:any,token:any,body:object):Observable<any>{
    const headers = { 'Authorization': `Bearer ${token}` };
    return this._HttpClient.patch(`${this.Url}updatePassword/${id}`,body,{headers})
  }

  sendResetKey(body:object):Observable<any>{
    return this._HttpClient.post(`${this.Url}sendResetKey`,body)
  }

  resetPassword(body:object,token:any):Observable<any>{
    const headers = { 'Authorization': `Bearer ${token}` };
    return this._HttpClient.patch(`${this.Url}resetPassword`,body,{headers})
  }

  changePassword(id:any,token:any,body:object):Observable<any>{
    const headers = { 'Authorization': `Bearer ${token}` };
    return this._HttpClient.patch(`${this.Url}changePassword/${id}`,body,{headers})
  }

  logOut(id:any,token:any):Observable<any>{
    const headers = { 'Authorization': `Bearer ${token}` };
    return this._HttpClient.patch(`${this.Url}logOut/${id}`,"",{headers})  
  }


  saveUserData(){
    let codedUserData = JSON.stringify(localStorage.getItem("userToken"));
    try {
      this.userData.next(jwtDecode(codedUserData));
    } catch (error) {      
      localStorage.removeItem("userToken");
      this._Router.navigate(["/login"]);
    }
  }

  saveUserId(){
    let codedUserId = JSON.stringify(localStorage.getItem("userId"));
    try {
      this.userId.next(jwtDecode(codedUserId));
    } catch (error) {      
    }
  }
}

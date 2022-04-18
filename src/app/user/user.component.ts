import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from './../translate.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userData: any;
  error: string = '';
  language: string = 'EN';

  constructor(
    private _AuthService: AuthService,
    private _Router: Router,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private _TranslateService: TranslateService
  ) {}

  ngOnInit(): void {
    this._TranslateService.language.subscribe((res: any) => {
      this.language = res;
    });
    this.userData = this._AuthService.userData.value;
  }

  updatePassword(){
    this._Router.navigate(["/updatepassword"]);
  }

  updateProfile(){
    this._Router.navigate(["/updateprofile"]);
  }
}

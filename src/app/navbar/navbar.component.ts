import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from './../translate.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from './../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  language: string = 'EN';
  buttonLanguage: string = 'AR';
  isLogin: boolean = false;
  error: string = '';

  constructor(
    private _AuthService: AuthService,
    private _TranslateService: TranslateService,
    private _Router: Router,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    // this.translate.addLangs(['en', 'ar']);
    // this.translate.setDefaultLang('en');
    

    this._TranslateService.language.subscribe((res: any) => {
      this.language = res;
    });

    this._AuthService.userData.subscribe(() => {
      if (this._AuthService.userData.getValue() != null) {
        this.isLogin = true;
      }
      else {
        this.isLogin = false;
      }
    })
  }

  switchLang(lang: string) {
    if (this._TranslateService.language.getValue() == 'EN') {
      this._TranslateService.language.next('AR');
      this.buttonLanguage = 'EN';
    } else {
      this._TranslateService.language.next('EN');
      this.buttonLanguage = 'AR';
    }
    // this.translate.use(lang);
    this.language = this._TranslateService.language.getValue();
  }

  scrollToElement(target: any, event: any): void {
    this._Router.navigate(['/home']);
    document
      .querySelectorAll('.nav-link')
      .forEach((ele: any) => ele.classList.remove('active'));
    const element = document.querySelector(target);
    event.target.classList.add('active');
    try {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    } catch (error) {}
  }

  logOut() {
    this.spinner.show();
    let{_id}:any= this._AuthService.userData.value;
    let token:any = localStorage.getItem("userToken")
    this._AuthService.logOut(_id,token).subscribe({next:(response) => {
      if (response.message == "Logout successfully") {
        localStorage.removeItem("userToken");
        this._AuthService.userData.next(null)
        this.spinner.hide();
        if (this.language == 'EN') {
          this.toastr.success(
            'Logedout successfully',
            '',
            { positionClass: 'toast-bottom-right', timeOut: 5000 }
          );
        } else {
          this.toastr.success(
            'تم تسجيل الخروج بنجاح',
            '',
            { positionClass: 'toast-bottom-right', timeOut: 5000 }
          );
        }
        this._Router.navigate(["/login"]);
      }
      else {
        this.error = response.message;
        this.spinner.hide();
        this.toastr.error(`${this.error}!`, "", { positionClass: 'toast-bottom-right', timeOut: 5000 });
      }
    },
    error:(error:any)=>{     
      this.spinner.hide();
      this.error = error.error.message;
      this.toastr.error(`${this.error}!`, "",{positionClass:'toast-bottom-right',timeOut: 5000});
    
    }})
  }
}

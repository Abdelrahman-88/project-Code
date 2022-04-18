import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from './../translate.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  myStyle: object = {};
  myParams: any = {};
  width: number = 100;
  height: number = 100;
  language: string = 'EN';
  error: string = '';

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.minLength(3),
      Validators.maxLength(30),
      Validators.required,
      Validators.pattern(/^[a-z A-Z]+$/),
    ]),
    companyName: new FormControl(null, [
      Validators.minLength(3),
      Validators.maxLength(30),
      Validators.required,
      Validators.pattern(/^[a-z A-Z]+$/),
    ]),
    position: new FormControl(null, [
      Validators.minLength(3),
      Validators.maxLength(30),
      Validators.required,
      Validators.pattern(/^[a-z A-Z]+$/),
    ]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z@_$&]{8,}$/),
    ]),
    cPassword: new FormControl(null, [Validators.required]),
  });
  constructor(
    private _AuthService: AuthService,
    private _TranslateService: TranslateService,
    private _Router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this._TranslateService.language.subscribe((res: any) => {
      this.language = res;
    });

    this.myStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      'z-index': -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    };

    this.myParams = {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: '#0d6efd',
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000',
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: 'img/github.svg',
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#0d6efd',
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse',
          },
          onclick: {
            enable: true,
            mode: 'push',
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    };
  }

  submitRegisterForm(registerForm: FormGroup) {
    this.spinner.show();
    if (
      registerForm.valid &&
      registerForm.get('cPassword')?.value ===
        registerForm.get('password')?.value
    ) {
      this._AuthService.register(registerForm.value).subscribe({
        next: (response) => {
          if (response.message == 'Registered successfully') {
            localStorage.setItem("userId", response.token);
            this._AuthService.saveUserId();
            this.spinner.hide();
            if (this.language == 'EN') {
              this.toastr.success(
                'Register successfully please verify your email before login',
                '',
                { positionClass: 'toast-bottom-right', timeOut: 5000 }
              );
            } else {
              this.toastr.success(
                'تم التسجيل بنجاح يرجى التحقق من بريدك الإلكتروني قبل تسجيل الدخول',
                '',
                { positionClass: 'toast-bottom-right', timeOut: 5000 }
              );
            }
            this._Router.navigate(['/verify']);
          } else {
            this.spinner.hide();
            this.error = response.message;
            this.toastr.error(`${this.error}!`, '', {
              positionClass: 'toast-bottom-right',
              timeOut: 5000,
            });
          }
        },
        error: (error) => {
          this.spinner.hide();
          this.error = error.error.message;
          this.toastr.error(`${this.error}!`, '', {
            positionClass: 'toast-bottom-right',
            timeOut: 5000,
          });
        },
      });
    } else {
      this.spinner.hide();
      if (this.language == 'EN') {
        this.toastr.error(`Invalid inputs`, '', {
          positionClass: 'toast-bottom-right',
          timeOut: 5000,
        });
      } else {
        this.toastr.error(`يوجد خطاء فى المدخلات!`, '', {
          positionClass: 'toast-bottom-right',
          timeOut: 5000,
        });
      }
    }
  }

  click(){
    this._Router.navigate(['/special']);
    }
}


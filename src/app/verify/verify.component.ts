import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from './../translate.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {
  myStyle: object = {};
  myParams: any = {};
  width: number = 100;
  height: number = 100;
  language: string = 'EN';
  error: string = '';

  verifyForm: FormGroup = new FormGroup({
    verificationKey: new FormControl(null, Validators.required)
  });

  constructor(
    private _AuthService: AuthService,
    private _TranslateService: TranslateService,
    private _Router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService) { }

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

  submitVerifyForm(verifyForm: FormGroup) {
    this.spinner.show();
    let {_id}:any = this._AuthService.userId.value;
    if (
      verifyForm.valid
    ) {
      
      
      this._AuthService.verify(verifyForm.value,_id).subscribe({
        next: (response) => {
          if (response.message == 'Email verified successfully') {
            localStorage.removeItem("userId")
            this.spinner.hide();
            if (this.language == 'EN') {
              this.toastr.success(
                'Email verified successfully',
                '',
                { positionClass: 'toast-bottom-right', timeOut: 5000 }
              );
            } else {
              this.toastr.success(
                'تم التحقق من البريد الإلكتروني بنجاح',
                '',
                { positionClass: 'toast-bottom-right', timeOut: 5000 }
              );
            }
            this._Router.navigate(['/login']);
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

  submitResendKey(){
    this.spinner.show();
    let {_id}:any = this._AuthService.userId.value;
    this._AuthService.resendKey(_id).subscribe({
      next: (response) => {
        if (response.message == 'Verification key sent successfully') {
          this.spinner.hide();
          if (this.language == 'EN') {
            this.toastr.success(
              'Verification key sent successfully',
              '',
              { positionClass: 'toast-bottom-right', timeOut: 5000 }
            );
          } else {
            this.toastr.success(
              'تم إرسال مفتاح التحقق بنجاح',
              '',
              { positionClass: 'toast-bottom-right', timeOut: 5000 }
            );
          }
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
  }
}

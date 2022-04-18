import { Component, OnInit } from '@angular/core';
import { TranslateService } from './../translate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.scss']
})
export class SpecialComponent implements OnInit {
  language: string = 'EN';

  constructor(private _Router: Router,private _TranslateService: TranslateService) { }

  ngOnInit(): void {
    this._TranslateService.language.subscribe((res: any) => {
      this.language = res;
    });
  }

  click(){
    this._Router.navigate(['/login']);
    }
}

import { Component, OnInit } from '@angular/core';
import { TranslateService } from './../translate.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  language:string="EN";

  constructor(private _TranslateService:TranslateService) { }

  ngOnInit(): void {
    this._TranslateService.language.subscribe((res:any)=>{this.language=res})
  }

}

import { Component, OnInit } from '@angular/core';
import { TranslateService } from './../translate.service';

@Component({
  selector: 'app-allservices',
  templateUrl: './allservices.component.html',
  styleUrls: ['./allservices.component.scss']
})
export class AllservicesComponent implements OnInit {
  language:string="EN";

  constructor(private _TranslateService:TranslateService) { }

  ngOnInit(): void {
    this._TranslateService.language.subscribe((res:any)=>{this.language=res})

  }


  click(target:any,event:any,condition:any){
    document.querySelectorAll(".nav-link").forEach((ele:any)=>ele.classList.remove("active"))
    document.querySelectorAll(".nav-link").forEach((ele:any)=>ele.classList.remove("activer"))
    document.querySelectorAll(".item").forEach((ele:any)=>ele.classList.add("fade"))
    document.querySelector(`.${target}`)?.classList.remove('fade')

    if (condition=="left") {
      event.target.classList.add("active") 
    } else {
      event.target.classList.add("activer") 
    }
  }

}

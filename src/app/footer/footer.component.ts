import { Component, OnInit } from '@angular/core';
import { TranslateService } from './../translate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  language:string="EN";

  constructor(private _TranslateService:TranslateService,private _Router: Router) { }

  ngOnInit(): void {
    this._TranslateService.language.subscribe((res:any)=>{this.language=res})

  }

  scrollToElement(target:any,event:any): void {    
    this._Router.navigate(["/home"]);  
    document.querySelectorAll(".nav-link").forEach((ele:any)=>ele.classList.remove("active"))
    const element = document.querySelector(target)
    event.target.classList.add("active")    
    try {
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  
      } catch (error) {}   
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToElement(target:any,event:any): void {    
    document.querySelectorAll(".nav-link").forEach((ele:any)=>ele.classList.remove("active"))
    const element = document.querySelector(target)
    event.target.classList.add("active")    
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}

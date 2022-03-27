import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

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

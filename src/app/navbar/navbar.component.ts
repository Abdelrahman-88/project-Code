import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  reached:boolean = false;
  passed:boolean = false;
  scrolling:boolean=false;
  element:any;
  topPos:any;

  constructor(public el: ElementRef) { }

  ngOnInit(): void {
  }

  scrollToElement(target:any,event:any): void {    
    document.querySelectorAll(".nav-link").forEach((ele:any)=>ele.classList.remove("active"))
    const element = document.querySelector(target)
    event.target.classList.add("active")    
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

//   @HostListener('window:scroll', ['$event']) 
// onScroll(event:any) {

//   const elementPosition = this.el.nativeElement.offsetTop;
//     const elementHeight = this.el.nativeElement.clientHeight;
//     const scrollPosition = window.pageYOffset;
//     this.element = document.querySelector(event.value);
//     try {
//       this.topPos = this.element.getBoundingClientRect().top + window.scrollY;
//     } catch (error) {
      
//     }
//     this.reached = scrollPosition >= this.topPos;
// console.log(event.target);

//     this.passed = scrollPosition >= (elementPosition + elementHeight);
//   if (this.reached) {
//     this.scrolling=true
// }else{
//   this.scrolling=false

// }
// }

}

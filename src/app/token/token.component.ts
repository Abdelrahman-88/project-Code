import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit {
  scrolling:boolean=false
  reached:boolean = false;
  passed:boolean = false;
  constructor(public el: ElementRef) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) 
onScroll() {

    const elementPosition = this.el.nativeElement.offsetTop;
    const elementHeight = this.el.nativeElement.clientHeight;
    const scrollPosition = window.pageYOffset;

    this.reached = scrollPosition >= elementPosition-300;

    this.passed = scrollPosition >= (elementPosition + elementHeight);
  if (this.reached) {
    this.scrolling=true
}


}

}

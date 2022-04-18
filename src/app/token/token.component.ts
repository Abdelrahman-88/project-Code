import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { TranslateService } from './../translate.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit {
  scrolling:boolean=false
  reached:boolean = false;
  passed:boolean = false;
  language:string="EN";

  constructor(public el: ElementRef,private _TranslateService:TranslateService) { }

  ngOnInit(): void {
    this._TranslateService.language.subscribe((res:any)=>{this.language=res})

  }

  @HostListener('window:scroll', ['$event']) 
onScroll() {

    const elementPosition = this.el.nativeElement.offsetTop;
    const elementHeight = this.el.nativeElement.clientHeight;
    const scrollPosition = window.pageYOffset;

    this.reached = scrollPosition >= elementPosition-400;

    this.passed = scrollPosition >= (elementPosition + elementHeight);
  if (this.reached) {
    this.scrolling=true
}


}

}

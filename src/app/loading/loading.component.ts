import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  animations: [
    trigger('fadeOut', [      
      transition('* => void', [
        style({opacity: 1}),
        animate(2000, style({opacity: 0}))
      ])
    ]),trigger('fadeOutIcon', [      
      transition('* => void', [
        style({opacity: 1}),
        animate(1000, style({opacity: 0}))
      ])
    ])
  
  ]
})
export class LoadingComponent implements OnInit {
  loading:boolean=false;
  loadingIcon:boolean=false;
  timer:any;
  constructor() { }

  ngOnInit(): void {
    this.endLoading()
  }
  endLoading() {
    // document.addEventListener("DOMContentLoaded", ()=>{
       
    // });
    this.timer=setTimeout(()=>{
      this.loading=true;
      document.body.style.overflow = 'auto';

    },2000);
    this.timer=setTimeout(()=>{
      this.loadingIcon=true;

    },1000); 
   
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  mission:boolean=false;
  vision:boolean=false;
  who:boolean=true;
  value:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  change(term:string){
    if (term=="who") {
      this.mission=false;
      this.vision=false;
      this.who=true;
      this.value=false;
    }else if (term=="mission") {
      this.mission=true;
      this.vision=false;
      this.who=false;
      this.value=false;
    }else if (term=="vision") {
      this.mission=false;
      this.vision=true;
      this.who=false;
      this.value=false;
    }else if (term=="value") {
      this.mission=false;
      this.vision=false;
      this.who=false;
      this.value=true;
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { TranslateService } from './../translate.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  myStyle: object = {};
  myParams: any = {};
  width: number = 100;
  height: number = 100;
  mission:boolean=false;
  vision:boolean=false;
  who:boolean=true;
  value:boolean=false;
  timer:any;
  language:string="EN";

  constructor(private _TranslateService:TranslateService) { 
  }

  ngOnInit(): void {
    // this.translate.addLangs(['en', 'ar']);
    // this.translate.setDefaultLang('en');
    this.myStyle = {
      'position': 'absolute',
      'width': '100%',
      'height': '100%',
      'z-index': 1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.myParams = {
      "particles": {
        "number": {
          "value": 40,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#2f86e7"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#2f86e7",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 3,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }
    
    this._TranslateService.language.subscribe((res:any)=>{this.language=res})

    this.StartInterval("who", 5000)

  }


  click(value:string){
    window.clearTimeout(this.timer);
    this.change(value);
  }

  change(term:string){
    if (term=="who") {
      this.mission=false;
      this.vision=false;
      this.who=true;
      this.value=false;
      this.StartInterval("vision", 5000)

    }else if (term=="vision") {
      this.mission=false;
      this.vision=true;
      this.who=false;
      this.value=false;
      this.StartInterval("value", 5000)

    }else if (term=="value") {
      this.mission=false;
      this.vision=false;
      this.who=false;
      this.value=true;
      this.StartInterval("mission", 5000)

    }else if (term=="mission") {
      this.mission=true;
      this.vision=false;
      this.who=false;
      this.value=false;
      this.StartInterval("who", 5000)

    }

  }

  StartInterval(index:string, frequency:number) {
    this.timer=setTimeout(()=>{
      this.change(index);
    },frequency);
  }

  

}

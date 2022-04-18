import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TranslateService } from './../translate.service';
import { transition, trigger, style, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fade', [      
      transition('void => *', [
        style({opacity: 0}),
        animate(1000, style({opacity: 1}))
      ]),
      transition('* => void', [
        animate(1000, style({opacity: 0}))
      ])
    ]),trigger('fadeOut', [      
      transition('* => void', [
        style({opacity: 1}),
        animate(1000, style({opacity: 0}))
      ])
    ]),trigger('fadeOutIcon', [      
      transition('* => void', [
        style({opacity: 1}),
        animate(1000, style({opacity: 0}))
      ])
    ])
  
  ]
})



export class HomeComponent implements OnInit {
  myStyle: object = {};
  myParams: any = {};
  width: number = 100;
  height: number = 100;
  item1:boolean=true;
  item2:boolean=false;
  item3:boolean=false;
  timer:any;
  language:string="EN";


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay:true,
    autoplayHoverPause:true,
    margin:0,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    rtl: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

  constructor(private _Router: Router,private _TranslateService:TranslateService) { 

    
  }

  ngOnInit(): void {
    // this.translate.addLangs(['en', 'ar']);
    // this.translate.setDefaultLang('en');
    this._TranslateService.language.subscribe((res:any)=>{this.language=res})

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
    this.StartInterval("item1", 5000)
  }

  
  change(term:string){
    if (term=="item1") {
      this.item3=false
      this.item1=true
      this.StartInterval("item2", 5000)

    }else if (term=="item2") {
      this.item1=false
      this.item2=true
      this.StartInterval("item3", 5000)

    }else if(term=="item3") {
      this.item2=false
      this.item3=true
      this.StartInterval("item1", 5000)

    }

  }

  StartInterval(index:string, frequency:number) {
    this.timer=setTimeout(()=>{
      this.change(index);
    },frequency);
  }

  click(){
    this._Router.navigate(['/special']);
    }


}

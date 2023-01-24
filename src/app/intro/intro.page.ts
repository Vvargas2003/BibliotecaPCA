import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  slideOpt = {
    initialSlide: 1, //slide inicial (primero) [0,1,2,3]
    slidesPerView: 1, //configuramos un slide por vista
    centerSlides: true, //que las slides enten centradas
    speed: 400 //velocidad movimiento de los slides
  }
  slides=[
    {
    title: "Aprende conmigo",
    subtitle: "biblioteca digital",
    img: "assets/img/libro1.jpg",
  
  },
  {
    title: "Aprende conmigo",
    subtitle: "biblioteca digital",
    img: "assets/img/libro2.jpg",
  
  },
  {
    title: "Aprende conmigo",
    subtitle: "biblioteca digital",
    img: "assets/img/libro3.jpg",
    
  },
  {
    title: "Aprende conmigo",
    subtitle: "biblioteca digital",
    img: "assets/img/libro4.jpg",
    
  },
  {
    title: "Aprende conmigo",
    subtitle: "biblioteca digital",
    img: "assets/img/libro5.jpg",  
  }

]


  constructor(private router: Router, private storage: Storage) {
    this.storage.create();


   }
   

  finish(){
    this.storage.set("isIntroShowed", true);
    this.router.navigateByUrl("/home");
  }
  ngOnInit() {
  }

}

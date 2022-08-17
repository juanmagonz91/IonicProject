import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  ocultar = '';

  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/html.png',
      titulo: 'Aprende Html',
      desc: 'Es utilizado para el desarrollo y creación de páginas web'
    },
    {
      img: '/assets/css.png',
      titulo: 'Aprende Css de la manera más fácil',
      desc: 'Un lenguaje que maneja el diseño y presentación de las páginas web'
    },
    {
      img: '/assets/javascript.png',
      titulo: 'JavaScript',
      desc: 'Es el lenguaje de programación que debes usar para añadir características interactivas a tu sitio web'
    },
    {
      img: '/assets/angular.png',
      titulo: 'Aprende Angular',
      desc: 'Angular es un Framework de JavaScript de código abierto escrito en TypeScript'
    }
  ];

  constructor( private navCtrl: NavController ) { }

  ngOnInit() {
  }

  onClick() {

    this.ocultar = 'animated fadeOut fast';
    this.navCtrl.navigateBack('/');

  }
}

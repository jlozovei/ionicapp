import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CarroServiceProvider } from '../../providers/carro-service/carro-service';

@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html'
})
export class DetalhesPage {
  carro:any;
  tabBarElement: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public carroServiceProvider: CarroServiceProvider) {
  	this.carro = navParams.get('item');
    this.tabBarElement = document.querySelector('ion-tabs#tabs .tabbar');
  }
  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
  }
  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }
}

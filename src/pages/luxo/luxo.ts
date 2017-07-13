import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalhesPage } from '../detalhes/detalhes';

import { CarroServiceProvider } from '../../providers/carro-service/carro-service';

@Component({
  selector: 'page-luxo',
  templateUrl: 'luxo.html',
  providers: [CarroServiceProvider]
})
export class LuxoPage {

  carros: Array<{id: number, nome: string, desc: string, urlFoto: string}>
  
  constructor(public navCtrl: NavController, public carroServiceProvider: CarroServiceProvider) {
    this.carroServiceProvider.loadLuxo()
    .then(data => {
      this.carros = data;
    });
  }
  
  viewCarro(event, item) {
    this.navCtrl.push(DetalhesPage, {
      item: item
    });
  }

}
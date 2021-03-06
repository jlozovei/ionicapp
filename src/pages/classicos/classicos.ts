import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalhesPage } from '../detalhes/detalhes';

import { CarroServiceProvider } from '../../providers/carro-service/carro-service';

@Component({
  selector: 'page-classicos',
  templateUrl: 'classicos.html',
  providers: [CarroServiceProvider]
})
export class ClassicosPage {

  carros: Array<{id: number, tipo: string, nome: string, desc: string, urlFoto: string, urlVideo: string, latitude: string, longitude: string}>
  
  constructor(public navCtrl: NavController, public carroServiceProvider: CarroServiceProvider) {
    /* this.carroServiceProvider.loadClassicos()
    .then(data => {
      this.carros = data;
    }); */

    this.carros = [
  {
    "id": 1,
    "tipo": "classicos",
    "nome": "Tucker 1948",
    "desc": "Descrição Tucker 1948",
    "urlFoto": "http://www.livroandroid.com.br/livro/carros/classicos/Tucker.png",
    "urlVideo": "http://www.livroandroid.com.br/livro/carros/classicos/tucker.mp4",
    "latitude": "-23.564224",
    "longitude": "-46.653156"
  },
  {
    "id": 2,
    "tipo": "classicos",
    "nome": "Chevrolet Corvette",
    "desc": "Descrição Chevrolet Corvette",
    "urlFoto": "http://www.livroandroid.com.br/livro/carros/classicos/Chevrolet_Corvette.png",
    "urlVideo": "http://www.livroandroid.com.br/livro/carros/classicos/corvette.mp4",
    "latitude": "-23.564224",
    "longitude": "-46.653156"
  },
  {
    "id": 3,
    "tipo": "classicos",
    "nome": "Chevrolet Impala Coupe",
    "desc": "Descrição Chevrolet Impala Coupe",
    "urlFoto": "http://www.livroandroid.com.br/livro/carros/classicos/Chevrolet_Impala_Coupe.png",
    "urlVideo": "http://www.livroandroid.com.br/livro/carros/classicos/chevrolet_impala.mp4",
    "latitude": "-23.564224",
    "longitude": "-46.653156"
  },
  {
    "id": 4,
    "tipo": "classicos",
    "nome": "Cadillac Deville Convertible",
    "desc": "Descrição Cadillac Deville Convertible",
    "urlFoto": "http://www.livroandroid.com.br/livro/carros/classicos/Cadillac_Deville_Convertible.png",
    "urlVideo": "http://www.livroandroid.com.br/livro/carros/classicos/cadillac_deville.mp4",
    "latitude": "-23.564224",
    "longitude": "-46.653156"
  },
  {
    "id": 5,
    "tipo": "classicos",
    "nome": "Chevrolet Bel-Air",
    "desc": "Descrição Chevrolet Bel-Air",
    "urlFoto": "http://www.livroandroid.com.br/livro/carros/classicos/Chevrolet_BelAir.png",
    "urlVideo": "http://www.livroandroid.com.br/livro/carros/classicos/chevrolet_bel_air.mp4",
    "latitude": "-23.564224",
    "longitude": "-46.653156"
  },
  {
    "id": 6,
    "tipo": "classicos",
    "nome": "Cadillac Eldorado",
    "desc": "Descrição Cadillac Eldorado",
    "urlFoto": "http://www.livroandroid.com.br/livro/carros/classicos/Cadillac_Eldorado.png",
    "urlVideo": "http://www.livroandroid.com.br/livro/carros/classicos/cadillac_eldorado.mp4",
    "latitude": "-23.564224",
    "longitude": "-46.653156"
  },
  {
    "id": 7,
    "tipo": "classicos",
    "nome": "Ferrari 250 GTO",
    "desc": "Descrição Ferrari 250 GTO",
    "urlFoto": "http://www.livroandroid.com.br/livro/carros/classicos/Ferrari_250_GTO.png",
    "urlVideo": "http://www.livroandroid.com.br/livro/carros/classicos/ferrari_gto.mp4",
    "latitude": "-23.564224",
    "longitude": "-46.653156"
  },
  {
    "id": 8,
    "tipo": "classicos",
    "nome": "Dodge Challenger",
    "desc": "Descrição Dodge Challenger",
    "urlFoto": "http://www.livroandroid.com.br/livro/carros/classicos/Dodge_Challenger.png",
    "urlVideo": "http://www.livroandroid.com.br/livro/carros/classicos/dodge_challenger.mp4",
    "latitude": "",
    "longitude": ""
  },
  {
    "id": 9,
    "tipo": "classicos",
    "nome": "Camaro SS 1969",
    "desc": "Descrição Camaro SS 1969",
    "urlFoto": "http://www.livroandroid.com.br/livro/carros/classicos/Camaro_SS.png",
    "urlVideo": "http://www.livroandroid.com.br/livro/carros/classicos/camaro_ss.mp4",
    "latitude": "-23.564224",
    "longitude": "-46.653156"
  },
  {
    "id": 10,
    "tipo": "classicos",
    "nome": "Ford Mustang 1976",
    "desc": "Descrição Ford Mustang 1976",
    "urlFoto": "http://www.livroandroid.com.br/livro/carros/classicos/Ford_Mustang.png",
    "urlVideo": "http://www.livroandroid.com.br/livro/carros/classicos/ford_mustang.mp4",
    "latitude": "-23.564224",
    "longitude": "-46.653156"
  },
  {
    "id": 72,
    "tipo": "classicos",
    "nome": "Fusca",
    "desc": "2020 ",
    "urlFoto": "https://s3-sa-east-1.amazonaws.com/livetouch-temp/livrows/foto_carro_1502963653197.jpg",
    "urlVideo": "",
    "latitude": "",
    "longitude": ""
  }
]
  }
  
  viewCarro(event, item) {
    this.navCtrl.push(DetalhesPage, {
      item: item
    });
  }

}
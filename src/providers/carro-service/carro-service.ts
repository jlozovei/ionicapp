import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CarroServiceProvider {

	public carros: any;

  constructor(public http: Http) {
    console.log('Hello CarroServiceProvider Provider');
  }

	loadLuxo() {
		if (this.carros) {
		return Promise.resolve(this.carros);
		}

		return new Promise(resolve => {
		this.http.get('http://livrowebservices.com.br/rest/carros/tipo/luxo')
		  .map(res => res.json())
		  .subscribe(data => {
		    this.carros = data;
		    resolve(this.carros);
		  });
		});
	}

	loadEsportivos() {
		if (this.carros) {
		return Promise.resolve(this.carros);
		}

		return new Promise(resolve => {
		this.http.get('http://livrowebservices.com.br/rest/carros/tipo/esportivos')
		  .map(res => res.json())
		  .subscribe(data => {
		    this.carros = data;
		    resolve(this.carros);
		  });
		});
	}

	loadClassicos() {
		if (this.carros) {
		return Promise.resolve(this.carros);
		}

		return new Promise(resolve => {
		this.http.get('http://livrowebservices.com.br/rest/carros/tipo/classicos')
		  .map(res => res.json())
		  .subscribe(data => {
		    this.carros = data;
		    resolve(this.carros);
		  });
		});
	}

}

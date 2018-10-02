import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { DibujoPage } from '../dibujo/dibujo';
import { ComunicaciónPage } from '../comunicaci\u00F3n/comunicaci\u00F3n';
import { CienciasPage } from '../ciencias/ciencias';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  historia = HistoriaPage;
  dibujo = DibujoPage;
  Comunicacion = ComunicaciónPage;
  Ciencias= CienciasPage;
 
  constructor(public navCtrl: NavController) {

  }
  clickHistoria()
  {
    this.navCtrl.push(this.historia);
  }

  clickDibujo()
  {
    this.navCtrl.push(this.dibujo);
  }

  clickComunicacion()
  {
    this.navCtrl.push(this.Comunicacion);
  }

  clickCiencias()
  {
    this.navCtrl.push(this.Ciencias);
  }
 

}

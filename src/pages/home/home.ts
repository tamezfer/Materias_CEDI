import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { DibujoPage } from '../dibujo/dibujo';
import { ComunicaciónPage } from '../comunicaci\u00F3n/comunicaci\u00F3n';
import { CienciasPage } from '../ciencias/ciencias';
import { ProbabilidadPage } from '../probabilidad/probabilidad';
import { RoboticaPage } from '../robotica/robotica';
import { MiPage } from '../mi/mi';
import { PappsPage } from '../papps/papps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  historia = HistoriaPage;
  dibujo = DibujoPage;
  Comunicacion = ComunicaciónPage;
  Ciencias= CienciasPage;
  Probabilidad = ProbabilidadPage;
  Robotica = RoboticaPage;
  Metodologia = MiPage;
  Papps= PappsPage;
 
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
 
  clickProbabilidad()
  {
    this.navCtrl.push(this.Probabilidad);
  }

  clickRobotica()
  {
    this.navCtrl.push(this.Robotica);
  }

  clickMetodologia()
  {
    this.navCtrl.push(this.Metodologia);
  }

  clickPapps()
  {
    this.navCtrl.push(this.Papps);
  }

}

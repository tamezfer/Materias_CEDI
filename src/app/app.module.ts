import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HistoriaPage } from '../pages/historia/historia';
import { DibujoPage } from '../pages/dibujo/dibujo';
import { ComunicaciónPage } from '../pages/comunicaci\u00F3n/comunicaci\u00F3n';
import { CienciasPage } from '../pages/ciencias/ciencias';
import { ProbabilidadPage } from '../pages/probabilidad/probabilidad';
import { RoboticaPage } from '../pages/robotica/robotica';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HistoriaPage,
    DibujoPage,
    ComunicaciónPage,
    CienciasPage,
    ProbabilidadPage,
    RoboticaPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistoriaPage,
    DibujoPage,
    ComunicaciónPage,
    CienciasPage,
    ProbabilidadPage,
    RoboticaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

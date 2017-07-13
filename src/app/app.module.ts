import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { EsportivosPage } from '../pages/esportivos/esportivos';
import { LuxoPage } from '../pages/luxo/luxo';
import { ClassicosPage } from '../pages/classicos/classicos';
import { DetalhesPage } from '../pages/detalhes/detalhes';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CarroServiceProvider } from '../providers/carro-service/carro-service';

@NgModule({
  declarations: [
    MyApp,
    EsportivosPage,
    LuxoPage,
    ClassicosPage,
    DetalhesPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EsportivosPage,
    LuxoPage,
    ClassicosPage,
    DetalhesPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CarroServiceProvider
  ]
})
export class AppModule {}

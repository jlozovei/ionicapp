import { Component } from '@angular/core';

import { EsportivosPage } from '../esportivos/esportivos';
import { LuxoPage } from '../luxo/luxo';
import { ClassicosPage } from '../classicos/classicos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ClassicosPage;
  tab2Root = EsportivosPage;
  tab3Root = LuxoPage;

  constructor() {

  }
}

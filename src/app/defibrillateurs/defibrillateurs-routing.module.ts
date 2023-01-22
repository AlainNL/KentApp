import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandesPage } from '../commandes/commandes.page';

import { DefibrillateursPage } from './defibrillateurs.page';

const routes: Routes = [
  {
    path: '',
    component: DefibrillateursPage
  },
  {
    path: 'commandes',
    component: CommandesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, HttpClientModule],
})
export class DefibrillateursPageRoutingModule {}

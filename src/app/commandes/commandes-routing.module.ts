import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefibrillateursPage } from '../defibrillateurs/defibrillateurs.page';

import { CommandesPage } from './commandes.page';

const routes: Routes = [
  {
    path: '',
    component: CommandesPage
  },
  {
    path: 'defibrillateurs',
    component: DefibrillateursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandesPageRoutingModule {}

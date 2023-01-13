import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefibrillateursPageRoutingModule } from './defibrillateurs-routing.module';

import { DefibrillateursPage } from './defibrillateurs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefibrillateursPageRoutingModule
  ],
  declarations: [DefibrillateursPage]
})
export class DefibrillateursPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefibrillateursPageRoutingModule } from './defibrillateurs-routing.module';

import { DefibrillateursPage } from './defibrillateurs.page';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefibrillateursPageRoutingModule,
    HttpClientModule
  ],
  declarations: [DefibrillateursPage]
})
export class DefibrillateursPageModule {}

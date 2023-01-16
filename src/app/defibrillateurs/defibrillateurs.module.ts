import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefibrillateursPageRoutingModule } from './defibrillateurs-routing.module';

import { DefibrillateursPage } from './defibrillateurs.page';
import {  HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefibrillateursPageRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [DefibrillateursPage]
})
export class DefibrillateursPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EcolePageRoutingModule } from './ecole-routing.module';

import { EcolePage } from './ecole.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EcolePageRoutingModule
  ],
  declarations: [EcolePage]
})
export class EcolePageModule {}

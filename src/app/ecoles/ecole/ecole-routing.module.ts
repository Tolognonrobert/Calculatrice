import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcolePage } from './ecole.page';

const routes: Routes = [
  {
    path: '',
    component: EcolePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcolePageRoutingModule {}

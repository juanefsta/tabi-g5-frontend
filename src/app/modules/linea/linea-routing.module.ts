import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LineaComponent } from './linea.component';

const lineaRoutes: Routes = [
  {
   path: 'linea',
   component: LineaComponent 
  }  
];

@NgModule({
  imports: [RouterModule.forChild(lineaRoutes)],
  exports: [RouterModule]
})
export class LineaRoutingModule { }

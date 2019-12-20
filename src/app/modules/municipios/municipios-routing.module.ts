import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MunicipiosComponent } from './municipios.component';

const municipiosRoutes: Routes = [
  {
   path: 'municipios',
   component: MunicipiosComponent 
  }  
];

@NgModule({
  imports: [RouterModule.forChild(municipiosRoutes)],
  exports: [RouterModule]
})
export class MunicipiosRoutingModule { }

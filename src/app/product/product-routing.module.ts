import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowproductsComponent } from './showproducts/showproducts.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

const routes: Routes = [
  {
    path:':id',
    component:ProductdetailsComponent
  },
{
  path:'',
  component:ShowproductsComponent,
  pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

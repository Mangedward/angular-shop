import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductComponent } from './all-product/all-product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/all-product',
    pathMatch: 'full'
  },
  {
    path: 'all-product',
    component: AllProductComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

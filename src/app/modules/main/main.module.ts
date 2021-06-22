import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductComponent } from './all-product/all-product.component';
import { DealComponent } from './deal/deal.component';
import { SharedModule } from '../../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';



@NgModule({
  declarations: [
    AllProductComponent,
    DealComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule
  ]
})
export class MainModule { }

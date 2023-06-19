import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickupcallcardComponent } from './pickupcallcard/pickupcallcard.component';
import { IonicModule } from '@ionic/angular';

const PAGES = [
  PickupcallcardComponent
]


@NgModule({
  declarations: [ PAGES],
  exports: [PAGES],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class ComponentsModule { }

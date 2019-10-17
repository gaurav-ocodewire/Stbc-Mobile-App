import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SundayPage } from './sunday';

@NgModule({
  declarations: [
    SundayPage,
  ],
  imports: [
    IonicPageModule.forChild(SundayPage),
  ],
  exports: [
    SundayPage
  ]
})
export class SundayPageModule {}

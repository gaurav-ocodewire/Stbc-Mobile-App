import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThisWeek } from './thisWeek';

@NgModule({
  declarations: [
    ThisWeek,
  ],
  imports: [
    IonicPageModule.forChild(ThisWeek),
  ],
  exports: [
    ThisWeek
  ]
})
export class ThisWeekPageModule {}

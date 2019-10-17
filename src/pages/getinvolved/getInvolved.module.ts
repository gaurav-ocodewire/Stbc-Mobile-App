import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetInvolved } from './getInvolved';

@NgModule({
  declarations: [
    GetInvolved,
  ],
  imports: [
    IonicPageModule.forChild(GetInvolved),
  ],
  exports: [
    GetInvolved
  ]
})
export class GetInvolvedPageModule {}

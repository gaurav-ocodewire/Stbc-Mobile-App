import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceTimesPage } from './service-times';

@NgModule({
  declarations: [
    ServiceTimesPage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceTimesPage),
  ],
  exports: [
    ServiceTimesPage
  ]
})
export class ServiceTimesPageModule {}

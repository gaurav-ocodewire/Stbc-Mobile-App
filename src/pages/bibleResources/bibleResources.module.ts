import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BibleResources } from './bibleResources';

@NgModule({
  declarations: [
    BibleResources,
  ],
  imports: [
    IonicPageModule.forChild(BibleResources),
  ],
  exports: [
    BibleResources
  ]
})
export class BibleResourcesPageModule {}


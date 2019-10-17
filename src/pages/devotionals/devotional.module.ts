import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Devotional } from './devotional';

@NgModule({
  declarations: [
    Devotional,
  ],
  imports: [
    IonicPageModule.forChild(Devotional),
  ],
  exports: [
    Devotional
  ]
})
export class DevotionalPageModule {}


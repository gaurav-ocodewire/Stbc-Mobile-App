import { Component } from '@angular/core';
import { NavController , NavParams,IonicPage } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { Devotional } from '../devotionals/devotional';
import { BibleResources } from '../bibleResources/bibleResources';



@IonicPage()
@Component({
  selector: 'page-bible',
  templateUrl: 'bible.html'
})
export class BiblePage {

devotional = Devotional;

bibleResources =BibleResources;





  constructor(public navCtrl: NavController,private iab: InAppBrowser,public navParams: NavParams) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BiblePage');
  }

//Launch Services
    launchBibleReading(url) {
    	console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    }

  launchEzraProject(url) {
    console.log(url);
    this.iab.create(url, "_system", "location=no,hidden=no");
  }


    launchScripture(url) {
        console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    }




}

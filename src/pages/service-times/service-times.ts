import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the ServiceTimesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-service-times',
  templateUrl: 'service-times.html',
})
export class ServiceTimesPage {



  constructor(public navCtrl: NavController,private iab: InAppBrowser,public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceTimesPage');
  }
  		

  		//Launch Services
    launchSundaySouthtulsat(url) {
    	console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    }



    launchWatchLive(url) {
    	console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    }

    launchArchive(url) {
    	console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    }

	launchAudioPodcast(url) {
    	console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    }





}

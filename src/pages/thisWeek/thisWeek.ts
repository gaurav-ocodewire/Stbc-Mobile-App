import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
/**
 * Generated class for the ThisWeek page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-this-week',
  templateUrl: 'thisWeek.html',
})
export class ThisWeek {

  constructor(public navCtrl: NavController, private iab: InAppBrowser,public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThisWeek');
  }

  //Launch Services
    launchScorecard(url) {
    	  this.iab.create(url, "_system", {location : 'no',hidden : 'no'});
    }

    launchChannel(url) {
        this.iab.create(url, "_system", {location : 'no',hidden : 'no'});
    }

	  launchStudentNewsletter(url) {
    	  this.iab.create(url, "_system", {location : 'no',hidden : 'no'});
    }


    launchThinkingChristian(url) {
        this.iab.create(url, "_system", {location : 'no',hidden : 'no'});
    }
  
    launchFitNewsletter(url) {
    	  this.iab.create(url, "_system", {location : 'no',hidden : 'no'});
    }



}



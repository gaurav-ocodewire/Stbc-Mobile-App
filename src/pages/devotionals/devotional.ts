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
  selector: 'page-devotional',
  templateUrl: 'devotional.html',
})
export class Devotional {

  constructor(public navCtrl: NavController, private iab: InAppBrowser,public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Devotional');
  }

  //Launch Services
    launchGodisFirst(url) {
    	console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    }

    launchtouchMinistries(url) {
    	console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    }

    ParentsOfKids(url) {
        console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    }

	launchHighest(url) {
    	console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
        }


        launchKids4Truth(url) {
    	console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
        }

  		launchStudentsYouth(url) {
    	console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
        }



}



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
  selector: 'page-getInvolved',
  templateUrl: 'getInvolved.html',
})
export class GetInvolved {

  constructor(public navCtrl: NavController, private iab: InAppBrowser,public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThisWeek');
  }

  //Launch Services
    launchChurchFamily(url) {
    	console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    }

    launchChurchLeaders(url) {
    	console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    }

	launchStudentNewsletter(url) {
    	console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
        }


        launchPersonalCommittee(url) {
    	console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
        }

  		launchcommittee(url) {
    	console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
        }

        launchStephenMinistry(url) {
      console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
        }



}



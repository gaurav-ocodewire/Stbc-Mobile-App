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
  selector: 'page-bibleResources',
  templateUrl: 'bibleResources.html',
})
export class BibleResources {

  constructor(public navCtrl: NavController, private iab: InAppBrowser,public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BibleResources');
  }

  

launchAdultBibleStudyGP(url){
    	console.log(url);
    	this.iab.create(url,"_system",
    	"location=no,hidden=no");
    }
    launchAdultBibleStudyETB(url){
    	console.log(url);
    	this.iab.create(url,"_system",
    	"location=no,hidden=no");
    }
    launchStudentBibleStudy(url){
    	console.log(url);
    	this.iab.create(url,"_system",
    	"location=no,hidden=no");
    }
}



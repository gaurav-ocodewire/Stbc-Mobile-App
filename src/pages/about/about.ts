import { Component } from '@angular/core';
import { NavController , NavParams,IonicPage } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ThisWeek } from '../thisWeek/thisWeek';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

thisweek = ThisWeek;

  constructor(public navCtrl: NavController,private iab: InAppBrowser,public navParams: NavParams) {

  }
	
	ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  //Launch Services
    launchStaff(url) {
    	console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    }

    launchExpect(url){
    	console.log(url);
		this.iab.create(url,"_system",
		"location=no,hidden=no");

    }

    lunchBeliefs(url){
    	console.log(url);
    	this.iab.create(url,"_system",
    	"location=no,hidden=no");
    }

    lunchOurStory(url){
    	console.log(url);
    	this.iab.create(url,"_system",
    	"location=no,hidden=no");
    }

}


import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {NewsLetter} from "../newsletter/newsLetter";
/**
 * Generated class for the Contact page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class Contact {

  constructor(public navCtrl: NavController, private iab: InAppBrowser,public navParams: NavParams) {
  }

    newsLetter=NewsLetter;

  ionViewDidLoad() {
    console.log('ionViewDidLoad Contact');
  }

  //Launch Services
    launchFacebook(url) {
    	console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    }

    launchTwitter(url) {
    	console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    }

	launchStudentNewsletter(url) {
    	console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
        }


        launchInstagram(url) {
    	console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
        }

  		



}



import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Contact } from '../contact/contact';
import { GetInvolved } from '../getinvolved/getInvolved';

/**
 * Generated class for the MorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

contact = Contact;

getinvolved = GetInvolved

  constructor(public navCtrl: NavController,private iab: InAppBrowser,public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }
  //Launch Services
    launchMainWebsite(url) {
    	console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    }
    launchGiveOnline(url) {
      console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
        }

     launchOpportunitiesToServe(url) {
    console.log(url);
    this.iab.create(url, "_system", "location=no,hidden=no");
  }







}

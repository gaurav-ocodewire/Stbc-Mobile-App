import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceTimesPage } from '../service-times/service-times';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {ConnectCard} from "../connect/connect_card";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
	messages = ServiceTimesPage;
    connect = ConnectCard;
  constructor(public navCtrl: NavController, private iab: InAppBrowser) {

  }
  	//Launch Services
    launchService(url) {
    	  this.iab.create(url, "_system", {location : 'no',hidden : 'no'});
    }

  	//Launch Directions
    launchDirections(url) {
    	  this.iab.create(url, "_system", {location : 'no',hidden : 'no'});
    }

  	//Launch Events
    launchEvents(url) {
    	  this.iab.create(url, "_system", {location : 'no',hidden : 'no'});
    }

  	//Launch Pastor
    launchPastor(url) {
    	  this.iab.create(url, "_system", {location : 'no',hidden : 'no'});
    }
  
}

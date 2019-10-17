import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';




@Component({
    selector: 'page-connect',
    templateUrl: 'connect_card.html'
})
export class ConnectCard {



    constructor(public navCtrl: NavController,public navParams: NavParams) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ConnectCard');
    }









}


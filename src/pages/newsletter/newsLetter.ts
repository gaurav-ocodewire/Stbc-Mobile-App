import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';




@Component({
    selector: 'page-news',
    templateUrl: 'newsLetter.html'
})
export class NewsLetter {



    constructor(public navCtrl: NavController,public navParams: NavParams) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad NewsLetter');
    }









}


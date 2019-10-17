import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { BiblePage } from '../bible/bible';
import { HomePage } from '../home/home';
import { MorePage } from '../more/more';
import {Keyboard} from "@ionic-native/keyboard";
import {Platform} from "ionic-angular";@Component({
 templateUrl: 'tabs.html'
})
export class TabsPage { 
 
 tab1Root = HomePage;
 tab2Root = AboutPage;
 tab3Root = BiblePage;
 tab4Root = MorePage;  
 
 constructor(platform: Platform, public keyboard: Keyboard,) {      
 platform.ready().then(() => {
         this.keyboard.onKeyboardShow().subscribe(() => {
             document.body.classList.add('keyboard-is-open');
         });          this.keyboard.onKeyboardHide().subscribe(() => {
             document.body.classList.remove('keyboard-is-open');
         });
     });  
     }
}
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Keyboard } from '@ionic-native/keyboard';


import { AboutPage } from '../pages/about/about';

import { HomePage } from '../pages/home/home';
import { MorePage } from '../pages/more/more';
import { TabsPage } from '../pages/tabs/tabs';
import { ServiceTimesPage } from '../pages/service-times/service-times';
import { WatchLivePage } from '../pages/watch-live/watch-live';
import { ThisWeek } from '../pages/thisWeek/thisWeek';
import { Devotional } from '../pages/devotionals/devotional';
import { BiblePage } from '../pages/bible/bible';
import { BibleResources } from '../pages/bibleResources/bibleResources';

import { Contact } from '../pages/contact/contact';
import { GetInvolved } from '../pages/getinvolved/getInvolved';
import {ConnectCard} from '../pages/connect/connect_card';
import {NewsLetter} from '../pages/newsletter/newsLetter';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    BiblePage,
    HomePage,
    MorePage,
    TabsPage,
    ServiceTimesPage,
    WatchLivePage,
    ThisWeek,
    Devotional,
    BibleResources,



    Contact,
    GetInvolved,
    ConnectCard,NewsLetter,


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{tabsPlacement:'bottom'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    BiblePage,
    HomePage,
    MorePage,
    TabsPage,
    ServiceTimesPage,
    WatchLivePage,
    ThisWeek,
    Devotional,
    BibleResources,


    Contact,
    GetInvolved,
    ConnectCard,
    NewsLetter,
        ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    Keyboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

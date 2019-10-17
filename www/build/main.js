webpackJsonp([13],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__thisWeek_thisWeek__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPage = (function () {
    function AboutPage(navCtrl, iab, navParams) {
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.navParams = navParams;
        this.thisweek = __WEBPACK_IMPORTED_MODULE_3__thisWeek_thisWeek__["a" /* ThisWeek */];
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    //Launch Services
    AboutPage.prototype.launchStaff = function (url) {
        console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    };
    AboutPage.prototype.launchExpect = function (url) {
        console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    };
    AboutPage.prototype.lunchBeliefs = function (url) {
        console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    };
    AboutPage.prototype.lunchOurStory = function (url) {
        console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/home/ubc-21/Documents/testnew/Second/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title class="toolbar-ios">\n      South Tulsa Baptist Church\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<div class="item row">\n    <div style="text-align:right" class="col col-50">\n    \n    </div>\n    <div style="text-align:left" class="col col-50">\n      <div class="logo-baptist">\n        <img src="assets/Logo.png">\n      </div>\n      <!-- Submenu -->\n      <div class="submenu-full">\n\n        <div class="item menu-item" (click)="launchStaff(\'http://southtulsa.org/staff/#element6893449_2185576\')">\n          South Tulsa Staff\n        </div>\n      \n        <div class="item menu-item" (click)="launchExpect(\'http://southtulsa.org/what-to-expect/#element6893445_2181163\')">\n          What to Expect\n        </div>\n      \n        <div class="item menu-item" (click)="lunchBeliefs(\'http://southtulsa.org/what-we-believe/#element6892888_2185578\')">\n          Beliefs\n        </div>\n      \n        <div class="item menu-item"(click)="lunchOurStory(\'http://southtulsa.org/our-story/#element6893447_2181164\')">\n          Our Story\n        </div>\n      \n        <div class="item menu-item" [navPush]="thisweek">\n          South Tulsa This Week\n        </div>\n        \n        <div class="item menu-item"(click)="lunchOurStory(\'http://southtulsa.org/missions-southtulsa\')">\n          Missions @ South Tulsa\n        </div>\n        \n         \n        \n      </div>\n      <!-- Submenu ends -->\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/ubc-21/Documents/testnew/Second/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThisWeek; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ThisWeek page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ThisWeek = (function () {
    function ThisWeek(navCtrl, iab, navParams) {
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.navParams = navParams;
    }
    ThisWeek.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ThisWeek');
    };
    //Launch Services
    ThisWeek.prototype.launchScorecard = function (url) {
        this.iab.create(url, "_system", { location: 'no', hidden: 'no' });
    };
    ThisWeek.prototype.launchChannel = function (url) {
        this.iab.create(url, "_system", { location: 'no', hidden: 'no' });
    };
    ThisWeek.prototype.launchStudentNewsletter = function (url) {
        this.iab.create(url, "_system", { location: 'no', hidden: 'no' });
    };
    ThisWeek.prototype.launchThinkingChristian = function (url) {
        this.iab.create(url, "_system", { location: 'no', hidden: 'no' });
    };
    ThisWeek.prototype.launchFitNewsletter = function (url) {
        this.iab.create(url, "_system", { location: 'no', hidden: 'no' });
    };
    return ThisWeek;
}());
ThisWeek = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-this-week',template:/*ion-inline-start:"/home/ubc-21/Documents/testnew/Second/src/pages/thisWeek/thisWeek.html"*/'<!--\n  Generated template for the ServiceTimesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title class="toolbar-ios">STBC This Week</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="item row">\n    <div style="text-align:right" class="col col-50">\n\n    </div>\n    <div style="text-align:left" class="col col-50">\n      <div class="logo-baptist">\n        <img src="assets/Logo.png">\n      </div>\n<!--       <ion-card (tap)="tapEvent($event)">\n        <div class="item menu-item">\n          Schedule\n        </div>\n       -->\n      <!-- Submenu -->\n      <div class="submenu-full">\n\n        <div class="item menu-item"  (click)="launchScorecard(\'http://southtulsa.org/the-scorecard/#element6892891_2185581\')">\n          Scorecard\n        </div>\n\n        <div class="item menu-item" (click)="launchChannel(\'http://southtulsa.org/channels/#element6892905_2185595\')">\n          Channel\n        </div>\n\n        <div class="item menu-item" (click)="launchStudentNewsletter(\'http://southtulsa.org/weekly-newsletter/#element7264297_2281977\')">\n        Student Newsletter\n        </div>\n\n        <div class="item menu-item" (click)="launchThinkingChristian(\'http://southtulsa.org/perspectives\')">\n          Perspectives\n        </div>\n\n\n        <div class="item menu-item" (click)="launchFitNewsletter(\'http://southtulsa.org/family/#element6945218_2192534\')">\n          FiT Newsletter\n        </div>\n\n      </div>\n      <!-- Submenu ends -->\n    </div>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/ubc-21/Documents/testnew/Second/src/pages/thisWeek/thisWeek.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], ThisWeek);

//# sourceMappingURL=thisWeek.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BiblePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__devotionals_devotional__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bibleResources_bibleResources__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BiblePage = (function () {
    function BiblePage(navCtrl, iab, navParams) {
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.navParams = navParams;
        this.devotional = __WEBPACK_IMPORTED_MODULE_3__devotionals_devotional__["a" /* Devotional */];
        this.bibleResources = __WEBPACK_IMPORTED_MODULE_4__bibleResources_bibleResources__["a" /* BibleResources */];
    }
    BiblePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BiblePage');
    };
    //Launch Services
    BiblePage.prototype.launchBibleReading = function (url) {
        console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    };
    BiblePage.prototype.launchEzraProject = function (url) {
        console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    };
    BiblePage.prototype.launchScripture = function (url) {
        console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    };
    return BiblePage;
}());
BiblePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bible',template:/*ion-inline-start:"/home/ubc-21/Documents/testnew/Second/src/pages/bible/bible.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title class="toolbar-ios">\n      South Tulsa Baptist Church\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="item row">\n    <div style="text-align:right" class="col col-50">\n    \n    </div>\n    <div style="text-align:left" class="col col-50">\n      <div class="logo-baptist">\n        <img src="assets/Logo.png">\n      </div>\n      <!-- Submenu -->\n      <div class="submenu-full">\n\n        <div class="item menu-item" (click)="launchBibleReading\n        (\'http://vlifetechnology.com/stbc/app/bible/bible.html\')" >\n          Daily Bible Reading\n        </div>\n      \n        <div class="item menu-item" [navPush]="devotional">\n          Devotionals\n        </div>\n      \n        <div class="item menu-item" [navPush]="bibleResources">\n          Bible Study Resourcse\n        </div>\n                          \n        <div class="item menu-item" (click)="launchScripture\n        (\'http://fighterverses.com/set-4-core-esv/\')">\n          Scripture Memory\n        </div>\n      \n      \n        <div class="item menu-item"(click)="launchEzraProject\n        (\'http://southtulsa.org/ezra-project#element7491613_2336328\')">\n          Ezra Project\n        </div>\n      \n\n\n      </div>\n      <!-- Submenu ends -->\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/ubc-21/Documents/testnew/Second/src/pages/bible/bible.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], BiblePage);

//# sourceMappingURL=bible.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Devotional; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ThisWeek page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Devotional = (function () {
    function Devotional(navCtrl, iab, navParams) {
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.navParams = navParams;
    }
    Devotional.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Devotional');
    };
    //Launch Services
    Devotional.prototype.launchGodisFirst = function (url) {
        console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    };
    Devotional.prototype.launchtouchMinistries = function (url) {
        console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    };
    Devotional.prototype.ParentsOfKids = function (url) {
        console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    };
    Devotional.prototype.launchHighest = function (url) {
        console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    };
    Devotional.prototype.launchKids4Truth = function (url) {
        console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    };
    Devotional.prototype.launchStudentsYouth = function (url) {
        console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    };
    return Devotional;
}());
Devotional = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-devotional',template:/*ion-inline-start:"/home/ubc-21/Documents/testnew/Second/src/pages/devotionals/devotional.html"*/'<!--\n  Generated template for the ServiceTimesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title class="toolbar-ios">Devotional</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="item row">\n    <div style="text-align:right" class="col col-50">\n    \n    </div>\n    <div style="text-align:left" class="col col-50">\n      <div class="logo-baptist">\n        <img src="assets/Logo.png">\n      </div>\n<!--       <ion-card (tap)="tapEvent($event)">\n        <div class="item menu-item">\n          Schedule\n        </div>\n       -->\n      <!-- Submenu -->\n      <div class="submenu-full">\n\n        <div class="item menu-item"  (click)="launchGodisFirst\n        (\'https://todaygodisfirst.com\')">\n          Today God is First\n        </div>\n      \n        <div class="item menu-item" (click)="launchtouchMinistries\n        (\'https://www.intouch.org/read/magazine/daily-devotions\')">\n          In touch Ministries\n        </div>\n      \n        <div class="item menu-item" (click)="launchHighest\n        (\'https://utmost.org\')" >\n          My Highest\n        </div>\n      \n        <div class="item menu-item" (click)="ParentsOfKids\n        (\'http://www.crosswalk.com/devotionals/daily-devotions-for-parents-by-dr-james-dobson/\')">\n          Parents of Kids\n        </div>\n\n\n        <div class="item menu-item" (click)="launchKids4Truth\n        (\'http://kids4truth.com/Devos/Home.aspx\')">\n          Kids 4 Truth\n        </div>\n\n        <div class="item menu-item" (click)="launchStudentsYouth\n        (\'http://first5.org/plans/\')">\n          Students / Youth\n        </div>\n\n      </div>\n      <!-- Submenu ends -->\n    </div>\n  </div>\n\n	\n</ion-content>\n'/*ion-inline-end:"/home/ubc-21/Documents/testnew/Second/src/pages/devotionals/devotional.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], Devotional);

//# sourceMappingURL=devotional.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BibleResources; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ThisWeek page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BibleResources = (function () {
    function BibleResources(navCtrl, iab, navParams) {
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.navParams = navParams;
    }
    BibleResources.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BibleResources');
    };
    BibleResources.prototype.launchAdultBibleStudyGP = function (url) {
        console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    };
    BibleResources.prototype.launchAdultBibleStudyETB = function (url) {
        console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    };
    BibleResources.prototype.launchStudentBibleStudy = function (url) {
        console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    };
    return BibleResources;
}());
BibleResources = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bibleResources',template:/*ion-inline-start:"/home/ubc-21/Documents/testnew/Second/src/pages/bibleResources/bibleResources.html"*/'<!--\n  Generated template for the ServiceTimesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title class="toolbar-ios">Bible Study Resources</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="item row">\n    <div style="text-align:right" class="col col-50">\n    \n    </div>\n    <div style="text-align:left" class="col col-50">\n      <div class="logo-baptist">\n        <img src="assets/Logo.png">\n      </div>\n<!--       <ion-card (tap)="tapEvent($event)">\n        <div class="item menu-item">\n          Schedule\n        </div>\n       -->\n      <!-- Submenu -->\n      <div class="submenu-full">\n\n        <div class="item menu-item"  (click)="launchAdultBibleStudyGP\n        (\'http://southtulsa.org/bible-study-gospel\')">\n          Adult Bible Study GP\n        </div>\n      \n        <div class="item menu-item" (click)="launchAdultBibleStudyETB\n        (\'http://southtulsa.org/bible-study-explore-the-bible\')">\n          Adult Bible Study ETB\n        </div>\n      \n        <div class="item menu-item" (click)="launchStudentBibleStudy\n        (\'http://southtulsa.org/for-bible-study\')">\n         Student Bible Study\n        </div>\n      \n        \n\n      </div>\n      <!-- Submenu ends -->\n    </div>\n  </div>\n\n	\n</ion-content>\n'/*ion-inline-end:"/home/ubc-21/Documents/testnew/Second/src/pages/bibleResources/bibleResources.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], BibleResources);

//# sourceMappingURL=bibleResources.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newsletter_newsLetter__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the Contact page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Contact = (function () {
    function Contact(navCtrl, iab, navParams) {
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.navParams = navParams;
        this.newsLetter = __WEBPACK_IMPORTED_MODULE_3__newsletter_newsLetter__["a" /* NewsLetter */];
    }
    Contact.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Contact');
    };
    //Launch Services
    Contact.prototype.launchFacebook = function (url) {
        console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    };
    Contact.prototype.launchTwitter = function (url) {
        console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    };
    Contact.prototype.launchStudentNewsletter = function (url) {
        console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    };
    Contact.prototype.launchInstagram = function (url) {
        console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    };
    return Contact;
}());
Contact = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/home/ubc-21/Documents/testnew/Second/src/pages/contact/contact.html"*/'<!--\n  Generated template for the ServiceTimesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title class="toolbar-ios">Contact Us</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="item row">\n    <div style="text-align:right" class="col col-50">\n    \n    </div>\n    <div style="text-align:left" class="col col-50">\n      <div class="logo-baptist">\n        <img src="assets/Logo.png">\n      </div>\n<!--       <ion-card (tap)="tapEvent($event)">\n        <div class="item menu-item">\n          Schedule\n        </div>\n       -->\n      <!-- Submenu -->\n      <div class="submenu-full">\n\n        <div class="item menu-item"(click)="launchFacebook(\'https://www.facebook.com/Southtulsabaptist\')"  >\n          Facebook\n        </div>\n      \n        <div class="item menu-item" (click)="launchTwitter(\'https://twitter.com/south_tulsa\')">\n          Twitter\n        </div>\n      \n        <div class="item menu-item" (click)="launchInstagram(\'https://www.instagram.com/southtulsabaptist\')" >\n        Instagram\n        </div>\n      \n        <div class="item menu-item" [navPush]="newsLetter" >\n          Email Newsletter Request\n        </div>\n\n\n        \n\n      </div>\n      <!-- Submenu ends -->\n    </div>\n  </div>\n\n	\n</ion-content>\n'/*ion-inline-end:"/home/ubc-21/Documents/testnew/Second/src/pages/contact/contact.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], Contact);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetInvolved; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ThisWeek page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var GetInvolved = (function () {
    function GetInvolved(navCtrl, iab, navParams) {
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.navParams = navParams;
    }
    GetInvolved.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ThisWeek');
    };
    //Launch Services
    GetInvolved.prototype.launchChurchFamily = function (url) {
        console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    };
    GetInvolved.prototype.launchChurchLeaders = function (url) {
        console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    };
    GetInvolved.prototype.launchStudentNewsletter = function (url) {
        console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    };
    GetInvolved.prototype.launchPersonalCommittee = function (url) {
        console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    };
    GetInvolved.prototype.launchcommittee = function (url) {
        console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    };
    GetInvolved.prototype.launchStephenMinistry = function (url) {
        console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    };
    return GetInvolved;
}());
GetInvolved = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-getInvolved',template:/*ion-inline-start:"/home/ubc-21/Documents/testnew/Second/src/pages/getinvolved/getInvolved.html"*/'<!--\n  Generated template for the ServiceTimesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title class="toolbar-ios">Connection Point</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="item row">\n    <div style="text-align:right" class="col col-50">\n    \n    </div>\n    <div style="text-align:left" class="col col-50">\n      <div class="logo-baptist">\n        <img src="assets/Logo.png">\n      </div>\n<!--       <ion-card (tap)="tapEvent($event)">\n        <div class="item menu-item">\n          Schedule\n        </div>\n       -->\n      <!-- Submenu -->\n      <div class="submenu-full">\n\n        <div class="item menu-item"  (click)="launchChurchFamily(\'http://southtulsa.org/church-family\')">\n          Church Family\n        </div>\n      \n        <div class="item menu-item" (click)="launchChurchLeaders(\'http://southtulsa.org/church-leaders\')">\n          Church  Leaders\n        </div>\n      \n        <div class="item menu-item" (click)="launchStudentNewsletter(\'http://southtulsa.org/Default.aspx?shortcut=stewardship-committee\')">\n        Stewardship Committee\n        </div>\n      \n        <div class="item menu-item" (click)="launchPersonalCommittee(\'http://southtulsa.org/personnel-committee\')">\n          Personnel Committee\n        </div>\n\n\n        <div class="item menu-item" (click)="launchcommittee(\'http://southtulsa.org/committee-on-committees\')">\n          Committee  on Committees\n        </div>\n\n        <div class="item menu-item" (click)="launchStephenMinistry(\'http://southtulsa.org/stephen-ministry1\')">\n          Stephen Ministry\n        </div>\n\n\n      </div>\n      <!-- Submenu ends -->\n    </div>\n  </div>\n\n	\n</ion-content>\n'/*ion-inline-end:"/home/ubc-21/Documents/testnew/Second/src/pages/getinvolved/getInvolved.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], GetInvolved);

//# sourceMappingURL=getInvolved.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getinvolved_getInvolved__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MorePage = (function () {
    function MorePage(navCtrl, iab, navParams) {
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.navParams = navParams;
        this.contact = __WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* Contact */];
        this.getinvolved = __WEBPACK_IMPORTED_MODULE_4__getinvolved_getInvolved__["a" /* GetInvolved */];
    }
    MorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MorePage');
    };
    //Launch Services
    MorePage.prototype.launchMainWebsite = function (url) {
        console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    };
    MorePage.prototype.launchGiveOnline = function (url) {
        console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    };
    MorePage.prototype.launchOpportunitiesToServe = function (url) {
        console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    };
    return MorePage;
}());
MorePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-more',template:/*ion-inline-start:"/home/ubc-21/Documents/testnew/Second/src/pages/more/more.html"*/'<!--\n  Generated template for the MorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title class="toolbar-ios">South Tulsa Baptist Church</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="item row">\n    <div style="text-align:right" class="col col-50">\n\n    </div>\n    <div style="text-align:left" class="col col-50">\n      <div class="logo-baptist">\n        <img src="assets/Logo.png">\n      </div>\n      <!-- Submenu -->\n      <div class="submenu-full">\n\n        <div class="item menu-item" (click)="launchMainWebsite\n        (\'http://southtulsa.org\')">\n          Main Website\n        </div>\n\n        <div class="item menu-item" [navPush]="contact">\n          Contact\n        </div>\n\n        <div class="item menu-item" (click)="launchGiveOnline\n        (\'https://www.kindridgiving.com/App/Form/32a23def-2a48-4320-8142-7c70e3857a76\')">\n          Give Online\n        </div>\n\n        <div class="item menu-item" [navPush]="getinvolved">\n          Get Involved\n        </div>\n\n        <div class="item menu-item" (click)="launchOpportunitiesToServe\n        (\'http://vlifetechnology.com/stbc/app/pdf/Opportunites_to_Serve.pdf\')">\n          Opportunities to Serve\n        </div>\n        <!--http://southtulsa.org/Websites/stbc/images/Opportunities/Opportunites%20to%20Serve.pdf-->\n        <!--http://vlifetechnology.com/stbc/app/Files-to-copy/channel.pdf-->\n      </div>\n      <!-- Submenu ends -->\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/ubc-21/Documents/testnew/Second/src/pages/more/more.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], MorePage);

//# sourceMappingURL=more.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceTimesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ServiceTimesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ServiceTimesPage = (function () {
    function ServiceTimesPage(navCtrl, iab, navParams) {
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.navParams = navParams;
    }
    ServiceTimesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServiceTimesPage');
    };
    //Launch Services
    ServiceTimesPage.prototype.launchSundaySouthtulsat = function (url) {
        console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    };
    ServiceTimesPage.prototype.launchWatchLive = function (url) {
        console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    };
    ServiceTimesPage.prototype.launchArchive = function (url) {
        console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    };
    ServiceTimesPage.prototype.launchAudioPodcast = function (url) {
        console.log(url);
        this.iab.create(url, "_system", "location=no,hidden=no");
    };
    return ServiceTimesPage;
}());
ServiceTimesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-service-times',template:/*ion-inline-start:"/home/ubc-21/Documents/testnew/Second/src/pages/service-times/service-times.html"*/'<!--\n  Generated template for the ServiceTimesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title class="toolbar-ios">Messages</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<div class="item row">\n    <div style="text-align:right" class="col col-50">\n\n    </div>\n    <div style="text-align:left" class="col col-50">\n      <div class="logo-baptist">\n        <img src="assets/Logo.png">\n      </div>\n<!--       <ion-card (tap)="tapEvent($event)">\n        <div class="item menu-item">\n          Schedule\n        </div>\n       -->\n      <!-- Submenu -->\n      <div class="submenu-full">\n\n        <div class="item menu-item"  (click)="launchSundaySouthtulsat(\'http://southtulsa.org/announcements\')">\n          Weekly Video @Southtulsa\n        </div>\n\n        <div class="item menu-item" (click)="launchWatchLive(\'http://www.vlifetech.com/south-tulsa-baptist-church/#watch-screen\')">\n          Watch Live\n        </div>\n\n        <div class="item menu-item" (click)="launchArchive(\'http://southtulsa.org/archived-messages/#element6892895_2185585\')">\n          Archive\n        </div>\n\n        <div class="item menu-item" (click)="launchAudioPodcast(\'http://southtulsa.sermondrop.com/sermons/#sermon_details_container\')" >\n          Audio Podcasts\n        </div>\n\n        <div class="item menu-item"  (click)="launchAudioPodcast(\'http://www.vlifetech.com/south-tulsa-baptist-church/programs\')">\n          24-7 Broadcast\n        </div>\n\n\n      </div>\n      <!-- Submenu ends -->\n    </div>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/ubc-21/Documents/testnew/Second/src/pages/service-times/service-times.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], ServiceTimesPage);

//# sourceMappingURL=service-times.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		276,
		12
	],
	"../pages/archive/archive.module": [
		277,
		2
	],
	"../pages/bible/bible.module": [
		278,
		11
	],
	"../pages/bibleResources/bibleResources.module": [
		279,
		10
	],
	"../pages/contact/contact.module": [
		280,
		9
	],
	"../pages/devotionals/devotional.module": [
		281,
		8
	],
	"../pages/getinvolved/getInvolved.module": [
		282,
		7
	],
	"../pages/more/more.module": [
		283,
		6
	],
	"../pages/podcasts/podcasts.module": [
		284,
		1
	],
	"../pages/service-times/service-times.module": [
		285,
		5
	],
	"../pages/sunday/sunday.module": [
		286,
		0
	],
	"../pages/thisWeek/thisWeek.module": [
		287,
		4
	],
	"../pages/watch-live/watch-live.module": [
		288,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsLetter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsLetter = (function () {
    function NewsLetter(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewsLetter.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsLetter');
    };
    return NewsLetter;
}());
NewsLetter = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-news',template:/*ion-inline-start:"/home/ubc-21/Documents/testnew/Second/src/pages/newsletter/newsLetter.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title class="toolbar-ios">News Letter</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content Class="background">\n\n    <form class="jotform-form" ngNoForm action="http://submit.jotform.us/submit/30278270487156/" method="post" name="form_30278270487156" id="30278270487156" accept-charset="utf-8">\n        <input type="hidden" name="formID" value="30278270487156" />\n        <div class="form-all">\n            <ul class="form-section">\n                <li class="form-line" id="id_6">\n                    <div id="cid_6" class="form-input-wide">\n                        <div id="text_6" class="form-html">\n                            <h3><span>Email Newsletter Request</span>\n                            </h3>\n                        </div>\n                    </div>\n                </li>\n                <li class="form-line" id="id_1">\n                    <label class="form-label-top" id="label_1" for="input_1"> Name </label>\n                    <div id="cid_1" class="form-input-wide">\n                        <input type="text" class="form-textbox" required id="input_1" name="q1_name" size="30" />\n                    </div>\n                </li>\n                <li class="form-line" id="id_2">\n                    <label class="form-label-top" id="label_2" for="input_2">\n                        Email<span class="form-required">*</span>\n                    </label>\n                    <div id="cid_2" class="form-input-wide">\n                        <input type="text" class="form-textbox validate[required]" required id="input_2" name="q2_email" size="30" />\n                    </div>\n                </li>\n                <li class="form-line" id="id_5">\n                    <div id="cid_5" class="form-input-wide">\n                        <div style="text-align:left" class="form-buttons-wrapper">\n                            <button id="input_5" type="submit" class="form-submit-button">\n                                Send\n                            </button>\n                        </div>\n                    </div>\n                </li>\n                <li style="display:none">\n                    Should be Empty:\n                    <input type="text" name="website" value="" />\n                </li>\n            </ul>\n        </div>\n        <input type="hidden" id="simple_spc" name="simple_spc" value="30278270487156" />\n        <script type="text/javascript">\n            document.getElementById("si" + "mple" + "_spc").value = "30278270487156-30278270487156";\n        </script>\n    </form>\n</ion-content>'/*ion-inline-end:"/home/ubc-21/Documents/testnew/Second/src/pages/newsletter/newsLetter.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], NewsLetter);

//# sourceMappingURL=newsLetter.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bible_bible__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__more_more__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = (function () {
    function TabsPage(platform, keyboard) {
        var _this = this;
        this.keyboard = keyboard;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__bible_bible__["a" /* BiblePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__more_more__["a" /* MorePage */];
        platform.ready().then(function () {
            _this.keyboard.onKeyboardShow().subscribe(function () {
                document.body.classList.add('keyboard-is-open');
            });
            _this.keyboard.onKeyboardHide().subscribe(function () {
                document.body.classList.remove('keyboard-is-open');
            });
        });
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/ubc-21/Documents/testnew/Second/src/pages/tabs/tabs.html"*/'<ion-tabs class="tabbed-app">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Bible" tabIcon="book"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="More" tabIcon="analytics"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/ubc-21/Documents/testnew/Second/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_times_service_times__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connect_connect_card__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, iab) {
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.messages = __WEBPACK_IMPORTED_MODULE_2__service_times_service_times__["a" /* ServiceTimesPage */];
        this.connect = __WEBPACK_IMPORTED_MODULE_4__connect_connect_card__["a" /* ConnectCard */];
    }
    //Launch Services
    HomePage.prototype.launchService = function (url) {
        this.iab.create(url, "_system", { location: 'no', hidden: 'no' });
    };
    //Launch Directions
    HomePage.prototype.launchDirections = function (url) {
        this.iab.create(url, "_system", { location: 'no', hidden: 'no' });
    };
    //Launch Events
    HomePage.prototype.launchEvents = function (url) {
        this.iab.create(url, "_system", { location: 'no', hidden: 'no' });
    };
    //Launch Pastor
    HomePage.prototype.launchPastor = function (url) {
        this.iab.create(url, "_system", { location: 'no', hidden: 'no' });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/ubc-21/Documents/testnew/Second/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title class="toolbar-ios">South Tulsa Baptist Church</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding  >\n\n  <div class="item row backImg" >\n    <div style="text-align:right" class="col col-50">\n\n    </div>\n    <div style="text-align:left" class="col col-50">\n      <div class="logo-baptist">\n        <img src="assets/Logo.png">\n      </div>\n<!--       <ion-card (tap)="tapEvent($event)">\n        <div class="item menu-item">\n          Schedule\n        </div>\n       -->\n      <!-- Submenu -->\n      <div class="submenu-full">\n\n        <div class="item menu-item"  (click)="launchService\n        (\'http://southtulsa.org/what-to-expect/#schedule\')">\n          Schedule\n        </div>\n\n\n        <div class="item menu-item" [navPush]="messages">\n          Messages\n        </div>\n\n        <div class="item menu-item" (click)="launchDirections\n        (\'http://southtulsa.org/directions/#element6892911_2185601\')">\n          Directions\n        </div>\n\n        <div class="item menu-item" (click)="launchEvents\n        (\'https://public.serviceu.com/Calendar/?OrgKey=b746bff2-61fa-4917-b0fe-fe4649eb89c0&canSearch=False&dontShowSubscription=True&rendermode=iframe\')">\n          Events\n        </div>\n\n        <div class="item menu-item" (click)="launchPastor\n        (\'http://southtulsa.org/pastors-greeting/#element7298440_2291141\')" >\n          Pastor Greeting\n        </div>\n\n        <div class="item menu-item" [navPush]="connect">\n          Connect Cards\n        </div>\n\n      </div>\n      <!-- Submenu ends -->\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/ubc-21/Documents/testnew/Second/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectCard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConnectCard = (function () {
    function ConnectCard(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConnectCard.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConnectCard');
    };
    return ConnectCard;
}());
ConnectCard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-connect',template:/*ion-inline-start:"/home/ubc-21/Documents/testnew/Second/src/pages/connect/connect_card.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title class="toolbar-ios title title-md">Guest Card</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <div class = "row">\n        <div class = "col col-50">\n\n\n    <form class="jotform-form" ngNoForm action="http://submit.jotform.co/submit/32461093349859/" target="_system" method="post" name="form_32461093349859" id="32461093349859" accept-charset="utf-8">\n        <input type="hidden" name="formID" value="32461093349859" />\n\n        <div class="">\n            <ul class="form-section">\n                <li class="form-line" id="id_5">\n                    <label class="form-label-top" id="label_5" > Surname </label>\n                    <div id="cid_5" class="form-input-wide">\n                        <div class="form-single-column"><span class="form-radio-item" style="clear:left;"><input type="radio" class="form-radio" id="input_5_0" name="q5_surname" value="Dr." />\n              <label for="input_5_0"> Dr. </label></span><span class="clearfix"></span><span class="form-radio-item" style="clear:left;"><input type="radio" class="form-radio" id="input_5_1" name="q5_surname" value="Mr." />\n              <label for="input_5_1"> Mr. </label></span><span class="clearfix"></span><span class="form-radio-item" style="clear:left;"><input type="radio" class="form-radio" id="input_5_2" name="q5_surname" value="Mrs." />\n              <label for="input_5_2"> Mrs. </label></span><span class="clearfix"></span><span class="form-radio-item" style="clear:left;"><input type="radio" class="form-radio" id="input_5_3" name="q5_surname" value="Miss." />\n              <label for="input_5_3"> Miss. </label></span><span class="clearfix"></span><span class="form-radio-item" style="clear:left;"><input type="radio" class="form-radio" id="input_5_4" name="q5_surname" value="Ms." />\n              <label for="input_5_4"> Ms. </label></span><span class="clearfix"></span>\n                        </div>\n                    </div>\n                </li>\n                <li class="form-line" id="id_3">\n                    <label class="form-label-left" id="label_3" >\n                        Full Name<span class="form-required">*</span>\n                    </label>\n                    <div id="cid_3" class="form-input"><span class="form-sub-label-container"><input class="form-textbox validate[required]" required type="text" size="10" name="q3_fullName3[first]" id="first_3" />\n            <label class="form-sub-label" for="first_3" > First Name </label></span><span class="form-sub-label-container"><input class="form-textbox validate[required]" type="text" size="15" name="q3_fullName3[last]" id="last_3" />\n            <label class="form-sub-label" for="last_3" > Last Name </label></span>\n                    </div>\n                </li>\n                <li class="form-line" id="id_4">\n                    <label class="form-label-left" id="label_4" > Spouses Name </label>\n                    <div id="cid_4" class="form-input"><span class="form-sub-label-container"><input class="form-textbox" type="text" size="10" name="q4_spousesName[first]" id="first_4" />\n            <label class="form-sub-label" for="first_4" > First Name </label></span><span class="form-sub-label-container"><input class="form-textbox" required type="text" size="15" name="q4_spousesName[last]" id="last_4" />\n            <label class="form-sub-label" for="last_4" > Last Name </label></span>\n                    </div>\n                </li>\n                <li class="form-line " id="id_7">\n                    <label class="form-label-left" id="label_7" for="input_7">\n                        E-mail<span class="form-required">*</span>\n                    </label>\n                    <div   id="cid_7" class="form-input ">\n                        <input type="email" class="inputWidth form-textbox validate[required, Email]" id="input_7" required name="q7_email7" size="30" value="" />\n                    </div>\n                </li>\n                <li class="form-line" id="id_6">\n                    <label class="form-label-top" id="label_6" > Address </label>\n                    <div id="cid_6" class="form-input-wide">\n                        <table summary="" class="form-address-table" border="0" cellpadding="0" cellspacing="0">\n                            <tr>\n                                <td colspan="2"><span class="form-sub-label-container"><input class=" inputWidth form-textbox form-address-line" required  type="text" name="q6_address6[addr_line1]" id="input_6_addr_line1" />\n                  <label class="form-sub-label" for="input_6_addr_line1" id="sublabel_6_addr_line1"> Street Address </label></span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td colspan="2"><span class="form-sub-label-container"><input class="inputWidth form-textbox form-address-line" type="text" name="q6_address6[addr_line2]" id="input_6_addr_line2" size="46" />\n                  <label class="form-sub-label" for="input_6_addr_line2" id="sublabel_6_addr_line2"> Street Address Line 2 </label></span>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td colspan="2" ><span class="form-sub-label-container"><input class="inputWidth form-textbox form-address-city" type="text" name="q6_address6[city]" id="input_6_city" size="21" />\n                  <label class="form-sub-label" for="input_6_city" id="sublabel_6_city"> City </label></span>\n                                </td></tr>\n\n                                <tr><td colspan="2"><span class="form-sub-label-container"><input class=" form-textbox form-address-state" type="text" name="q6_address6[state]" id="input_6_state" size="22" />\n                  <label class="form-sub-label" for="input_6_state" id="sublabel_6_state"> State / Province </label></span>\n                                </td>\n                            </tr>\n                            <tr>\n\n                                <td><span class="form-sub-label-container"><select class="form-dropdown form-address-country" name="q6_address6[country]" id="input_6_country">\n                    <option value="" selected> Please Select </option>\n                    <option value="United States"> United States </option>\n                    <option value="Afghanistan"> Afghanistan </option>\n                    <option value="Albania"> Albania </option>\n                    <option value="Algeria"> Algeria </option>\n                    <option value="American Samoa"> American Samoa </option>\n                    <option value="Andorra"> Andorra </option>\n                    <option value="Angola"> Angola </option>\n                    <option value="Anguilla"> Anguilla </option>\n                    <option value="Antigua and Barbuda"> Antigua and Barbuda </option>\n                    <option value="Argentina"> Argentina </option>\n                    <option value="Armenia"> Armenia </option>\n                    <option value="Aruba"> Aruba </option>\n                    <option value="Australia"> Australia </option>\n                    <option value="Austria"> Austria </option>\n                    <option value="Azerbaijan"> Azerbaijan </option>\n                    <option value="The Bahamas"> The Bahamas </option>\n                    <option value="Bahrain"> Bahrain </option>\n                    <option value="Bangladesh"> Bangladesh </option>\n                    <option value="Barbados"> Barbados </option>\n                    <option value="Belarus"> Belarus </option>\n                    <option value="Belgium"> Belgium </option>\n                    <option value="Belize"> Belize </option>\n                    <option value="Benin"> Benin </option>\n                    <option value="Bermuda"> Bermuda </option>\n                    <option value="Bhutan"> Bhutan </option>\n                    <option value="Bolivia"> Bolivia </option>\n                    <option value="Bosnia and Herzegovina"> Bosnia and Herzegovina </option>\n                    <option value="Botswana"> Botswana </option>\n                    <option value="Brazil"> Brazil </option>\n                    <option value="Brunei"> Brunei </option>\n                    <option value="Bulgaria"> Bulgaria </option>\n                    <option value="Burkina Faso"> Burkina Faso </option>\n                    <option value="Burundi"> Burundi </option>\n                    <option value="Cambodia"> Cambodia </option>\n                    <option value="Cameroon"> Cameroon </option>\n                    <option value="Canada"> Canada </option>\n                    <option value="Cape Verde"> Cape Verde </option>\n                    <option value="Cayman Islands"> Cayman Islands </option>\n                    <option value="Central African Republic"> Central African Republic </option>\n                    <option value="Chad"> Chad </option>\n                    <option value="Chile"> Chile </option>\n                    <option value="People\'s Republic of China"> People\'s Republic of China </option>\n                    <option value="Republic of China"> Republic of China </option>\n                    <option value="Christmas Island"> Christmas Island </option>\n                    <option value="Cocos (Keeling) Islands"> Cocos (Keeling) Islands </option>\n                    <option value="Colombia"> Colombia </option>\n                    <option value="Comoros"> Comoros </option>\n                    <option value="Congo"> Congo </option>\n                    <option value="Cook Islands"> Cook Islands </option>\n                    <option value="Costa Rica"> Costa Rica </option>\n                    <option value="Cote d\'Ivoire"> Cote d\'Ivoire </option>\n                    <option value="Croatia"> Croatia </option>\n                    <option value="Cuba"> Cuba </option>\n                    <option value="Cyprus"> Cyprus </option>\n                    <option value="Czech Republic"> Czech Republic </option>\n                    <option value="Denmark"> Denmark </option>\n                    <option value="Djibouti"> Djibouti </option>\n                    <option value="Dominica"> Dominica </option>\n                    <option value="Dominican Republic"> Dominican Republic </option>\n                    <option value="Ecuador"> Ecuador </option>\n                    <option value="Egypt"> Egypt </option>\n                    <option value="El Salvador"> El Salvador </option>\n                    <option value="Equatorial Guinea"> Equatorial Guinea </option>\n                    <option value="Eritrea"> Eritrea </option>\n                    <option value="Estonia"> Estonia </option>\n                    <option value="Ethiopia"> Ethiopia </option>\n                    <option value="Falkland Islands"> Falkland Islands </option>\n                    <option value="Faroe Islands"> Faroe Islands </option>\n                    <option value="Fiji"> Fiji </option>\n                    <option value="Finland"> Finland </option>\n                    <option value="France"> France </option>\n                    <option value="French Polynesia"> French Polynesia </option>\n                    <option value="Gabon"> Gabon </option>\n                    <option value="The Gambia"> The Gambia </option>\n                    <option value="Georgia"> Georgia </option>\n                    <option value="Germany"> Germany </option>\n                    <option value="Ghana"> Ghana </option>\n                    <option value="Gibraltar"> Gibraltar </option>\n                    <option value="Greece"> Greece </option>\n                    <option value="Greenland"> Greenland </option>\n                    <option value="Grenada"> Grenada </option>\n                    <option value="Guadeloupe"> Guadeloupe </option>\n                    <option value="Guam"> Guam </option>\n                    <option value="Guatemala"> Guatemala </option>\n                    <option value="Guernsey"> Guernsey </option>\n                    <option value="Guinea"> Guinea </option>\n                    <option value="Guinea-Bissau"> Guinea-Bissau </option>\n                    <option value="Guyana"> Guyana </option>\n                    <option value="Haiti"> Haiti </option>\n                    <option value="Honduras"> Honduras </option>\n                    <option value="Hong Kong"> Hong Kong </option>\n                    <option value="Hungary"> Hungary </option>\n                    <option value="Iceland"> Iceland </option>\n                    <option value="India"> India </option>\n                    <option value="Indonesia"> Indonesia </option>\n                    <option value="Iran"> Iran </option>\n                    <option value="Iraq"> Iraq </option>\n                    <option value="Ireland"> Ireland </option>\n                    <option value="Israel"> Israel </option>\n                    <option value="Italy"> Italy </option>\n                    <option value="Jamaica"> Jamaica </option>\n                    <option value="Japan"> Japan </option>\n                    <option value="Jersey"> Jersey </option>\n                    <option value="Jordan"> Jordan </option>\n                    <option value="Kazakhstan"> Kazakhstan </option>\n                    <option value="Kenya"> Kenya </option>\n                    <option value="Kiribati"> Kiribati </option>\n                    <option value="North Korea"> North Korea </option>\n                    <option value="South Korea"> South Korea </option>\n                    <option value="Kosovo"> Kosovo </option>\n                    <option value="Kuwait"> Kuwait </option>\n                    <option value="Kyrgyzstan"> Kyrgyzstan </option>\n                    <option value="Laos"> Laos </option>\n                    <option value="Latvia"> Latvia </option>\n                    <option value="Lebanon"> Lebanon </option>\n                    <option value="Lesotho"> Lesotho </option>\n                    <option value="Liberia"> Liberia </option>\n                    <option value="Libya"> Libya </option>\n                    <option value="Liechtenstein"> Liechtenstein </option>\n                    <option value="Lithuania"> Lithuania </option>\n                    <option value="Luxembourg"> Luxembourg </option>\n                    <option value="Macau"> Macau </option>\n                    <option value="Macedonia"> Macedonia </option>\n                    <option value="Madagascar"> Madagascar </option>\n                    <option value="Malawi"> Malawi </option>\n                    <option value="Malaysia"> Malaysia </option>\n                    <option value="Maldives"> Maldives </option>\n                    <option value="Mali"> Mali </option>\n                    <option value="Malta"> Malta </option>\n                    <option value="Marshall Islands"> Marshall Islands </option>\n                    <option value="Martinique"> Martinique </option>\n                    <option value="Mauritania"> Mauritania </option>\n                    <option value="Mauritius"> Mauritius </option>\n                    <option value="Mayotte"> Mayotte </option>\n                    <option value="Mexico"> Mexico </option>\n                    <option value="Micronesia"> Micronesia </option>\n                    <option value="Moldova"> Moldova </option>\n                    <option value="Monaco"> Monaco </option>\n                    <option value="Mongolia"> Mongolia </option>\n                    <option value="Montenegro"> Montenegro </option>\n                    <option value="Montserrat"> Montserrat </option>\n                    <option value="Morocco"> Morocco </option>\n                    <option value="Mozambique"> Mozambique </option>\n                    <option value="Myanmar"> Myanmar </option>\n                    <option value="Nagorno-Karabakh"> Nagorno-Karabakh </option>\n                    <option value="Namibia"> Namibia </option>\n                    <option value="Nauru"> Nauru </option>\n                    <option value="Nepal"> Nepal </option>\n                    <option value="Netherlands"> Netherlands </option>\n                    <option value="Netherlands Antilles"> Netherlands Antilles </option>\n                    <option value="New Caledonia"> New Caledonia </option>\n                    <option value="New Zealand"> New Zealand </option>\n                    <option value="Nicaragua"> Nicaragua </option>\n                    <option value="Niger"> Niger </option>\n                    <option value="Nigeria"> Nigeria </option>\n                    <option value="Niue"> Niue </option>\n                    <option value="Norfolk Island"> Norfolk Island </option>\n                    <option value="Turkish Republic of Northern Cyprus"> Turkish Republic of Northern Cyprus </option>\n                    <option value="Northern Mariana"> Northern Mariana </option>\n                    <option value="Norway"> Norway </option>\n                    <option value="Oman"> Oman </option>\n                    <option value="Pakistan"> Pakistan </option>\n                    <option value="Palau"> Palau </option>\n                    <option value="Palestine"> Palestine </option>\n                    <option value="Panama"> Panama </option>\n                    <option value="Papua New Guinea"> Papua New Guinea </option>\n                    <option value="Paraguay"> Paraguay </option>\n                    <option value="Peru"> Peru </option>\n                    <option value="Philippines"> Philippines </option>\n                    <option value="Pitcairn Islands"> Pitcairn Islands </option>\n                    <option value="Poland"> Poland </option>\n                    <option value="Portugal"> Portugal </option>\n                    <option value="Puerto Rico"> Puerto Rico </option>\n                    <option value="Qatar"> Qatar </option>\n                    <option value="Romania"> Romania </option>\n                    <option value="Russia"> Russia </option>\n                    <option value="Rwanda"> Rwanda </option>\n                    <option value="Saint Barthelemy"> Saint Barthelemy </option>\n                    <option value="Saint Helena"> Saint Helena </option>\n                    <option value="Saint Kitts and Nevis"> Saint Kitts and Nevis </option>\n                    <option value="Saint Lucia"> Saint Lucia </option>\n                    <option value="Saint Martin"> Saint Martin </option>\n                    <option value="Saint Pierre and Miquelon"> Saint Pierre and Miquelon </option>\n                    <option value="Saint Vincent and the Grenadines"> Saint Vincent and the Grenadines </option>\n                    <option value="Samoa"> Samoa </option>\n                    <option value="San Marino"> San Marino </option>\n                    <option value="Sao Tome and Principe"> Sao Tome and Principe </option>\n                    <option value="Saudi Arabia"> Saudi Arabia </option>\n                    <option value="Senegal"> Senegal </option>\n                    <option value="Serbia"> Serbia </option>\n                    <option value="Seychelles"> Seychelles </option>\n                    <option value="Sierra Leone"> Sierra Leone </option>\n                    <option value="Singapore"> Singapore </option>\n                    <option value="Slovakia"> Slovakia </option>\n                    <option value="Slovenia"> Slovenia </option>\n                    <option value="Solomon Islands"> Solomon Islands </option>\n                    <option value="Somalia"> Somalia </option>\n                    <option value="Somaliland"> Somaliland </option>\n                    <option value="South Africa"> South Africa </option>\n                    <option value="South Ossetia"> South Ossetia </option>\n                    <option value="Spain"> Spain </option>\n                    <option value="Sri Lanka"> Sri Lanka </option>\n                    <option value="Sudan"> Sudan </option>\n                    <option value="Suriname"> Suriname </option>\n                    <option value="Svalbard"> Svalbard </option>\n                    <option value="Swaziland"> Swaziland </option>\n                    <option value="Sweden"> Sweden </option>\n                    <option value="Switzerland"> Switzerland </option>\n                    <option value="Syria"> Syria </option>\n                    <option value="Taiwan"> Taiwan </option>\n                    <option value="Tajikistan"> Tajikistan </option>\n                    <option value="Tanzania"> Tanzania </option>\n                    <option value="Thailand"> Thailand </option>\n                    <option value="Timor-Leste"> Timor-Leste </option>\n                    <option value="Togo"> Togo </option>\n                    <option value="Tokelau"> Tokelau </option>\n                    <option value="Tonga"> Tonga </option>\n                    <option value="Transnistria Pridnestrovie"> Transnistria Pridnestrovie </option>\n                    <option value="Trinidad and Tobago"> Trinidad and Tobago </option>\n                    <option value="Tristan da Cunha"> Tristan da Cunha </option>\n                    <option value="Tunisia"> Tunisia </option>\n                    <option value="Turkey"> Turkey </option>\n                    <option value="Turkmenistan"> Turkmenistan </option>\n                    <option value="Turks and Caicos Islands"> Turks and Caicos Islands </option>\n                    <option value="Tuvalu"> Tuvalu </option>\n                    <option value="Uganda"> Uganda </option>\n                    <option value="Ukraine"> Ukraine </option>\n                    <option value="United Arab Emirates"> United Arab Emirates </option>\n                    <option value="United Kingdom"> United Kingdom </option>\n                    <option value="Uruguay"> Uruguay </option>\n                    <option value="Uzbekistan"> Uzbekistan </option>\n                    <option value="Vanuatu"> Vanuatu </option>\n                    <option value="Vatican City"> Vatican City </option>\n                    <option value="Venezuela"> Venezuela </option>\n                    <option value="Vietnam"> Vietnam </option>\n                    <option value="British Virgin Islands"> British Virgin Islands </option>\n                    <option value="US Virgin Islands"> US Virgin Islands </option>\n                    <option value="Wallis and Futuna"> Wallis and Futuna </option>\n                    <option value="Western Sahara"> Western Sahara </option>\n                    <option value="Yemen"> Yemen </option>\n                    <option value="Zambia"> Zambia </option>\n                    <option value="Zimbabwe"> Zimbabwe </option>\n                    <option value="other"> Other </option>\n                  </select>\n                  <label class="form-sub-label" for="input_6_country" id="sublabel_6_country"> Country </label></span>\n                                </td>\n                            </tr>\n                        </table>\n                    </div>\n                </li>\n                <li class="form-line" id="id_23">\n                    <label class="form-label-top" id="label_23" for="input_23"> Phone </label>\n                    <div id="cid_23" class="form-input-wide">\n                        <input type="text" class=" form-textbox" data-type="input-textbox" id="input_23" name="q23_phone" size="20" value="" />\n                    </div>\n                </li>\n                <li class="form-line" id="id_8">\n                    <label class="form-label-top" id="label_8" for="input_8"> Occupation </label>\n                    <div id="cid_8" class="form-input-wide">\n                        <input type="text" class=" form-textbox" data-type="input-textbox" id="input_8" name="q8_occupation" size="20" value="" />\n                    </div>\n                </li>\n                <li class="form-line" id="id_9">\n                    <label class="form-label-left" id="label_9" > Age Group </label>\n                    <div id="cid_9" class="form-input">\n                        <div class="form-multiple-column"><span class="form-radio-item"><input type="radio" class="form-radio" id="input_9_0" name="q9_ageGroup" value="Under 20\'s" />\n              <label for="input_9_0"> Under 20\'s </label></span><span class="clearfix"></span><span class="form-radio-item"><input type="radio" class="form-radio" id="input_9_1" name="q9_ageGroup" value="20\'s" />\n              <label for="input_9_1"> 20\'s </label></span><span class="clearfix"></span><span class="form-radio-item"><input type="radio" class="form-radio" id="input_9_2" name="q9_ageGroup" value="30\'s" />\n              <label for="input_9_2"> 30\'s </label></span><span class="clearfix"></span><span class="form-radio-item"><input type="radio" class="form-radio" id="input_9_3" name="q9_ageGroup" value="40\'s" />\n              <label for="input_9_3"> 40\'s </label></span><span class="clearfix"></span><span class="form-radio-item"><input type="radio" class="form-radio" id="input_9_4" name="q9_ageGroup" value="50\'s" />\n              <label for="input_9_4"> 50\'s </label></span><span class="clearfix"></span><span class="form-radio-item"><input type="radio" class="form-radio" id="input_9_5" name="q9_ageGroup" value="60\'s" />\n              <label for="input_9_5"> 60\'s </label></span><span class="clearfix"></span><span class="form-radio-item"><input type="radio" class="form-radio" id="input_9_6" name="q9_ageGroup" value="70\'s and over" />\n              <label for="input_9_6"> 70\'s and over </label></span><span class="clearfix"></span>\n                        </div>\n                    </div>\n                </li>\n                <li class="form-line" id="id_10">\n                    <label class="form-label-top" id="label_10" > Membership </label>\n                    <div id="cid_10" class="form-input-wide">\n                        <div class="form-single-column"><span class="form-radio-item" style="clear:left;"><input type="radio" class="form-radio" id="input_10_0" name="q10_membership" value="I am a member of South Tulsa Baptist Church" />\n              <label for="input_10_0"> I am a member of South Tulsa Baptist Church </label></span><span class="clearfix"></span><span class="form-radio-item" style="clear:left;"><input type="radio" class="form-radio" id="input_10_1" name="q10_membership" value="I am not a member of South Tulsa Baptist Church" />\n              <label for="input_10_1"> I am not a member of South Tulsa Baptist Church </label></span><span class="clearfix"></span>\n                        </div>\n                    </div>\n                </li>\n                <li class="form-line" id="id_11">\n                    <label class="form-label-top" id="label_11" for="input_11"> (If not a member) I am a member of </label>\n                    <div id="cid_11" class="form-input-wide">\n                        <input type="text" class="inputWidth form-textbox" data-type="input-textbox" id="input_11" name="q11_ifNot" size="40" value="" maxlength="40" />\n                    </div>\n                </li>\n                <li class="form-line" id="id_12">\n                    <label class="form-label-left" id="label_12" > Childs Name </label>\n                    <div id="cid_12" class="form-input"><span class="form-sub-label-container"><input class="form-textbox" type="text" size="10" name="q12_childsName[first]" id="first_12" />\n            <label class="form-sub-label" for="first_12"> First Name </label></span><span class="form-sub-label-container"><input class="form-textbox" type="text" size="15" name="q12_childsName[last]" id="last_12" />\n            <label class="form-sub-label" for="last_12"> Last Name </label></span>\n                    </div>\n                </li>\n                <li class="form-line" id="id_13">\n                    <label class="form-label-left" id="label_13" > Childs Birth Date </label>\n                    <div id="cid_13" class="form-input"><span class="form-sub-label-container"><select class="form-dropdown" name="q13_childsBirth[month]" id="input_13_month">\n              <option>  </option>\n              <option value="January"> January </option>\n              <option value="February"> February </option>\n              <option value="March"> March </option>\n              <option value="April"> April </option>\n              <option value="May"> May </option>\n              <option value="June"> June </option>\n              <option value="July"> July </option>\n              <option value="August"> August </option>\n              <option value="September"> September </option>\n              <option value="October"> October </option>\n              <option value="November"> November </option>\n              <option value="December"> December </option>\n            </select>\n            <label class="form-sub-label" for="input_13_month" > Month </label></span><span class="form-sub-label-container"><select class="form-dropdown" name="q13_childsBirth[day]" id="input_13_day">\n              <option>  </option>\n              <option value="1"> 1 </option>\n              <option value="2"> 2 </option>\n              <option value="3"> 3 </option>\n              <option value="4"> 4 </option>\n              <option value="5"> 5 </option>\n              <option value="6"> 6 </option>\n              <option value="7"> 7 </option>\n              <option value="8"> 8 </option>\n              <option value="9"> 9 </option>\n              <option value="10"> 10 </option>\n              <option value="11"> 11 </option>\n              <option value="12"> 12 </option>\n              <option value="13"> 13 </option>\n              <option value="14"> 14 </option>\n              <option value="15"> 15 </option>\n              <option value="16"> 16 </option>\n              <option value="17"> 17 </option>\n              <option value="18"> 18 </option>\n              <option value="19"> 19 </option>\n              <option value="20"> 20 </option>\n              <option value="21"> 21 </option>\n              <option value="22"> 22 </option>\n              <option value="23"> 23 </option>\n              <option value="24"> 24 </option>\n              <option value="25"> 25 </option>\n              <option value="26"> 26 </option>\n              <option value="27"> 27 </option>\n              <option value="28"> 28 </option>\n              <option value="29"> 29 </option>\n              <option value="30"> 30 </option>\n              <option value="31"> 31 </option>\n            </select>\n            <label class="form-sub-label" for="input_13_day"> Day </label></span><span class="form-sub-label-container"><select class="form-dropdown" name="q13_childsBirth[year]" id="input_13_year">\n              <option>  </option>\n              <option value="2037"> 2037 </option>\n              <option value="2036"> 2036 </option>\n              <option value="2035"> 2035 </option>\n              <option value="2034"> 2034 </option>\n              <option value="2033"> 2033 </option>\n              <option value="2032"> 2032 </option>\n              <option value="2031"> 2031 </option>\n              <option value="2030"> 2030 </option>\n              <option value="2029"> 2029 </option>\n              <option value="2028"> 2028 </option>\n              <option value="2027"> 2027 </option>\n              <option value="2026"> 2026 </option>\n              <option value="2025"> 2025 </option>\n              <option value="2024"> 2024 </option>\n              <option value="2023"> 2023 </option>\n              <option value="2022"> 2022 </option>\n              <option value="2021"> 2021 </option>\n              <option value="2020"> 2020 </option>\n              <option value="2019"> 2019 </option>\n              <option value="2018"> 2018 </option>\n              <option value="2017"> 2017 </option>\n              <option value="2016"> 2016 </option>\n              <option value="2015"> 2015 </option>\n              <option value="2014"> 2014 </option>\n              <option value="2013"> 2013 </option>\n              <option value="2012"> 2012 </option>\n              <option value="2011"> 2011 </option>\n              <option value="2010"> 2010 </option>\n              <option value="2009"> 2009 </option>\n              <option value="2008"> 2008 </option>\n              <option value="2007"> 2007 </option>\n              <option value="2006"> 2006 </option>\n              <option value="2005"> 2005 </option>\n              <option value="2004"> 2004 </option>\n              <option value="2003"> 2003 </option>\n              <option value="2002"> 2002 </option>\n              <option value="2001"> 2001 </option>\n              <option value="2000"> 2000 </option>\n              <option value="1999"> 1999 </option>\n              <option value="1998"> 1998 </option>\n              <option value="1997"> 1997 </option>\n              <option value="1996"> 1996 </option>\n              <option value="1995"> 1995 </option>\n              <option value="1994"> 1994 </option>\n              <option value="1993"> 1993 </option>\n              <option value="1992"> 1992 </option>\n              <option value="1991"> 1991 </option>\n              <option value="1990"> 1990 </option>\n              <option value="1989"> 1989 </option>\n              <option value="1988"> 1988 </option>\n              <option value="1987"> 1987 </option>\n              <option value="1986"> 1986 </option>\n              <option value="1985"> 1985 </option>\n              <option value="1984"> 1984 </option>\n              <option value="1983"> 1983 </option>\n              <option value="1982"> 1982 </option>\n              <option value="1981"> 1981 </option>\n              <option value="1980"> 1980 </option>\n              <option value="1979"> 1979 </option>\n              <option value="1978"> 1978 </option>\n              <option value="1977"> 1977 </option>\n              <option value="1976"> 1976 </option>\n              <option value="1975"> 1975 </option>\n              <option value="1974"> 1974 </option>\n              <option value="1973"> 1973 </option>\n              <option value="1972"> 1972 </option>\n              <option value="1971"> 1971 </option>\n              <option value="1970"> 1970 </option>\n              <option value="1969"> 1969 </option>\n              <option value="1968"> 1968 </option>\n              <option value="1967"> 1967 </option>\n              <option value="1966"> 1966 </option>\n              <option value="1965"> 1965 </option>\n              <option value="1964"> 1964 </option>\n              <option value="1963"> 1963 </option>\n              <option value="1962"> 1962 </option>\n              <option value="1961"> 1961 </option>\n              <option value="1960"> 1960 </option>\n              <option value="1959"> 1959 </option>\n              <option value="1958"> 1958 </option>\n              <option value="1957"> 1957 </option>\n              <option value="1956"> 1956 </option>\n              <option value="1955"> 1955 </option>\n              <option value="1954"> 1954 </option>\n              <option value="1953"> 1953 </option>\n              <option value="1952"> 1952 </option>\n              <option value="1951"> 1951 </option>\n              <option value="1950"> 1950 </option>\n              <option value="1949"> 1949 </option>\n              <option value="1948"> 1948 </option>\n              <option value="1947"> 1947 </option>\n              <option value="1946"> 1946 </option>\n              <option value="1945"> 1945 </option>\n              <option value="1944"> 1944 </option>\n              <option value="1943"> 1943 </option>\n              <option value="1942"> 1942 </option>\n              <option value="1941"> 1941 </option>\n              <option value="1940"> 1940 </option>\n              <option value="1939"> 1939 </option>\n              <option value="1938"> 1938 </option>\n              <option value="1937"> 1937 </option>\n              <option value="1936"> 1936 </option>\n              <option value="1935"> 1935 </option>\n              <option value="1934"> 1934 </option>\n              <option value="1933"> 1933 </option>\n              <option value="1932"> 1932 </option>\n              <option value="1931"> 1931 </option>\n              <option value="1930"> 1930 </option>\n              <option value="1929"> 1929 </option>\n              <option value="1928"> 1928 </option>\n              <option value="1927"> 1927 </option>\n              <option value="1926"> 1926 </option>\n              <option value="1925"> 1925 </option>\n              <option value="1924"> 1924 </option>\n              <option value="1923"> 1923 </option>\n              <option value="1922"> 1922 </option>\n              <option value="1921"> 1921 </option>\n              <option value="1920"> 1920 </option>\n            </select>\n            <label class="form-sub-label" for="input_13_year" > Year </label></span>\n                    </div>\n                </li>\n                <li class="form-line" id="id_14">\n                    <label class="form-label-left" id="label_14" > Childs Full Name </label>\n                    <div id="cid_14" class="form-input"><span class="form-sub-label-container"><input class="form-textbox" type="text" size="10" name="q14_childsFull[first]" id="first_14" />\n            <label class="form-sub-label" for="first_14" > First Name </label></span><span class="form-sub-label-container"><input class="form-textbox" type="text" size="15" name="q14_childsFull[last]" id="last_14" />\n            <label class="form-sub-label" for="last_14" > Last Name </label></span>\n                    </div>\n                </li>\n                <li class="form-line" id="id_15">\n                    <label class="form-label-left" id="label_15" > Childs Birth Date </label>\n                    <div id="cid_15" class="form-input"><span class="form-sub-label-container"><select class="form-dropdown" name="q15_childsBirth15[month]" id="input_15_month">\n              <option>  </option>\n              <option value="January"> January </option>\n              <option value="February"> February </option>\n              <option value="March"> March </option>\n              <option value="April"> April </option>\n              <option value="May"> May </option>\n              <option value="June"> June </option>\n              <option value="July"> July </option>\n              <option value="August"> August </option>\n              <option value="September"> September </option>\n              <option value="October"> October </option>\n              <option value="November"> November </option>\n              <option value="December"> December </option>\n            </select>\n            <label class="form-sub-label" for="input_15_month" > Month </label></span><span class="form-sub-label-container"><select class="form-dropdown" name="q15_childsBirth15[day]" id="input_15_day">\n              <option>  </option>\n              <option value="1"> 1 </option>\n              <option value="2"> 2 </option>\n              <option value="3"> 3 </option>\n              <option value="4"> 4 </option>\n              <option value="5"> 5 </option>\n              <option value="6"> 6 </option>\n              <option value="7"> 7 </option>\n              <option value="8"> 8 </option>\n              <option value="9"> 9 </option>\n              <option value="10"> 10 </option>\n              <option value="11"> 11 </option>\n              <option value="12"> 12 </option>\n              <option value="13"> 13 </option>\n              <option value="14"> 14 </option>\n              <option value="15"> 15 </option>\n              <option value="16"> 16 </option>\n              <option value="17"> 17 </option>\n              <option value="18"> 18 </option>\n              <option value="19"> 19 </option>\n              <option value="20"> 20 </option>\n              <option value="21"> 21 </option>\n              <option value="22"> 22 </option>\n              <option value="23"> 23 </option>\n              <option value="24"> 24 </option>\n              <option value="25"> 25 </option>\n              <option value="26"> 26 </option>\n              <option value="27"> 27 </option>\n              <option value="28"> 28 </option>\n              <option value="29"> 29 </option>\n              <option value="30"> 30 </option>\n              <option value="31"> 31 </option>\n            </select>\n            <label class="form-sub-label" for="input_15_day" > Day </label></span><span class="form-sub-label-container"><select class="form-dropdown" name="q15_childsBirth15[year]" id="input_15_year">\n              <option>  </option>\n              <option value="2037"> 2037 </option>\n              <option value="2036"> 2036 </option>\n              <option value="2035"> 2035 </option>\n              <option value="2034"> 2034 </option>\n              <option value="2033"> 2033 </option>\n              <option value="2032"> 2032 </option>\n              <option value="2031"> 2031 </option>\n              <option value="2030"> 2030 </option>\n              <option value="2029"> 2029 </option>\n              <option value="2028"> 2028 </option>\n              <option value="2027"> 2027 </option>\n              <option value="2026"> 2026 </option>\n              <option value="2025"> 2025 </option>\n              <option value="2024"> 2024 </option>\n              <option value="2023"> 2023 </option>\n              <option value="2022"> 2022 </option>\n              <option value="2021"> 2021 </option>\n              <option value="2020"> 2020 </option>\n              <option value="2019"> 2019 </option>\n              <option value="2018"> 2018 </option>\n              <option value="2017"> 2017 </option>\n              <option value="2016"> 2016 </option>\n              <option value="2015"> 2015 </option>\n              <option value="2014"> 2014 </option>\n              <option value="2013"> 2013 </option>\n              <option value="2012"> 2012 </option>\n              <option value="2011"> 2011 </option>\n              <option value="2010"> 2010 </option>\n              <option value="2009"> 2009 </option>\n              <option value="2008"> 2008 </option>\n              <option value="2007"> 2007 </option>\n              <option value="2006"> 2006 </option>\n              <option value="2005"> 2005 </option>\n              <option value="2004"> 2004 </option>\n              <option value="2003"> 2003 </option>\n              <option value="2002"> 2002 </option>\n              <option value="2001"> 2001 </option>\n              <option value="2000"> 2000 </option>\n              <option value="1999"> 1999 </option>\n              <option value="1998"> 1998 </option>\n              <option value="1997"> 1997 </option>\n              <option value="1996"> 1996 </option>\n              <option value="1995"> 1995 </option>\n              <option value="1994"> 1994 </option>\n              <option value="1993"> 1993 </option>\n              <option value="1992"> 1992 </option>\n              <option value="1991"> 1991 </option>\n              <option value="1990"> 1990 </option>\n              <option value="1989"> 1989 </option>\n              <option value="1988"> 1988 </option>\n              <option value="1987"> 1987 </option>\n              <option value="1986"> 1986 </option>\n              <option value="1985"> 1985 </option>\n              <option value="1984"> 1984 </option>\n              <option value="1983"> 1983 </option>\n              <option value="1982"> 1982 </option>\n              <option value="1981"> 1981 </option>\n              <option value="1980"> 1980 </option>\n              <option value="1979"> 1979 </option>\n              <option value="1978"> 1978 </option>\n              <option value="1977"> 1977 </option>\n              <option value="1976"> 1976 </option>\n              <option value="1975"> 1975 </option>\n              <option value="1974"> 1974 </option>\n              <option value="1973"> 1973 </option>\n              <option value="1972"> 1972 </option>\n              <option value="1971"> 1971 </option>\n              <option value="1970"> 1970 </option>\n              <option value="1969"> 1969 </option>\n              <option value="1968"> 1968 </option>\n              <option value="1967"> 1967 </option>\n              <option value="1966"> 1966 </option>\n              <option value="1965"> 1965 </option>\n              <option value="1964"> 1964 </option>\n              <option value="1963"> 1963 </option>\n              <option value="1962"> 1962 </option>\n              <option value="1961"> 1961 </option>\n              <option value="1960"> 1960 </option>\n              <option value="1959"> 1959 </option>\n              <option value="1958"> 1958 </option>\n              <option value="1957"> 1957 </option>\n              <option value="1956"> 1956 </option>\n              <option value="1955"> 1955 </option>\n              <option value="1954"> 1954 </option>\n              <option value="1953"> 1953 </option>\n              <option value="1952"> 1952 </option>\n              <option value="1951"> 1951 </option>\n              <option value="1950"> 1950 </option>\n              <option value="1949"> 1949 </option>\n              <option value="1948"> 1948 </option>\n              <option value="1947"> 1947 </option>\n              <option value="1946"> 1946 </option>\n              <option value="1945"> 1945 </option>\n              <option value="1944"> 1944 </option>\n              <option value="1943"> 1943 </option>\n              <option value="1942"> 1942 </option>\n              <option value="1941"> 1941 </option>\n              <option value="1940"> 1940 </option>\n              <option value="1939"> 1939 </option>\n              <option value="1938"> 1938 </option>\n              <option value="1937"> 1937 </option>\n              <option value="1936"> 1936 </option>\n              <option value="1935"> 1935 </option>\n              <option value="1934"> 1934 </option>\n              <option value="1933"> 1933 </option>\n              <option value="1932"> 1932 </option>\n              <option value="1931"> 1931 </option>\n              <option value="1930"> 1930 </option>\n              <option value="1929"> 1929 </option>\n              <option value="1928"> 1928 </option>\n              <option value="1927"> 1927 </option>\n              <option value="1926"> 1926 </option>\n              <option value="1925"> 1925 </option>\n              <option value="1924"> 1924 </option>\n              <option value="1923"> 1923 </option>\n              <option value="1922"> 1922 </option>\n              <option value="1921"> 1921 </option>\n              <option value="1920"> 1920 </option>\n            </select>\n            <label class="form-sub-label" for="input_15_year" > Year </label></span>\n                    </div>\n                </li>\n                <li class="form-line" id="id_16">\n                    <label class="form-label-left" id="label_16"> Childs Full Name </label>\n                    <div id="cid_16" class="form-input"><span class="form-sub-label-container"><input class="form-textbox" type="text" size="10" name="q16_childsFull16[first]" id="first_16" />\n            <label class="form-sub-label" for="first_16" id="sublabel_first"> First Name </label></span><span class="form-sub-label-container"><input class="form-textbox" type="text" size="15" name="q16_childsFull16[last]" id="last_16" />\n            <label class="form-sub-label" for="last_16" id="sublabel_last"> Last Name </label></span>\n                    </div>\n                </li>\n                <li class="form-line" id="id_17">\n                    <label class="form-label-left" id="label_17" > Childs Birth Date </label>\n                    <div id="cid_17" class="form-input"><span class="form-sub-label-container"><select class="form-dropdown" name="q17_childsBirth17[month]" id="input_17_month">\n              <option>  </option>\n              <option value="January"> January </option>\n              <option value="February"> February </option>\n              <option value="March"> March </option>\n              <option value="April"> April </option>\n              <option value="May"> May </option>\n              <option value="June"> June </option>\n              <option value="July"> July </option>\n              <option value="August"> August </option>\n              <option value="September"> September </option>\n              <option value="October"> October </option>\n              <option value="November"> November </option>\n              <option value="December"> December </option>\n            </select>\n            <label class="form-sub-label" for="input_17_month" id="sublabel_month"> Month </label></span><span class="form-sub-label-container"><select class="form-dropdown" name="q17_childsBirth17[day]" id="input_17_day">\n              <option>  </option>\n              <option value="1"> 1 </option>\n              <option value="2"> 2 </option>\n              <option value="3"> 3 </option>\n              <option value="4"> 4 </option>\n              <option value="5"> 5 </option>\n              <option value="6"> 6 </option>\n              <option value="7"> 7 </option>\n              <option value="8"> 8 </option>\n              <option value="9"> 9 </option>\n              <option value="10"> 10 </option>\n              <option value="11"> 11 </option>\n              <option value="12"> 12 </option>\n              <option value="13"> 13 </option>\n              <option value="14"> 14 </option>\n              <option value="15"> 15 </option>\n              <option value="16"> 16 </option>\n              <option value="17"> 17 </option>\n              <option value="18"> 18 </option>\n              <option value="19"> 19 </option>\n              <option value="20"> 20 </option>\n              <option value="21"> 21 </option>\n              <option value="22"> 22 </option>\n              <option value="23"> 23 </option>\n              <option value="24"> 24 </option>\n              <option value="25"> 25 </option>\n              <option value="26"> 26 </option>\n              <option value="27"> 27 </option>\n              <option value="28"> 28 </option>\n              <option value="29"> 29 </option>\n              <option value="30"> 30 </option>\n              <option value="31"> 31 </option>\n            </select>\n            <label class="form-sub-label" for="input_17_day" id="sublabel_day"> Day </label></span><span class="form-sub-label-container"><select class="form-dropdown" name="q17_childsBirth17[year]" id="input_17_year">\n              <option>  </option>\n              <option value="2037"> 2037 </option>\n              <option value="2036"> 2036 </option>\n              <option value="2035"> 2035 </option>\n              <option value="2034"> 2034 </option>\n              <option value="2033"> 2033 </option>\n              <option value="2032"> 2032 </option>\n              <option value="2031"> 2031 </option>\n              <option value="2030"> 2030 </option>\n              <option value="2029"> 2029 </option>\n              <option value="2028"> 2028 </option>\n              <option value="2027"> 2027 </option>\n              <option value="2026"> 2026 </option>\n              <option value="2025"> 2025 </option>\n              <option value="2024"> 2024 </option>\n              <option value="2023"> 2023 </option>\n              <option value="2022"> 2022 </option>\n              <option value="2021"> 2021 </option>\n              <option value="2020"> 2020 </option>\n              <option value="2019"> 2019 </option>\n              <option value="2018"> 2018 </option>\n              <option value="2017"> 2017 </option>\n              <option value="2016"> 2016 </option>\n              <option value="2015"> 2015 </option>\n              <option value="2014"> 2014 </option>\n              <option value="2013"> 2013 </option>\n              <option value="2012"> 2012 </option>\n              <option value="2011"> 2011 </option>\n              <option value="2010"> 2010 </option>\n              <option value="2009"> 2009 </option>\n              <option value="2008"> 2008 </option>\n              <option value="2007"> 2007 </option>\n              <option value="2006"> 2006 </option>\n              <option value="2005"> 2005 </option>\n              <option value="2004"> 2004 </option>\n              <option value="2003"> 2003 </option>\n              <option value="2002"> 2002 </option>\n              <option value="2001"> 2001 </option>\n              <option value="2000"> 2000 </option>\n              <option value="1999"> 1999 </option>\n              <option value="1998"> 1998 </option>\n              <option value="1997"> 1997 </option>\n              <option value="1996"> 1996 </option>\n              <option value="1995"> 1995 </option>\n              <option value="1994"> 1994 </option>\n              <option value="1993"> 1993 </option>\n              <option value="1992"> 1992 </option>\n              <option value="1991"> 1991 </option>\n              <option value="1990"> 1990 </option>\n              <option value="1989"> 1989 </option>\n              <option value="1988"> 1988 </option>\n              <option value="1987"> 1987 </option>\n              <option value="1986"> 1986 </option>\n              <option value="1985"> 1985 </option>\n              <option value="1984"> 1984 </option>\n              <option value="1983"> 1983 </option>\n              <option value="1982"> 1982 </option>\n              <option value="1981"> 1981 </option>\n              <option value="1980"> 1980 </option>\n              <option value="1979"> 1979 </option>\n              <option value="1978"> 1978 </option>\n              <option value="1977"> 1977 </option>\n              <option value="1976"> 1976 </option>\n              <option value="1975"> 1975 </option>\n              <option value="1974"> 1974 </option>\n              <option value="1973"> 1973 </option>\n              <option value="1972"> 1972 </option>\n              <option value="1971"> 1971 </option>\n              <option value="1970"> 1970 </option>\n              <option value="1969"> 1969 </option>\n              <option value="1968"> 1968 </option>\n              <option value="1967"> 1967 </option>\n              <option value="1966"> 1966 </option>\n              <option value="1965"> 1965 </option>\n              <option value="1964"> 1964 </option>\n              <option value="1963"> 1963 </option>\n              <option value="1962"> 1962 </option>\n              <option value="1961"> 1961 </option>\n              <option value="1960"> 1960 </option>\n              <option value="1959"> 1959 </option>\n              <option value="1958"> 1958 </option>\n              <option value="1957"> 1957 </option>\n              <option value="1956"> 1956 </option>\n              <option value="1955"> 1955 </option>\n              <option value="1954"> 1954 </option>\n              <option value="1953"> 1953 </option>\n              <option value="1952"> 1952 </option>\n              <option value="1951"> 1951 </option>\n              <option value="1950"> 1950 </option>\n              <option value="1949"> 1949 </option>\n              <option value="1948"> 1948 </option>\n              <option value="1947"> 1947 </option>\n              <option value="1946"> 1946 </option>\n              <option value="1945"> 1945 </option>\n              <option value="1944"> 1944 </option>\n              <option value="1943"> 1943 </option>\n              <option value="1942"> 1942 </option>\n              <option value="1941"> 1941 </option>\n              <option value="1940"> 1940 </option>\n              <option value="1939"> 1939 </option>\n              <option value="1938"> 1938 </option>\n              <option value="1937"> 1937 </option>\n              <option value="1936"> 1936 </option>\n              <option value="1935"> 1935 </option>\n              <option value="1934"> 1934 </option>\n              <option value="1933"> 1933 </option>\n              <option value="1932"> 1932 </option>\n              <option value="1931"> 1931 </option>\n              <option value="1930"> 1930 </option>\n              <option value="1929"> 1929 </option>\n              <option value="1928"> 1928 </option>\n              <option value="1927"> 1927 </option>\n              <option value="1926"> 1926 </option>\n              <option value="1925"> 1925 </option>\n              <option value="1924"> 1924 </option>\n              <option value="1923"> 1923 </option>\n              <option value="1922"> 1922 </option>\n              <option value="1921"> 1921 </option>\n              <option value="1920"> 1920 </option>\n            </select>\n            <label class="form-sub-label" for="input_17_year" id="sublabel_year"> Year </label></span>\n                    </div>\n                </li>\n                <li class="form-line" id="id_18">\n                    <label class="form-label-top" id="label_18 "> I am a... </label>\n                    <div id="cid_18" class="form-input-wide">\n                        <div class="form-single-column"><span class="form-radio-item" style="clear:left;"><input type="radio" class="form-radio" id="input_18_0" name="q18_iAm" value="First time guest" />\n              <label for="input_18_0"> First time guest </label></span><span class="clearfix"></span><span class="form-radio-item" style="clear:left;"><input type="radio" class="form-radio" id="input_18_1" name="q18_iAm" value="Second time guest" />\n              <label for="input_18_1"> Second time guest </label></span><span class="clearfix"></span><span class="form-radio-item" style="clear:left;"><input type="radio" class="form-radio" id="input_18_2" name="q18_iAm" value="Regular attender" />\n              <label for="input_18_2"> Regular attender </label></span><span class="clearfix"></span>\n                        </div>\n                    </div>\n                </li>\n                <li class="form-line" id="id_19">\n                    <label class="form-label-top" id="label_19" > I am interested in... </label>\n                    <div id="cid_19" class="form-input-wide">\n                        <div class="form-single-column"><span class="form-radio-item" style="clear:left;"><input type="radio" class="form-radio" id="input_19_0" name="q19_iAm19" value="Beginning a relationship with Jesus" />\n              <label for="input_19_0"> Beginning a relationship with Jesus </label></span><span class="clearfix"></span><span class="form-radio-item" style="clear:left;"><input type="radio" class="form-radio" id="input_19_1" name="q19_iAm19" value="Information on baptisim" />\n              <label for="input_19_1"> Information on baptisim </label></span><span class="clearfix"></span><span class="form-radio-item" style="clear:left;"><input type="radio" class="form-radio" id="input_19_2" name="q19_iAm19" value="Information on church membership" />\n              <label for="input_19_2"> Information on church membership </label></span><span class="clearfix"></span><span class="form-radio-item" style="clear:left;"><input type="radio" class="form-radio" id="input_19_3" name="q19_iAm19" value="Scheduling a meeting with a staff member" />\n              <label for="input_19_3"> Scheduling a meeting with a staff member </label></span><span class="clearfix"></span>\n                        </div>\n                    </div>\n                </li>\n                <li class="form-line" id="id_20">\n                    <label class="form-label-top" id="label_20" > Please enroll me in... </label>\n                    <div id="cid_20" class="form-input-wide">\n                        <div class="form-single-column"><span class="form-radio-item" style="clear:left;"><input type="radio" class="form-radio" id="input_20_0" name="q20_pleaseEnroll" value="A Sunday morning Bible study group" />\n              <label for="input_20_0"> A Sunday morning Bible study group </label></span><span class="clearfix"></span>\n                        </div>\n                    </div>\n                </li>\n                <li class="form-line" id="id_21">\n                    <label class="form-label-top" id="label_21" for="input_21"> How did you hear about STBC? (flyer, newspaper, postcard, name of person who invited you </label>\n                    <div id="cid_21" class="form-input-wide">\n                        <textarea id="input_21" class="inputWidth form-textarea" name="q21_howDid" cols="40" rows="6"></textarea>\n                    </div>\n                </li>\n                <li class="form-line" id="id_22">\n                    <label class="form-label-top" id="label_22" for="input_22"> Prayer requests / My response to the message </label>\n                    <div id="cid_22" class="form-input-wide">\n                        <textarea id="input_22" class="inputWidth form-textarea" name="q22_prayerRequests" cols="40" rows="6"></textarea>\n                    </div>\n                </li>\n                <li class="form-line" id="id_2">\n                    <div id="cid_2" class="form-input-wide">\n                        <div style="margin-left:129px" class="form-buttons-wrapper">\n                            <button id="input_2" type="submit" class="form-submit-button">\n                                Submit\n                            </button>\n                        </div>\n                    </div>\n                </li>\n                <li style="display:none">\n                    Should be Empty:\n                    <input type="text" name="website" value="" />\n                </li>\n            </ul>\n        </div>\n        <input type="hidden" id="simple_spc" name="simple_spc" value="32461093349859" />\n        <script type="text/javascript">\n            document.getElementById("si" + "mple" + "_spc").value = "32461093349859-32461093349859";\n        </script>\n\n\n    </form>\n\n    </div>\n    </div>\n\n\n\n\n\n</ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'/*ion-inline-end:"/home/ubc-21/Documents/testnew/Second/src/pages/connect/connect_card.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], ConnectCard);

//# sourceMappingURL=connect_card.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WatchLivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the WatchLivePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var WatchLivePage = (function () {
    function WatchLivePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WatchLivePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WatchLivePage');
    };
    return WatchLivePage;
}());
WatchLivePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-watch-live',template:/*ion-inline-start:"/home/ubc-21/Documents/testnew/Second/src/pages/watch-live/watch-live.html"*/'<!--\n  Generated template for the WatchLivePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>watchLive</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/ubc-21/Documents/testnew/Second/src/pages/watch-live/watch-live.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], WatchLivePage);

//# sourceMappingURL=watch-live.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_more_more__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_service_times_service_times__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_watch_live_watch_live__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_thisWeek_thisWeek__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_devotionals_devotional__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_bible_bible__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_bibleResources_bibleResources__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_contact_contact__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_getinvolved_getInvolved__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_connect_connect_card__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_newsletter_newsLetter__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_bible_bible__["a" /* BiblePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_more_more__["a" /* MorePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_service_times_service_times__["a" /* ServiceTimesPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_watch_live_watch_live__["a" /* WatchLivePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_thisWeek_thisWeek__["a" /* ThisWeek */],
            __WEBPACK_IMPORTED_MODULE_13__pages_devotionals_devotional__["a" /* Devotional */],
            __WEBPACK_IMPORTED_MODULE_15__pages_bibleResources_bibleResources__["a" /* BibleResources */],
            __WEBPACK_IMPORTED_MODULE_16__pages_contact_contact__["a" /* Contact */],
            __WEBPACK_IMPORTED_MODULE_17__pages_getinvolved_getInvolved__["a" /* GetInvolved */],
            __WEBPACK_IMPORTED_MODULE_18__pages_connect_connect_card__["a" /* ConnectCard */], __WEBPACK_IMPORTED_MODULE_19__pages_newsletter_newsLetter__["a" /* NewsLetter */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], { tabsPlacement: 'bottom' }, {
                links: [
                    { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/archive/archive.module#ArchivePageModule', name: 'ArchivePage', segment: 'archive', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/bible/bible.module#BiblePageModule', name: 'BiblePage', segment: 'bible', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/bibleResources/bibleResources.module#BibleResourcesPageModule', name: 'BibleResources', segment: 'bibleResources', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'Contact', segment: 'contact', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/devotionals/devotional.module#DevotionalPageModule', name: 'Devotional', segment: 'devotional', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/getinvolved/getInvolved.module#GetInvolvedPageModule', name: 'GetInvolved', segment: 'getInvolved', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/more/more.module#MorePageModule', name: 'MorePage', segment: 'more', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/podcasts/podcasts.module#PodcastsPageModule', name: 'PodcastsPage', segment: 'podcasts', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/service-times/service-times.module#ServiceTimesPageModule', name: 'ServiceTimesPage', segment: 'service-times', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sunday/sunday.module#SundayPageModule', name: 'SundayPage', segment: 'sunday', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/thisWeek/thisWeek.module#ThisWeekPageModule', name: 'ThisWeek', segment: 'thisWeek', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/watch-live/watch-live.module#WatchLivePageModule', name: 'WatchLivePage', segment: 'watch-live', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_bible_bible__["a" /* BiblePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_more_more__["a" /* MorePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_service_times_service_times__["a" /* ServiceTimesPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_watch_live_watch_live__["a" /* WatchLivePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_thisWeek_thisWeek__["a" /* ThisWeek */],
            __WEBPACK_IMPORTED_MODULE_13__pages_devotionals_devotional__["a" /* Devotional */],
            __WEBPACK_IMPORTED_MODULE_15__pages_bibleResources_bibleResources__["a" /* BibleResources */],
            __WEBPACK_IMPORTED_MODULE_16__pages_contact_contact__["a" /* Contact */],
            __WEBPACK_IMPORTED_MODULE_17__pages_getinvolved_getInvolved__["a" /* GetInvolved */],
            __WEBPACK_IMPORTED_MODULE_18__pages_connect_connect_card__["a" /* ConnectCard */],
            __WEBPACK_IMPORTED_MODULE_19__pages_newsletter_newsLetter__["a" /* NewsLetter */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, keyboard, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            /*setTimeout(() => {
                splashScreen.hide();
            }, 100);*/
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/ubc-21/Documents/testnew/Second/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/ubc-21/Documents/testnew/Second/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map
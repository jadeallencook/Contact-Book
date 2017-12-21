webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"nav-md\">\n  <div class=\"container body\">\n    <!-- logged in -->\n    <div class=\"main_container\" *ngIf=\"user\">\n      <!-- navbar -->\n      <app-navbar></app-navbar>\n      <!-- page content -->\n      <div class=\"right_col\" role=\"main\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n    <!-- logged out -->\n    <div class=\"main_container\" *ngIf=\"!user\">\n      <app-login-form></app-login-form>\n    </div>\n  </div>\n  <!-- js -->\n  <app-js-includes></app-js-includes>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().onAuthStateChanged(function () {
            _this.user = __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser;
        });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_view_contacts_view_contacts_component__ = __webpack_require__("../../../../../src/app/pages/view-contacts/view-contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_single_contact_single_contact_component__ = __webpack_require__("../../../../../src/app/pages/single-contact/single-contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_add_contact_add_contact_component__ = __webpack_require__("../../../../../src/app/pages/add-contact/add-contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_js_includes_js_includes_component__ = __webpack_require__("../../../../../src/app/components/js-includes/js-includes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_login_form_login_form_component__ = __webpack_require__("../../../../../src/app/components/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_favorites_favorites_component__ = __webpack_require__("../../../../../src/app/pages/favorites/favorites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile_component__ = __webpack_require__("../../../../../src/app/pages/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// dependencies






// components










// firebase config 
var firebaseConfig = {
    apiKey: "AIzaSyDMDOkWoShlAL5n1wDGXq1WKqj9t6mWUsQ",
    authDomain: "contact-book-demo.firebaseapp.com",
    databaseURL: "https://contact-book-demo.firebaseio.com",
    projectId: "contact-book-demo",
    storageBucket: "",
    messagingSenderId: "932536432038"
};
// routes for ng router
var routes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_8__pages_home_home_component__["a" /* HomeComponent */]
    }, {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_8__pages_home_home_component__["a" /* HomeComponent */]
    }, {
        path: 'view/:uid',
        component: __WEBPACK_IMPORTED_MODULE_10__pages_single_contact_single_contact_component__["a" /* SingleContactComponent */]
    }, {
        path: 'favorites',
        component: __WEBPACK_IMPORTED_MODULE_14__pages_favorites_favorites_component__["a" /* FavoritesComponent */]
    }, {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile_component__["a" /* ProfileComponent */]
    }, {
        path: 'contacts',
        component: __WEBPACK_IMPORTED_MODULE_9__pages_view_contacts_view_contacts_component__["a" /* ViewContactsComponent */]
    }, {
        path: 'add',
        component: __WEBPACK_IMPORTED_MODULE_11__pages_add_contact_add_contact_component__["a" /* AddContactComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
        this.user = 'test';
        // init firebase
        __WEBPACK_IMPORTED_MODULE_4_firebase__["initializeApp"](firebaseConfig);
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_view_contacts_view_contacts_component__["a" /* ViewContactsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_single_contact_single_contact_component__["a" /* SingleContactComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_add_contact_add_contact_component__["a" /* AddContactComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_js_includes_js_includes_component__["a" /* JsIncludesComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_login_form_login_form_component__["a" /* LoginFormComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_favorites_favorites_component__["a" /* FavoritesComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile_component__["a" /* ProfileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_common__["a" /* APP_BASE_HREF */],
                    useValue: '#/'
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/js-includes/js-includes.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- etc -->\n<script src=\"assets/vendors/jquery/dist/jquery.min.js\"></script>\n<script src=\"assets/vendors/bootstrap/dist/js/bootstrap.min.js\"></script>\n<script src=\"assets/vendors/fastclick/lib/fastclick.js\"></script>\n<script src=\"assets/vendors/nprogress/nprogress.js\"></script>\n<script src=\"assets/vendors/Chart.js/dist/Chart.min.js\"></script>\n<script src=\"assets/vendors/gauge.js/dist/gauge.min.js\"></script>\n<script src=\"assets/vendors/bootstrap-progressbar/bootstrap-progressbar.min.js\"></script>\n<script src=\"assets/vendors/iCheck/icheck.min.js\"></script>\n<script src=\"assets/vendors/skycons/skycons.js\"></script>\n<script src=\"assets/vendors/Flot/jquery.flot.js\"></script>\n<script src=\"assets/vendors/Flot/jquery.flot.pie.js\"></script>\n<script src=\"assets/vendors/Flot/jquery.flot.time.js\"></script>\n<script src=\"assets/vendors/Flot/jquery.flot.stack.js\"></script>\n<script src=\"assets/vendors/Flot/jquery.flot.resize.js\"></script>\n<script src=\"assets/vendors/flot.orderbars/js/jquery.flot.orderBars.js\"></script>\n<script src=\"assets/vendors/flot-spline/js/jquery.flot.spline.min.js\"></script>\n<script src=\"assets/vendors/flot.curvedlines/curvedLines.js\"></script>\n<script src=\"assets/vendors/DateJS/build/date.js\"></script>\n<script src=\"assets/vendors/jqvmap/dist/jquery.vmap.js\"></script>\n<script src=\"assets/vendors/jqvmap/dist/maps/jquery.vmap.world.js\"></script>\n<script src=\"assets/vendors/jqvmap/examples/js/jquery.vmap.sampledata.js\"></script>\n<script src=\"assets/vendors/moment/min/moment.min.js\"></script>\n<script src=\"assets/vendors/bootstrap-daterangepicker/daterangepicker.js\"></script>\n<script src=\"assets/build/js/custom.min.js\"></script>\n"

/***/ }),

/***/ "../../../../../src/app/components/js-includes/js-includes.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/js-includes/js-includes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsIncludesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JsIncludesComponent = (function () {
    function JsIncludesComponent() {
    }
    JsIncludesComponent.prototype.ngOnInit = function () {
    };
    JsIncludesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-js-includes',
            template: __webpack_require__("../../../../../src/app/components/js-includes/js-includes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/js-includes/js-includes.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], JsIncludesComponent);
    return JsIncludesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login_wrapper\">\n  <div class=\"animate form login_form\">\n    <section class=\"login_content\">\n      <form>\n        <h1>Login Form</h1>\n        <div>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\" />\n        </div>\n        <div>\n          <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone: true}\" />\n        </div>\n        <p class=\"error-msg\" *ngIf=\"error.length > 0\">{{ error }}</p>\n        <button class=\"btn btn-primary\" (click)=\"login()\">Log in</button>\n        <button class=\"btn btn-default\" (click)=\"create()\">Create Account</button>\n        <br /><br />\n        <div>\n          <p>© 2018 All Rights Reserved</p>\n        </div>\n      </form>\n    </section>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login-form/login-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.login-panel {\n  margin: 25px auto;\n  padding: 25px;\n  background-color: #eee;\n  width: 500px;\n  text-align: center; }\n  div.login-panel h1 {\n    margin-bottom: 25px; }\n  div.login-panel div.btn-container {\n    text-align: right; }\n\np.error-msg {\n  color: red;\n  margin-bottom: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_profile__ = __webpack_require__("../../../../../src/app/models/profile.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginFormComponent = (function () {
    function LoginFormComponent() {
        this.email = '';
        this.password = '';
        this.error = '';
    }
    LoginFormComponent.prototype.login = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().signInWithEmailAndPassword(this.email, this.password).catch(function (msg) {
            msg = msg.message;
            _this.error = msg;
        });
    };
    LoginFormComponent.prototype.create = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().createUserWithEmailAndPassword(this.email, this.password).then(function () {
            var profile = new __WEBPACK_IMPORTED_MODULE_2__models_profile__["a" /* Profile */]();
            profile.email = __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser.email;
            profile.uid = __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser.uid;
            __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('profiles/' + profile.uid).set(profile);
        }).catch(function (msg) {
            msg = msg.message;
            _this.error = msg;
        });
    };
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login-form',
            template: __webpack_require__("../../../../../src/app/components/login-form/login-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login-form/login-form.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-3 left_col\">\n  <div class=\"left_col scroll-view\">\n    <div class=\"navbar nav_title\" style=\"border: 0;\" routerLink=\"home\">\n      <a class=\"site_title\">\n        <i class=\"fa fa-phone\"></i>\n        <span>Contact Book</span>\n      </a>\n    </div>\n    <div class=\"clearfix\"></div>\n    <!-- menu profile -->\n    <div class=\"profile clearfix\" routerLink=\"profile\">\n      <div class=\"profile_pic\">\n        <img src=\"assets/images/default-user.png\" alt=\"...\" class=\"img-circle profile_img\">\n      </div>\n      <div class=\"profile_info\">\n        <span>Hello,</span>\n        <h2>{{ user }}</h2>\n      </div>\n    </div>\n    <br />\n    <!-- sidebar menu -->\n    <div id=\"sidebar-menu\" class=\"main_menu_side hidden-print main_menu\">\n      <div class=\"menu_section\">\n        <h3>General</h3>\n        <ul class=\"nav side-menu\">\n          <li>\n            <a routerLink=\"home\">\n              <i class=\"fa fa-home\"></i> Home\n            </a>\n          </li>\n          <li>\n            <a routerLink=\"favorites\">\n              <i class=\"fa fa-star\"></i> Favorites\n            </a>\n          </li>\n          <li>\n            <a routerLink=\"contacts\">\n              <i class=\"fa fa-table\"></i> Find Person\n            </a>\n          </li>\n          <li>\n            <a routerLink=\"add\">\n              <i class=\"fa fa-plus\"></i> Add Contact\n            </a>\n          </li>\n        </ul>\n        <br />\n        <h3>Account</h3>\n        <ul class=\"nav side-menu\"><li>\n            <a routerLink=\"profile\">\n              <i class=\"fa fa-user\"></i> Profile\n            </a>\n          </li><li>\n            <a (click)=\"logout()\">\n              <i class=\"fa fa-lock\"></i> Log Out\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent() {
        this.user = 'loading...';
        this.user = __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser.email.replace('@deseretnews.com', '');
    }
    NavbarComponent.prototype.logout = function () {
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().signOut();
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/contact.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
var Contact = (function () {
    function Contact() {
        this.name = '';
        this.email = '';
        this.phone = null;
        this.zipcode = null;
        this.category = '';
        this.notes = [];
        this.owner = '';
        this.added = new Date().toDateString();
    }
    return Contact;
}());



/***/ }),

/***/ "../../../../../src/app/models/profile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
var Profile = (function () {
    function Profile() {
        this.name = '';
        this.email = '';
        this.phone = null;
        this.notes = [];
        this.category = '';
        this.added = new Date().toDateString();
        this.favorites = [];
        this.uid = '';
    }
    return Profile;
}());



/***/ }),

/***/ "../../../../../src/app/pages/add-contact/add-contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"x_panel\">\n  <h1>Add Contact</h1>\n  <div class=\"x_content\">\n    <div class=\"col-md-6 col-sm-6 col-xs-12 form-group has-feedback\">\n      <input type=\"text\" class=\"form-control has-feedback-left\" id=\"inputSuccess2\" placeholder=\"Full Name\" [(ngModel)]=\"contact.name\">\n      <span class=\"fa fa-user form-control-feedback left\" aria-hidden=\"true\"></span>\n    </div>\n    <div class=\"col-md-6 col-sm-6 col-xs-12 form-group has-feedback\">\n      <input type=\"text\" class=\"form-control\" id=\"inputSuccess3\" placeholder=\"Zipcode\" [(ngModel)]=\"contact.zipcode\">\n      <span class=\"fa fa-compass form-control-feedback right\" aria-hidden=\"true\"></span>\n    </div>\n    <div class=\"col-md-6 col-sm-6 col-xs-12 form-group has-feedback\">\n      <input type=\"text\" class=\"form-control has-feedback-left\" id=\"inputSuccess4\" placeholder=\"Email\" [(ngModel)]=\"contact.email\">\n      <span class=\"fa fa-envelope form-control-feedback left\" aria-hidden=\"true\"></span>\n    </div>\n    <div class=\"col-md-6 col-sm-6 col-xs-12 form-group has-feedback\">\n      <input type=\"text\" class=\"form-control\" id=\"inputSuccess5\" placeholder=\"Phone\" [(ngModel)]=\"contact.phone\">\n      <span class=\"fa fa-phone form-control-feedback right\" aria-hidden=\"true\"></span>\n    </div>\n    <label for=\"heard\">Category :</label>\n    <select id=\"heard\" class=\"form-control\" required=\"\" [(ngModel)]=\"contact.category\">\n      <option value=\"\">Choose..</option>\n      <option value=\"press\">Press</option>\n      <option value=\"government\">Government</option>\n      <option value=\"education\">Education</option>\n      <option value=\"citizen\">Citizen</option>\n    </select>\n    <br />\n    <label for=\"message\">Additional Notes :</label>\n    <textarea id=\"message\" required=\"required\" class=\"form-control\" name=\"message\" data-parsley-trigger=\"keyup\" data-parsley-minlength=\"20\"\n      data-parsley-maxlength=\"100\" data-parsley-minlength-message=\"Come on! You need to enter at least a 20 caracters long comment..\"\n      data-parsley-validation-threshold=\"10\" [(ngModel)]=\"contact.notes[0]\">\n    </textarea>\n    <br />\n    <span class=\"btn btn-primary\" (click)=\"add()\">Submit</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/add-contact/add-contact.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.x_panel {\n  max-width: 500px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/add-contact/add-contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_contact__ = __webpack_require__("../../../../../src/app/models/contact.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddContactComponent = (function () {
    function AddContactComponent() {
        this.contact = new __WEBPACK_IMPORTED_MODULE_1__models_contact__["a" /* Contact */];
    }
    AddContactComponent.prototype.add = function () {
        var _this = this;
        // update contact info
        this.contact.owner = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.email;
        // cache note
        var note = '';
        if (!this.contact.notes[0])
            note = 'Customer was added ' + new Date().toDateString() + ' by ' + this.contact.owner;
        else
            note = this.contact.notes[0];
        note = {
            date: new Date().toDateString(),
            msg: note,
            owner: this.contact.owner
        };
        this.contact.notes = [];
        // push contact to firebase
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref().child('contacts').push(this.contact).then(function (event) {
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref().child('contacts/' + event.key + '/notes').push(note).then(function () {
                _this.contact = new __WEBPACK_IMPORTED_MODULE_1__models_contact__["a" /* Contact */];
            });
        });
    };
    AddContactComponent.prototype.ngOnInit = function () {
    };
    AddContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-contact',
            template: __webpack_require__("../../../../../src/app/pages/add-contact/add-contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/add-contact/add-contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddContactComponent);
    return AddContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/favorites/favorites.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"x_panel\">\n\n      <!-- header -->\n      <h1>Favorites</h1>\n\n      <!-- profile container -->\n      <div class=\"x_content\">\n        <div class=\"row\">\n\n          <!-- profile -->\n          <div class=\"col-md-4 col-sm-4 col-xs-12 profile_details\" *ngFor=\"let contact of favorites\">\n            <div class=\"well profile_view\">\n              <div class=\"col-sm-12\" routerLink=\"/view/{{ contact.uid }}\">\n                <div class=\"col-xs-12\">\n                  <h2>{{ contact.name }}</h2>\n                  <br />\n                  <p class=\"last-note\">\n                    <strong>Last Note: </strong> {{ contact.lastNote }}\n                  </p>\n                  <br />\n                  <ul class=\"list-unstyled\">\n                    <li *ngIf=\"contact.zipcode\">\n                      <i class=\"fa fa-building\"></i> Zipcode: {{ contact.zipcode }}</li>\n                    <li *ngIf=\"contact.phone\">\n                      <i class=\"fa fa-phone\"></i> Phone: {{ formatPhoneNumber(contact.phone) }}</li>\n                    <li *ngIf=\"!contact.phone\">\n                      <i class=\"fa fa-phone\"></i> Phone: N/A</li>\n                  </ul>\n                  <br />\n                </div>\n              </div>\n              <div class=\"col-xs-12 bottom text-center\">\n                <div class=\"col-xs-12 col-sm-6 emphasis\">\n                  <a type=\"button\" class=\"btn btn-success btn-xs\" href=\"mailto:{{ contact.email }}\" *ngIf=\"contact.email\">\n                    <i class=\"fa fa-comments-o\"></i> Send Email\n                  </a>\n                </div>\n                <div class=\"col-xs-12 col-sm-6 emphasis\">\n                  <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"removeFromFavorites(contact.uid)\">\n                    <i class=\"fa fa-heart\"> </i> Remove\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/favorites/favorites.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p.last-note {\n  height: 80px;\n  overflow-x: scroll; }\n\ndiv.profile_view div div h2 {\n  margin-top: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/favorites/favorites.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FavoritesComponent = (function () {
    function FavoritesComponent() {
        var _this = this;
        this.favorites = [];
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('profiles/' + __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser.uid + '/favorites').on('value', function (snapshot) {
            _this.favorites = [];
            if (snapshot.val()) {
                snapshot.val().map(function (key) {
                    __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('contacts/' + key).once('value').then(function (contact) {
                        contact = contact.val();
                        var notes = Object.keys(contact.notes);
                        contact.lastNote = contact.notes[notes[notes.length - 1]].msg;
                        contact.uid = key;
                        _this.favorites.push(contact);
                    });
                });
            }
        });
    }
    FavoritesComponent.prototype.removeFromFavorites = function (uid) {
        var favRef = 'profiles/' + __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser.uid + '/favorites';
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref(favRef).once('value').then(function (snapshot) {
            var favorites = snapshot.val();
            favorites.splice(favorites.indexOf(uid), 1);
            __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref(favRef).set(favorites);
        });
    };
    FavoritesComponent.prototype.formatPhoneNumber = function (num) {
        var s2 = ("" + num).replace(/\D/g, '');
        var m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
        return (!m) ? null : "(" + m[1] + ") " + m[2] + "-" + m[3];
    };
    FavoritesComponent.prototype.ngOnInit = function () {
    };
    FavoritesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-favorites',
            template: __webpack_require__("../../../../../src/app/pages/favorites/favorites.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/favorites/favorites.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FavoritesComponent);
    return FavoritesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"x_panel\">\n\n      <h1>Dashboard</h1>\n\n      <div class=\"row tile_count\">\n        <div class=\"col-md-2 col-sm-4 col-xs-6 tile_stats_count\">\n          <span class=\"count_top\">\n            <i class=\"fa fa-user\"></i> Total</span>\n          <div class=\"count\">1,254</div>\n          <span class=\"count_bottom\">\n            <i class=\"green\">+43 </i> Last Week</span>\n        </div>\n        <div class=\"col-md-2 col-sm-4 col-xs-6 tile_stats_count\">\n          <span class=\"count_top\">\n            <i class=\"fa fa-compass\"></i> Utah</span>\n          <div class=\"count\">756</div>\n          <span class=\"count_bottom\">\n            <i class=\"green\">+17 </i> Last Week</span>\n        </div>\n        <div class=\"col-md-2 col-sm-4 col-xs-6 tile_stats_count\">\n          <span class=\"count_top\">\n            <i class=\"fa fa-compass\"></i> Salt Lake</span>\n          <div class=\"count green\">489</div>\n          <span class=\"count_bottom\">\n            <i class=\"green\">+2 </i> Last Week</span>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/pages/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Update Profile</h1>\n\n<p>This is the page you can update your profile on!</p>"

/***/ }),

/***/ "../../../../../src/app/pages/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/pages/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/single-contact/single-contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"x_panel\">\n      <div class=\"x_content\">\n        <div class=\"col-md-3 col-sm-3 col-xs-12 profile_left\">\n          <h3>{{ contact.name }}</h3>\n          <ul class=\"list-unstyled user_data\">\n            <li>\n              <i class=\"fa fa-map-marker user-profile-icon\"></i> {{ contact.zipcode }}\n            </li>\n            <li>\n              <i class=\"fa fa-briefcase user-profile-icon\"></i> {{ contact.category }}\n            </li>\n            <li>\n              <i class=\"fa fa-phone user-profile-icon\"></i> {{ contact.phone }}\n            </li>\n            <li class=\"m-top-xs\">\n              <i class=\"fa fa-envelope user-profile-icon\"></i>\n              <a href=\"mailto:{{ contact.email }}\" target=\"_blank\">{{ contact.email }}</a>\n            </li>\n          </ul>\n          <a class=\"btn btn-success\">\n            <i class=\"fa fa-edit m-right-xs\"></i>Edit Profile</a>\n          <br>\n        </div>\n        <div class=\"col-md-9 col-sm-9 col-xs-12\">\n          <div class=\"profile_title\">\n            <div class=\"col-md-12\">\n              <h2>Notes</h2>\n            </div>\n          </div>\n          <div class=\"\" role=\"tabpanel\" data-example-id=\"togglable-tabs\">\n            <div id=\"myTabContent\" class=\"tab-content\">\n              <div role=\"tabpanel\" class=\"tab-pane fade active in\" id=\"tab_content1\" aria-labelledby=\"home-tab\">\n                <!-- start recent activity -->\n                <ul class=\"messages\">\n                  <li *ngFor=\"let note of contact.notes.reverse()\">\n                    <div class=\"message_date\">\n                      <p class=\"month\">{{ note.date }}</p>\n                    </div>\n                    <div class=\"message_wrapper\">\n                      <h4 class=\"heading\">{{ note.owner }}</h4>\n                      <blockquote class=\"message\">{{ note.msg }}</blockquote>\n                      <br />\n                    </div>\n                  </li>\n                </ul>\n                <!-- end recent activity -->\n              </div>\n            </div>\n          </div>\n          <textarea class=\"form-control\" placeholder=\"Write a note...\" [(ngModel)]=\"note\"></textarea>\n          <br />\n          <button class=\"btn btn-primary\" (click)=\"addNote()\">Submit Note</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/single-contact/single-contact.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/single-contact/single-contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_contact__ = __webpack_require__("../../../../../src/app/models/contact.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SingleContactComponent = (function () {
    function SingleContactComponent(route) {
        var _this = this;
        this.route = route;
        this.contact = new __WEBPACK_IMPORTED_MODULE_2__models_contact__["a" /* Contact */]();
        this.note = '';
        this.uid = '';
        this.route.params.subscribe(function (params) {
            _this.uid = params['uid'];
            __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('contacts/' + _this.uid).on('value', function (snapshot) {
                var contact = snapshot.val();
                _this.contact.name = contact.name;
                _this.contact.email = contact.email;
                _this.contact.zipcode = contact.zipcode;
                _this.contact.category = contact.category;
                _this.contact.phone = _this.formatPhoneNumber(contact.phone);
                _this.contact.notes = Object.keys(contact.notes).map(function (key) {
                    return contact.notes[key];
                });
            });
        });
    }
    SingleContactComponent.prototype.addNote = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('contacts/' + this.uid + '/notes').push({
            msg: this.note,
            owner: __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser.email,
            date: new Date().toDateString()
        }).then(function () {
            _this.note = '';
        });
    };
    SingleContactComponent.prototype.formatPhoneNumber = function (num) {
        var s2 = ("" + num).replace(/\D/g, '');
        var m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
        return (!m) ? null : "(" + m[1] + ") " + m[2] + "-" + m[3];
    };
    SingleContactComponent.prototype.ngOnInit = function () {
    };
    SingleContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-single-contact',
            template: __webpack_require__("../../../../../src/app/pages/single-contact/single-contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/single-contact/single-contact.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], SingleContactComponent);
    return SingleContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/view-contacts/view-contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"x_panel\">\n\n      <!-- header -->\n      <h1>Contacts</h1>\n\n      <!-- profile container -->\n      <div class=\"x_content\">\n        <div class=\"row\">\n\n          <!-- profile -->\n          <div class=\"col-md-4 col-sm-4 col-xs-12 profile_details\" *ngFor=\"let contact of contacts\">\n            <div class=\"well profile_view\">\n              <div class=\"col-sm-12\" routerLink=\"/view/{{ contact.uid }}\">\n                <div class=\"col-xs-12\">\n                  <h2>{{ contact.name }}</h2>\n                  <br />\n                  <p class=\"last-note\">\n                    <strong>Last Note: </strong> {{ contact.latestNote }}\n                  </p>\n                  <br />\n                  <ul class=\"list-unstyled\">\n                    <li *ngIf=\"contact.zipcode\">\n                      <i class=\"fa fa-building\"></i> Zipcode: {{ contact.zipcode }}</li>\n                    <li *ngIf=\"contact.phone\">\n                      <i class=\"fa fa-phone\"></i> Phone: {{ formatPhoneNumber(contact.phone) }}</li>\n                    <li *ngIf=\"!contact.phone\">\n                      <i class=\"fa fa-phone\"></i> Phone: N/A</li>\n                  </ul>\n                  <br />\n                </div>\n              </div>\n              <div class=\"col-xs-12 bottom text-center\">\n                <div class=\"col-xs-12 col-sm-6 emphasis\">\n                  <a type=\"button\" class=\"btn btn-success btn-xs\" href=\"mailto:{{ contact.email }}\" *ngIf=\"contact.email\">\n                    <i class=\"fa fa-comments-o\"></i> Send Email\n                  </a>\n                </div>\n                <div class=\"col-xs-12 col-sm-6 emphasis\">\n                  <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"addToFavorites(contact.uid)\">\n                    <i class=\"fa fa-heart\"> </i> Favorites\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/view-contacts/view-contacts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p.last-note {\n  height: 80px;\n  overflow-x: scroll; }\n\ndiv.profile_view div div h2 {\n  margin-top: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/view-contacts/view-contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewContactsComponent = (function () {
    function ViewContactsComponent() {
        var _this = this;
        // get all contacts from firebase
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('contacts/').on('value', function (snapshot) {
            // convert {} into []
            _this.contacts = snapshot.val();
            _this.contacts = Object.keys(_this.contacts).map(function (key) {
                var contact = _this.contacts[key];
                contact.uid = key;
                contact.latestNote = contact.notes[Object.keys(contact.notes).reverse()[0]].msg;
                return contact;
            });
        });
    }
    ViewContactsComponent.prototype.addToFavorites = function (uid) {
        var favRef = 'profiles/' + __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().currentUser.uid + '/favorites';
        __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref(favRef).once('value').then(function (snapshot) {
            var favorites = [];
            if (snapshot.val())
                favorites = snapshot.val();
            if (favorites.indexOf(uid) === -1)
                favorites.push(uid);
            else
                favorites.splice(favorites.indexOf(uid), 1);
            __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref(favRef).set(favorites);
        });
    };
    ViewContactsComponent.prototype.formatPhoneNumber = function (num) {
        var s2 = ("" + num).replace(/\D/g, '');
        var m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
        return (!m) ? null : "(" + m[1] + ") " + m[2] + "-" + m[3];
    };
    ViewContactsComponent.prototype.ngOnInit = function () {
    };
    ViewContactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-contacts',
            template: __webpack_require__("../../../../../src/app/pages/view-contacts/view-contacts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/view-contacts/view-contacts.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewContactsComponent);
    return ViewContactsComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
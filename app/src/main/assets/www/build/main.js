webpackJsonp([0],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aviso-privacidad/aviso-privacidad.module": [
		151
	],
	"../pages/home-aplication/home-aplication.module": [
		154
	],
	"../pages/nuevo-usuario/nuevo-usuario.module": [
		156
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvisoPrivacidadPageModule", function() { return AvisoPrivacidadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aviso_privacidad__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AvisoPrivacidadPageModule = /** @class */ (function () {
    function AvisoPrivacidadPageModule() {
    }
    AvisoPrivacidadPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aviso_privacidad__["a" /* AvisoPrivacidadPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aviso_privacidad__["a" /* AvisoPrivacidadPage */]),
            ],
        })
    ], AvisoPrivacidadPageModule);
    return AvisoPrivacidadPageModule;
}());

//# sourceMappingURL=aviso-privacidad.module.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvisoPrivacidadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuevo_usuario_nuevo_usuario__ = __webpack_require__(153);
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
 * Generated class for the AvisoPrivacidadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AvisoPrivacidadPage = /** @class */ (function () {
    function AvisoPrivacidadPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AvisoPrivacidadPage.prototype.GoToNuevoUsuario = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__nuevo_usuario_nuevo_usuario__["a" /* NuevoUsuarioPage */]);
    };
    AvisoPrivacidadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AvisoPrivacidadPage');
    };
    AvisoPrivacidadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aviso-privacidad',template:/*ion-inline-start:"/Users/LuisCruz/Desktop/AppMovil/Test/src/pages/aviso-privacidad/aviso-privacidad.html"*/'<!--\n  Generated template for the AvisoPrivacidadPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title text-center>\n      Aviso de privacidad\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-label>girgr</ion-label>\n\n<ion-content padding>\n<h1 ALIGN="justify" ionic-text>Aviso de Privacidad para la Protección de Datos Personales.\nEn términos de lo previsto en la Ley Federal de Protección de Datos Personales en\nPosesión de los Particulares (en lo sucesivo denominada como “la Ley”), la Universidad\nAnáhuac, institución de educación superior operada por Investigaciones y Estudios\nSuperiores, S.C., titular del Reconocimiento de Validez Oficial de Estudios otorgado por\nDecreto Presidencial publicado en el D.O.F. de fecha 26 de noviembre de 1982, establece\nel presente Aviso de Privacidad de conformidad con lo siguiente:\nTérminos y Condiciones\n1. El presente Aviso de Privacidad tiene por objeto la protección de los datos personales\nde los integrantes de la comunidad universitaria (aspirantes, alumnos, egresados, personal\ndirectivo, personal docente y personal administrativo), mediante su tratamiento legítimo,\ncontrolado e informado, a efecto de garantizar su privacidad, así como tu derecho a la\nautodeterminación informativa.\n2.- Dato Personal es Cualquier información concerniente a una persona física identificada\no identificable; el responsable de recabar los datos personales es el área de atención\npreuniversitaria (procesos de promoción e inscripción de alumnos); el área de\nadministración escolar (una vez que los alumnos se hayan inscrito formalmente); y el área\nde recursos humanos (para personal directivo, docente y administrativo).\n3.- El domicilio de la Universidad Anáhuac y del área responsable, es el mismo que tiene\nregistrada la sede de la Universidad Anáhuac ante la Secretaría de Educación Pública.\n4.- Al proporcionar tus Datos Personales por escrito, a través de una solicitud, formato en\npapel, formato digital, correo electrónico, o cualquier otro documento, aceptas y\nautorizas a la Universidad Anáhuac a utilizar y tratar de forma automatizada tus datos\npersonales e información suministrados, los cuales formarán parte de nuestra base de\ndatos con la finalidad de usarlos, en forma enunciativa, más no limitativa, para:\nidentificarte, ubicarte, comunicarte, contactarte, enviarte información y/o bienes, así\ncomo para enviarlos y/o transferirlos a terceros, dentro y fuera del territorio nacional, por\ncualquier medio que permita la ley para cumplir con nuestros fines sociales.\nMediante la aceptación y autorización para el tratamiento de tus datos personales en los\ntérminos antes señalados, nos facultas expresamente a transferirlos a autoridades de\ncualquier nivel (Federales, Estatales, Municipales), organismos públicos y privados,\ndiversas empresas y/o personas físicas, dentro y fuera de México, con el propósito de\ncertificar tus estudios y competencias, así como para participar en sus procesos de\nselección de personal y aplicar a los diversos puestos de trabajo vacantes que éstas\npubliquen en nuestra Bolsa de Trabajo; y nos autorizas a poder emitir documentación,\noficial o no, a tus representantes legales y familiares o parientes.\n5.- La temporalidad del manejo de tus Datos Personales será indefinida a partir de la fecha\nen que nos los proporciones, pudiendo oponerte al manejo de los mismos en cualquier\nmomento que lo consideres oportuno, con las limitaciones de Ley; en caso de que tu\nsolicitud de oposición sea procedente, la Universidad Anáhuac dejará de manejar tus \nDatos Personales sin ninguna responsabilidad de nuestra parte. Quedan fuera de este\nsupuesto las Bases de Datos referentes a las calificaciones y demás información académica\nde los alumnos, ex alumnos y egresados de la Universidad Anáhuac, y alumnos en\nmovilidad o en intercambio provenientes de otras instituciones.\n6.- El área de la Universidad Anáhuac responsable del tratamiento de tus datos\npersonales, está obligada a cumplir con los principios de licitud, consentimiento,\ninformación, calidad, finalidad, lealtad, proporcionalidad y responsabilidad tutelados en la\nLey; por tal motivo con fundamento en los artículos 13 y 14 de la Ley, la Universidad\nAnáhuac se compromete a guardar estricta confidencialidad de tus datos personales, así\ncomo a mantener las medidas de seguridad administrativas, técnicas y físicas que\npermitan protegerlos contra cualquier daño, pérdida, alteración, acceso o tratamiento no\nautorizado.\n7.- En términos de lo establecido por el artículo 22 de la Ley, tienes derecho en cualquier\nmomento a ejercer tus derechos de acceso, rectificación, cancelación y oposición al\ntratamiento de tus datos personales, mediante la solicitud vía correo electrónico dirigido\nal Lic. Miguel Ángel Sánchez Ocampo (msanchez@anahuac.mx), o por escrito en el\ndomicilio oficial de cada sede de la Universidad Anáhuac en la República Mexicana,\nsolicitud que debe contener los requisitos que marca la Ley.\n8.- La Universidad Anáhuac ocasionalmente modificará y corregirá este Aviso de\nPrivacidad, por lo tanto te pedimos que revises este aviso regularmente en la página de\ninternet que corresponda, o en www.anahuac.info\n9.- La Universidad Anáhuac protegerá tus Datos Personales en los términos de la Ley, y te\ncomunicará los elementos contenidos en las fracciones del artículo 16 de la Ley.\n10.- Aportar tus datos personales, cubrir el pago de inscripción a la Universidad Anáhuac y\nseleccionar asignaturas, es un hecho que presume tu total aceptación al contenido del\npresente Aviso de Privacidad. No obstante, te pedimos suscribir de conformidad el\npresente documento, el que formará parte de tu expediente como integrante de la\nUniversidad Anáhuac.\nAcepto de conformidad el contenido del Aviso de Privacidad que me da la Universidad\nAnáhuac. </h1>\n\n<button ion-button full (tap) ="GoToNuevoUsuario()">Continuar</button> \n\n</ion-content>\n'/*ion-inline-end:"/Users/LuisCruz/Desktop/AppMovil/Test/src/pages/aviso-privacidad/aviso-privacidad.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AvisoPrivacidadPage);
    return AvisoPrivacidadPage;
}());

//# sourceMappingURL=aviso-privacidad.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevoUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
 * Generated class for the NuevoUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NuevoUsuarioPage = /** @class */ (function () {
    function NuevoUsuarioPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    NuevoUsuarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NuevoUsuarioPage');
    };
    NuevoUsuarioPage.prototype.NuevoUsuarioRegistrado = function () {
        var alert = this.alertCtrl.create({
            title: 'Usuario registrado!',
            subTitle: 'Se ha enviado un codigo a tu correo, accede a el y presiona ok para continuar',
            buttons: ['OK']
        });
        alert.present();
    };
    NuevoUsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nuevo-usuario',template:/*ion-inline-start:"/Users/LuisCruz/Desktop/AppMovil/Test/src/pages/nuevo-usuario/nuevo-usuario.html"*/'<!--\n  Generated template for the NuevoUsuarioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title text-center>\n    	Datos del paciente\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n		<ion-item>\n    	<ion-label color="primary" stacked>Nombre</ion-label>\n    	<ion-input type="username"></ion-input>\n    	</ion-item>\n  	\n  		<ion-item>\n    	<ion-label color="primary" stacked>Correo</ion-label>\n    	<ion-input type="email" ></ion-input>\n    	</ion-item>\n\n 		<ion-item>\n    	<ion-label color="primary" stacked>Contraseña</ion-label>\n    	<ion-input type="password" placeholder="Por lo menos 8 caracteres"></ion-input>\n    	</ion-item>\n  		\n  		<ion-item>\n    	<ion-label color="primary" stacked>Repite tu contraseña</ion-label>\n    	<ion-input type="password2" placeholder="Por lo menos 8 caracteres"></ion-input>\n    	</ion-item>\n 		\n 		<ion-item>\n    	<ion-label color="primary" stacked>Telefono</ion-label>\n    	<ion-input type="phone"></ion-input>\n    	</ion-item>\n    	<button ion-button full (tap)="NuevoUsuarioRegistrado()">Registrarme</button> \n\n \n  	</ion-content>\n'/*ion-inline-end:"/Users/LuisCruz/Desktop/AppMovil/Test/src/pages/nuevo-usuario/nuevo-usuario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], NuevoUsuarioPage);
    return NuevoUsuarioPage;
}());

//# sourceMappingURL=nuevo-usuario.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAplicationPageModule", function() { return HomeAplicationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_aplication__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeAplicationPageModule = /** @class */ (function () {
    function HomeAplicationPageModule() {
    }
    HomeAplicationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home_aplication__["a" /* HomeAplicationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home_aplication__["a" /* HomeAplicationPage */]),
            ],
        })
    ], HomeAplicationPageModule);
    return HomeAplicationPageModule;
}());

//# sourceMappingURL=home-aplication.module.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeAplicationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
 * Generated class for the HomeAplicationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeAplicationPage = /** @class */ (function () {
    function HomeAplicationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomeAplicationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeAplicationPage');
    };
    HomeAplicationPage.prototype.goback = function () {
        this.navCtrl.pop();
    };
    HomeAplicationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-aplication',template:/*ion-inline-start:"/Users/LuisCruz/Desktop/AppMovil/Test/src/pages/home-aplication/home-aplication.html"*/'<!--\n  Generated template for the HomeAplicationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title text-center>\n      PPROVIGI\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n<button ion-button (tap)="goback()">Cerrar sesion</button>\n</ion-content>\n\n\nhideBackButton '/*ion-inline-end:"/Users/LuisCruz/Desktop/AppMovil/Test/src/pages/home-aplication/home-aplication.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomeAplicationPage);
    return HomeAplicationPage;
}());

//# sourceMappingURL=home-aplication.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoUsuarioPageModule", function() { return NuevoUsuarioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuevo_usuario__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NuevoUsuarioPageModule = /** @class */ (function () {
    function NuevoUsuarioPageModule() {
    }
    NuevoUsuarioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nuevo_usuario__["a" /* NuevoUsuarioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__nuevo_usuario__["a" /* NuevoUsuarioPage */]),
            ],
        })
    ], NuevoUsuarioPageModule);
    return NuevoUsuarioPageModule;
}());

//# sourceMappingURL=nuevo-usuario.module.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_aplication_home_aplication__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aviso_privacidad_aviso_privacidad__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, fb) {
        this.navCtrl = navCtrl;
        this.fb = fb;
    }
    HomePage.prototype.loginFb = function () {
        var _this = this;
        this.fb.login(['public_profile', 'user_friends', 'email']) //son permisos de lectura
            .then(function (res) {
            _this.fb.login(['publish_actions']).then(function (re) {
                _this.fb.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(function (profile) {
                    _this.userData = { email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name'] };
                });
            });
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    HomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_aplication_home_aplication__["a" /* HomeAplicationPage */]);
    };
    HomePage.prototype.GoToAviso = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__aviso_privacidad_aviso_privacidad__["a" /* AvisoPrivacidadPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/LuisCruz/Desktop/AppMovil/Test/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding >\n <ion-item>\n    <ion-label color="primary" stacked>Nombre de usuario</ion-label>\n    <ion-input type="username"></ion-input>\n  </ion-item>\n<ion-item>\n    <ion-label color="primary" stacked>Contraseña</ion-label>\n    <ion-input type="password" placeholder="Por lo menos 8 caracteres"></ion-input>\n </ion-item>\n	<button ion-button full (tap) ="login()">Iniciar sesion</button> \n\n\n	<!--<button ion-button (tap)="loginFb()">Login FB</button>-->\n\n  <button ion-button full item-end icon-right color="dark" clear (tap)="GoToAviso()"> No tienes cuenta? Registrate\n      <ion-icon name="arrow-forward"></ion-icon>\n  </button>\n\n  <button ion-button (tap)="loginFb()">Login FB</button>\n  \n  <ion-card *ngIf="userData">\n    <ion-card-header>{{ userData.username }}</ion-card-header>\n    <img [src]="userData.picture" />\n    <ion-card-content>\n      <p>Email: {{ userData.email }}</p>\n      <p>First Name: {{ userData.first_name }}</p>\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/LuisCruz/Desktop/AppMovil/Test/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_aplication_home_aplication_module__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_aviso_privacidad_aviso_privacidad_module__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_nuevo_usuario_nuevo_usuario_module__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/aviso-privacidad/aviso-privacidad.module#AvisoPrivacidadPageModule', name: 'AvisoPrivacidadPage', segment: 'aviso-privacidad', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-aplication/home-aplication.module#HomeAplicationPageModule', name: 'HomeAplicationPage', segment: 'home-aplication', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nuevo-usuario/nuevo-usuario.module#NuevoUsuarioPageModule', name: 'NuevoUsuarioPage', segment: 'nuevo-usuario', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__pages_home_aplication_home_aplication_module__["HomeAplicationPageModule"],
                __WEBPACK_IMPORTED_MODULE_7__pages_nuevo_usuario_nuevo_usuario_module__["NuevoUsuarioPageModule"],
                __WEBPACK_IMPORTED_MODULE_6__pages_aviso_privacidad_aviso_privacidad_module__["AvisoPrivacidadPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__["a" /* Facebook */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/LuisCruz/Desktop/AppMovil/Test/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/LuisCruz/Desktop/AppMovil/Test/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map
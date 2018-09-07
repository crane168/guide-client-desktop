(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../libs/guidelib/src/component/common/header.component.html":
/*!**************************************************************************************************************!*\
  !*** /Users/jingtong1/Desktop/guide-client-desktop/libs/guidelib/src/component/common/header.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"introduce\" [style.background]=\"'url(./assets/banner.jpg)'\">\n  <div class=\"title\">\n    <h1 >发布服务</h1>\n    <h2 class=\"title-tishi\">报价模式提示</h2>\n  </div>\n  <div class=\"information\">\n    <img class=\"deng\" src=\"{{imgurl}}\">\n    <div >\n      <p class=\"p-one\">如果您发布的形成能够以每人每天为单位预定，选择每人每天的报价模式</p>\n      <p>如果您发布的行程是按人头为单位预定，选择按人头报价的报价模式</p>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../libs/guidelib/src/component/common/header.component.scss":
/*!**************************************************************************************************************!*\
  !*** /Users/jingtong1/Desktop/guide-client-desktop/libs/guidelib/src/component/common/header.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".introduce {\n  display: flex;\n  flex-direction: column; }\n\n.information {\n  display: flex;\n  flex-direction: row; }\n\n.title {\n  display: flex;\n  flex-direction: row;\n  justify-content: left; }\n\n.title h2 {\n  -ms-grid-row-align: center;\n      align-self: center; }\n\n.title h1, .title h2 {\n  margin: 20px; }\n\n.information img {\n  margin: 20px; }\n"

/***/ }),

/***/ "../../libs/guidelib/src/component/common/header.component.ts":
/*!************************************************************************************************************!*\
  !*** /Users/jingtong1/Desktop/guide-client-desktop/libs/guidelib/src/component/common/header.component.ts ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.imgurl = "./assets/dengpao.png";
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'guide-client-header',
            template: __webpack_require__(/*! ./header.component.html */ "../../libs/guidelib/src/component/common/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "../../libs/guidelib/src/component/common/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "../../libs/guidelib/src/component/guide-common.module.ts":
/*!********************************************************************************************************!*\
  !*** /Users/jingtong1/Desktop/guide-client-desktop/libs/guidelib/src/component/guide-common.module.ts ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
var header_component_1 = __webpack_require__(/*! ./common/header.component */ "../../libs/guidelib/src/component/common/header.component.ts");
var GuideCommonModule = /** @class */ (function () {
    function GuideCommonModule() {
    }
    GuideCommonModule_1 = GuideCommonModule;
    GuideCommonModule.forRoot = function () {
        return { ngModule: GuideCommonModule_1 };
    };
    GuideCommonModule = GuideCommonModule_1 = __decorate([
        core_1.NgModule({
            declarations: [header_component_1.HeaderComponent],
            imports: [
                common_1.CommonModule,
            ],
            exports: [
                header_component_1.HeaderComponent
            ]
        })
    ], GuideCommonModule);
    return GuideCommonModule;
    var GuideCommonModule_1;
}());
exports.GuideCommonModule = GuideCommonModule;


/***/ }),

/***/ "../../libs/guidelib/src/index.ts":
/*!********************************************************************************!*\
  !*** /Users/jingtong1/Desktop/guide-client-desktop/libs/guidelib/src/index.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var guide_common_module_1 = __webpack_require__(/*! ./component/guide-common.module */ "../../libs/guidelib/src/component/guide-common.module.ts");
exports.GuideCommonModule = guide_common_module_1.GuideCommonModule;


/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/anim.directive.ts":
/*!***********************************!*\
  !*** ./src/app/anim.directive.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var AnimDirective = /** @class */ (function () {
    function AnimDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    AnimDirective.prototype.onMouseOver = function () {
        this.mouse("visible");
        console.log("进入");
    };
    AnimDirective.prototype.onMouseOut = function () {
        this.mouse("hidden");
        console.log("退出");
    };
    AnimDirective.prototype.mouse = function (dis) {
        if (dis == "visible") {
            console.log("ceng消失");
            this.renderer.setElementStyle(this.el.nativeElement.querySelector('.ceng'), "visibility", "hidden");
            this.renderer.setElementStyle(this.el.nativeElement.querySelector('.circle'), "visibility", "visible");
        }
        if (dis == "hidden") {
            console.log("ceng显示");
            this.renderer.setElementStyle(this.el.nativeElement.querySelector('.ceng'), "visibility", "visible");
            this.renderer.setElementStyle(this.el.nativeElement.querySelector('.circle'), "visibility", "hidden");
        }
    };
    __decorate([
        core_1.HostListener('mouseover'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AnimDirective.prototype, "onMouseOver", null);
    __decorate([
        core_1.HostListener('mouseout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AnimDirective.prototype, "onMouseOut", null);
    AnimDirective = __decorate([
        core_1.Directive({
            selector: '[guideClientAnim]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
    ], AnimDirective);
    return AnimDirective;
}());
exports.AnimDirective = AnimDirective;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
var router_1 = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var details_component_1 = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
var main_component_1 = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
var routes = [
    { path: '', component: main_component_1.MainComponent },
    { path: 'details', component: details_component_1.DetailsComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes),
                common_1.CommonModule
            ],
            exports: [router_1.RouterModule],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"btn-container\">\n    <mat-sidenav #sidenav [mode]=\"side\">\n      <p><a routerLink=\"/details\"><button mat-button (click)=\"sidenav.toggle()\">详细信息</button></a></p>\n    </mat-sidenav>\n    <mat-sidenav-content>\n      <p><button mat-button (click)=\"sidenav.toggle()\" class=\"cbl\">切换侧栏</button></p>\n      <guide-client-header></guide-client-header>\n      <router-outlet></router-outlet>\n    </mat-sidenav-content>\n</mat-sidenav-container>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav {\n  width: 100px;\n  text-align: center; }\n\n.cbl {\n  position: fixed;\n  top: 5%;\n  right: 5%; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'web';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'guide-client-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var nx_1 = __webpack_require__(/*! @nrwl/nx */ "../../node_modules/@nrwl/nx/esm5/nrwl-nx.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
var main_component_1 = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
var animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm5/animations.js");
var app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var details_component_1 = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
var list_1 = __webpack_require__(/*! @angular/material/list */ "../../node_modules/@angular/material/esm5/list.es5.js");
var icon_1 = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/esm5/icon.es5.js");
var datepicker_1 = __webpack_require__(/*! @angular/material/datepicker */ "../../node_modules/@angular/material/esm5/datepicker.es5.js");
var chips_1 = __webpack_require__(/*! @angular/material/chips */ "../../node_modules/@angular/material/esm5/chips.es5.js");
var dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/esm5/dialog.es5.js");
var button_1 = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/esm5/button.es5.js");
var material_1 = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
var sidenav_1 = __webpack_require__(/*! @angular/material/sidenav */ "../../node_modules/@angular/material/esm5/sidenav.es5.js");
var _ngx3_guidelib_1 = __webpack_require__(/*! @ngx3-guidelib */ "../../libs/guidelib/src/index.ts");
var table_component_1 = __webpack_require__(/*! ./table/table.component */ "./src/app/table/table.component.ts");
var anim_directive_1 = __webpack_require__(/*! ./anim.directive */ "./src/app/anim.directive.ts");
var dialog_component_1 = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, main_component_1.MainComponent, details_component_1.DetailsComponent, table_component_1.TableComponent, anim_directive_1.AnimDirective, dialog_component_1.DialogComponent],
            imports: [
                platform_browser_1.BrowserModule,
                nx_1.NxModule.forRoot(),
                _ngx3_guidelib_1.GuideCommonModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                app_routing_module_1.AppRoutingModule,
                list_1.MatListModule,
                icon_1.MatIconModule,
                material_1.MatInputModule,
                material_1.MatCheckboxModule,
                material_1.MatCardModule,
                sidenav_1.MatSidenavModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                material_1.MatSelectModule,
                material_1.MatNativeDateModule,
                datepicker_1.MatDatepickerModule,
                chips_1.MatChipsModule,
                dialog_1.MatDialogModule,
                button_1.MatButtonModule
            ],
            providers: [],
            entryComponents: [
                dialog_component_1.DialogComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/details/details.component.css":
/*!***********************************************!*\
  !*** ./src/app/details/details.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".details{\n  display:flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.left{\n  align-self: flex-start;\n}\n.right{\n  width:500px;\n  /*box-shadow: 1px 1px 4px gray;*/\n  margin:20px;\n  display:flex;\n  flex-direction: column;\n}\nmat-list-item{\n  background-color:rgba(0,0,0,0.2);\n  margin:10px;\n  border-radius: 10px;\n  width:230px;\n  display:flex;\n  flex-direction: row;\n  justify-content: space-around;\n  /*align-items: stretch;*/\n}\n.icons{\n  flex:1 1 0;\n}\n.standardForm{\n  width:100%;\n  display:flex;\n  flex-wrap:wrap;\n  justify-content:space-around;\n}\n.firstInput{\n  width:95%;\n  font-size:20px;\n}\n.half-width{\n  width:45%;\n}\nmat-card,mat-card-content{\n  width:100%;\n  display:flex;\n  flex-direction: column;\n}\n.guide-section{\n  display:flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\nmat-checkbox{\n  width:16%;\n}\n.feedback{\n  font-size:15px;\n  color:tomato;\n}\n.btn-primary{\n  background-color: lawngreen;\n  color:black;\n  font-size:18px;\n  width:66px;\n  height:25px;\n  text-align: center;\n}\n.example-chip-list {\n  width: 100%;\n  margin-top:2%;\n}\n"

/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"details\">\n  <div class=\"left\">\n    <mat-nav-list>\n      <mat-list-item *ngFor=\"let item of items;let i=index\">\n        <div>\n          {{item.name}}\n          <mat-icon svgIcon=\"{{item.tubiao}}\"></mat-icon>&nbsp;\n        </div>\n        <mat-icon svgIcon=\"{{item.shanchu}}\" (click)=\"deleteItem(i)\" class=\"icons\"></mat-icon>\n      </mat-list-item>\n    </mat-nav-list>\n  </div>\n  <div class=\"right\">\n    <form class=\"standardForm\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n      <mat-form-field class=\"firstInput\">\n        <input matInput placeholder=\"请输入一个标题\" formControlName=\"titleName\" required>\n        <div class=\"feedback\" *ngIf=\"f.titleName.invalid && f.titleName.dirty\"> 至少输入5个字符 </div>\n      </mat-form-field>\n      <mat-form-field class=\"half-width\">\n        <input matInput placeholder=\"出生地\"  formControlName=\"home\">\n        <div class=\"feedback\" *ngIf=\"!f.home.valid && f.home.dirty\"> 至少输入2个字符 </div>\n      </mat-form-field>\n      <mat-form-field class=\"half-width\">\n        <input matInput placeholder=\"目前居住城市\"  formControlName=\"city\">\n        <div class=\"feedback\" *ngIf=\"!f.city.valid && f.city.dirty\"> 至少输入2个字符 </div>\n      </mat-form-field>\n      <mat-form-field class=\"half-width\">\n        <input matInput placeholder=\"目前职业\"  formControlName=\"work\">\n      </mat-form-field>\n      <mat-form-field class=\"half-width\">\n        <input matInput placeholder=\"最高学历\"  formControlName=\"education\">\n      </mat-form-field>\n      <mat-form-field class=\"half-width\">\n        <input matInput placeholder=\"出生年月日\"  formControlName=\"birthday\">\n        <div class=\"feedback\" *ngIf=\"!f.birthday.valid && f.birthday.dirty\"> 填写格式必须为1990/0410 </div>\n      </mat-form-field>\n      <mat-form-field class=\"half-width\">\n        <mat-select  placeholder=\"sex\" formControlName=\"sex\">\n          <mat-option value=\"男\">男</mat-option>\n          <mat-option value=\"女\">女</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field class=\"half-width\">\n        <input matInput placeholder=\"身份类型\"  formControlName=\"identityCard\">\n      </mat-form-field>\n      <mat-form-field class=\"half-width\">\n        <input matInput [matDatepicker]=\"picker\" placeholder=\"开车时间\" formControlName=\"dateForCar\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n      </mat-form-field>\n      <mat-card>\n        <mat-card-content>\n          <h2 class=\"example-h2\">会说的语言</h2>\n          <section class=\"guide-section\">\n            <mat-checkbox class=\"example-margin\">英语</mat-checkbox>\n            <mat-checkbox class=\"example-margin\">法语</mat-checkbox>\n            <mat-checkbox class=\"example-margin\">德语</mat-checkbox>\n            <mat-checkbox class=\"example-margin\">日语</mat-checkbox>\n            <mat-checkbox class=\"example-margin\">韩语</mat-checkbox>\n            <mat-checkbox class=\"example-margin\">俄语</mat-checkbox>\n          </section>\n        </mat-card-content>\n      </mat-card>\n      <mat-card>\n        <mat-card-content>\n          <h2 class=\"example-h2\">旅行专业服务</h2>\n          <section class=\"guide-section\">\n            <mat-checkbox class=\"example-margin\">领队</mat-checkbox>\n            <mat-checkbox class=\"example-margin\">导游</mat-checkbox>\n            <mat-checkbox class=\"example-margin\">后勤</mat-checkbox>\n            <mat-checkbox class=\"example-margin\">叫车</mat-checkbox>\n            <mat-checkbox class=\"example-margin\">餐饮</mat-checkbox>\n            <mat-checkbox class=\"example-margin\">娱乐</mat-checkbox>\n          </section>\n        </mat-card-content>\n      </mat-card>\n      <mat-card>\n        <mat-card-content>\n          <h2 class=\"example-h2\">其他专业服务</h2>\n          <section class=\"guide-section\">\n            <mat-checkbox class=\"example-margin\">代驾</mat-checkbox>\n            <mat-checkbox class=\"example-margin\">遛狗</mat-checkbox>\n            <mat-checkbox class=\"example-margin\">音乐</mat-checkbox>\n            <mat-checkbox class=\"example-margin\">漂流</mat-checkbox>\n            <mat-checkbox class=\"example-margin\">保姆</mat-checkbox>\n            <mat-checkbox class=\"example-margin\">团建</mat-checkbox>\n          </section>\n        </mat-card-content>\n      </mat-card>\n      <mat-form-field class=\"example-chip-list\">\n        <mat-chip-list #chipList>\n          <mat-chip *ngFor=\"let trip of trips\" [selectable]=\"selectable\"\n                    [removable]=\"removable\" (removed)=\"remove(trip)\">\n            {{trip.name}}\n            <mat-icon matChipRemove *ngIf=\"removable\">x</mat-icon>\n          </mat-chip>\n          <input placeholder=\"请添加旅游标签\"\n                 [matChipInputFor]=\"chipList\"\n                 [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                 [matChipInputAddOnBlur]=\"addOnBlur\"\n                 (matChipInputTokenEnd)=\"add($event)\">\n        </mat-chip-list>\n      </mat-form-field>\n      <!--<p><button mat-raised-button  type=\"submit\" [disabled]=\"registerForm.invalid\" (click)=\"openDialog()\"> submit</button></p>-->\n      <p><button mat-raised-button  type=\"submit\"  (click)=\"openDialog()\"> submit</button></p>\n    </form>\n    <div class=\"primary-container\">\n      <guide-client-table [user]=\"user\"></guide-client-table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var material_1 = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var keycodes_1 = __webpack_require__(/*! @angular/cdk/keycodes */ "../../node_modules/@angular/cdk/esm5/keycodes.es5.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
var material_2 = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
var dialog_component_1 = __webpack_require__(/*! ../dialog/dialog.component */ "./src/app/dialog/dialog.component.ts");
var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(iconRegistry, sanitizer, fb, dialog) {
        this.fb = fb;
        this.dialog = dialog;
        this.isSubmitted = false;
        this.user = {};
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [keycodes_1.ENTER, keycodes_1.COMMA];
        this.trips = [
            { name: '翻译家' },
            { name: '老司机' },
            { name: '商家' },
        ];
        this.items = [{
                name: "基本信息",
                tubiao: "duihao",
                shanchu: 'laji'
            },
            {
                name: "详情描述",
                tubiao: "duihao",
                shanchu: "laji"
            }, {
                name: "报价",
                tubiao: "duihao",
                shanchu: "laji"
            },
        ];
        iconRegistry.addSvgIcon('duihao', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/duihao.svg'));
        iconRegistry.addSvgIcon('laji', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/laji.svg'));
    }
    DetailsComponent.prototype.ngOnInit = function () {
        this.registerForm = this.fb.group({
            titleName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            home: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            city: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            work: ['', forms_1.Validators.required],
            education: ['', forms_1.Validators.required],
            birthday: ['', [forms_1.Validators.required, forms_1.Validators.pattern('(^(19)\\d{2}\\/[0-1][0-9]\\d{2}$)')]],
            sex: ['', forms_1.Validators.required],
            identityCard: ['', forms_1.Validators.required],
            dateForCar: ['', forms_1.Validators.required],
        });
    };
    Object.defineProperty(DetailsComponent.prototype, "f", {
        //get保存变量
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    DetailsComponent.prototype.deleteItem = function (index) {
        this.items.splice(index, 1);
    };
    //提交按钮
    DetailsComponent.prototype.onSubmit = function () {
        this.user = this.registerForm.value;
        console.log(this.user);
    };
    //增加chips
    DetailsComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        // Add our trip thips
        if ((value || '').trim()) {
            this.trips.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    //移除chips
    DetailsComponent.prototype.remove = function (trip) {
        var index = this.trips.indexOf(trip);
        if (index >= 0) {
            this.trips.splice(index, 1);
        }
    };
    //弹框
    DetailsComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(dialog_component_1.DialogComponent, {
            width: '250px',
            data: { titleName: this.registerForm.value.titleName }
        });
        dialogRef.afterClosed().
            subscribe(function (result) {
            console.log(result);
        });
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'guide-client-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [material_1.MatIconRegistry,
            platform_browser_1.DomSanitizer,
            forms_1.FormBuilder,
            material_2.MatDialog])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;


/***/ }),

/***/ "./src/app/dialog/dialog.component.css":
/*!*********************************************!*\
  !*** ./src/app/dialog/dialog.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\n  font-size:20px;\n  color:skyblue;\n  text-align: center;\n}\nh1{\n  color:red;\n}\nh1 span{\n  margin-left:10px;\n}\n"

/***/ }),

/***/ "./src/app/dialog/dialog.component.html":
/*!**********************************************!*\
  !*** ./src/app/dialog/dialog.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Hi,<span>{{data.titleName}}</span></h1>\n<div mat-dialog-content>\n  <p>数据提交成功！</p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">关闭</button>\n  <button mat-button [mat-dialog-close]=\"\" cdkFocusInitial (click)=\"toHome()\">跳转首页</button>\n</div>\n"

/***/ }),

/***/ "./src/app/dialog/dialog.component.ts":
/*!********************************************!*\
  !*** ./src/app/dialog/dialog.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var material_1 = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
var router_1 = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialogRef, data, router) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
    }
    DialogComponent.prototype.ngOnInit = function () {
    };
    DialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close('The dialog was closed');
    };
    DialogComponent.prototype.toHome = function () {
        this.router.navigate(['/']);
    };
    DialogComponent = __decorate([
        core_1.Component({
            selector: 'guide-client-dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.css */ "./src/app/dialog/dialog.component.css")]
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object, router_1.Router])
    ], DialogComponent);
    return DialogComponent;
}());
exports.DialogComponent = DialogComponent;


/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list{\n  width:346px;\n  height:130px;\n  /*background:url(\"/assets/dy.jpg\");*/\n  list-style:none;\n  margin:20px;\n  position: relative;\n}\nul{\n  display:flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\nli>.ceng{\n  width:100%;\n  height:100%;\n  position: absolute;\n  left:0;\n  right:0;\n  top:0;\n  bottom:0;\n  margin:auto;\n  text-align: center;\n  font-size:25px;\n  color:white;\n  font-weight: bold;\n  font-family:Helvetica;\n  line-height:20px;\n  background: rgba(0,0,0, .4);\n  /*opacity:0.4;*/\n}\nli>.circle{\n  position: absolute;\n  width:90px;\n  height:90px;\n  left:50%;\n  top:45%;\n  margin:-45px 0 0 -45px;\n  border-radius: 50%;\n  background-color: white;\n  opacity: 0.9;\n  text-align: center;\n  font-size:20px!important;\n  line-height:20px;\n  /*margin:0 auto*/\n}\n\n\n"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"hot\">\n    <h1 class=\"hot-title\">热门</h1>\n    <ul class=\"hot-list\">\n      <li class=\"list js-list\" *ngFor=\"let item of hotTopic\" guideClientAnim [style.background]= '\"url(\"+\".\"+item.imgurl + \")\"' >\n        <div class=\"ceng\"\n            >\n          <p class=\"chinese\">{{item.chinese}}</p>\n          <p>{{item.english}}</p>\n        </div>\n        <div class=\"circle\" [ngStyle]=\"{visibility:'hidden'}\"\n        >\n          <p><a routerLink=\"/details\"> + </a></p>\n          <p>{{item.chinese}}</p>\n        </div>\n      </li>\n    </ul>\n  </div>\n  <div class=\"try\">\n    <h1 class=\"hot-title\">体验</h1>\n    <ul class=\"try-list\">\n      <li class=\"list js-list\" *ngFor=\"let item of experience\" guideClientAnim [style.background]= '\"url(\"+\".\"+item.imgurl + \")\"'>\n        <div class=\"ceng\">\n          <p class=\"chinese\">{{item.chinese}}</p>\n          <p>{{item.english}}</p>\n        </div>\n        <div class=\"circle\" [ngStyle]=\"{visibility:'hidden'}\">\n          <p><a routerLink=\"/details\"> + </a></p>\n          <p>{{item.chinese}}</p>\n        </div>\n      </li>\n    </ul>\n  </div>\n  <div class=\"route\">\n    <h1 class=\"hot-title\">线路</h1>\n    <ul class=\"route-list\">\n      <li class=\"list js-list\" *ngFor=\"let item of route\" guideClientAnim [style.background]= '\"url(\"+\".\"+item.imgurl + \")\"'>\n        <div class=\"ceng\">\n          <p class=\"chinese\">{{item.chinese}}</p>\n          <p>{{item.english}}</p>\n        </div>\n        <div class=\"circle\" [ngStyle]=\"{visibility:'hidden'}\">\n          <p><a routerLink=\"/details\">+</a></p>\n          <p>{{item.english}}</p>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
// import { readFile } from 'fs';
var MainComponent = /** @class */ (function () {
    function MainComponent(http) {
        this.http = http;
        this.cengState = 'inactive';
        this.circleState = 'out';
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('./assets/data.json').subscribe(function (res) {
            console.log(res);
            _this.hotTopic = res.hotTopic;
        });
        this.http.get('./assets/data.json').subscribe(function (res) {
            _this.experience = res.experience;
        });
        this.http.get('./assets/data.json').subscribe(function (res) {
            _this.route = res.route;
        });
        // fs.readFile("../../assets/data.json","utf8",(err,data)=>{
        //   if(err) throw error;
        //   this.hotTopic = JSON.parse(data).hotTopic;
        //   this.experience = JSON.parse(data).experience;
        //   this.route = JSON.parse(data).route;
        // })
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: 'guide-client-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;


/***/ }),

/***/ "./src/app/table/table.component.css":
/*!*******************************************!*\
  !*** ./src/app/table/table.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\n  font-family: verdana,arial,sans-serif;\n       font-size:11px;\n       color:#333333;\n       border-width: 1px;\n       border-color: #666666;\n      border-collapse: collapse;\n}\ntable th{\n  border-width: 1px;\n     padding: 8px;\n      border-style: solid;\n       border-color: #666666;\n       background-color: #dedede;\n}\ntable th td{\n  border-width: 1px;\n       padding: 8px;\n       border-style: solid;\n       border-color: #666666;\n      background-color: #ffffff;\n}\n"

/***/ }),

/***/ "./src/app/table/table.component.html":
/*!********************************************!*\
  !*** ./src/app/table/table.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <table class=\"table\">\n    <caption>{{user.titleName}}</caption>\n    <thead>\n    <tr>\n      <th>home</th>\n      <th>city</th>\n      <th>work</th>\n      <th>education</th>\n      <th>birthday</th>\n      <th>sex</th>\n      <th>identityCard</th>\n      <th>dateForCar</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr>\n      <td>{{ user.home }}</td>\n      <td>{{ user.city }}</td>\n      <td>{{ user.work }}</td>\n      <td>{{ user.education }}</td>\n      <td>{{ user.birthday }}</td>\n      <td>{{ user.sex }}</td>\n      <td>{{ user.identityCard }}</td>\n      <td>{{ user.dateForCar | date:longDate}}</td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/table/table.component.ts":
/*!******************************************!*\
  !*** ./src/app/table/table.component.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var TableComponent = /** @class */ (function () {
    function TableComponent() {
    }
    TableComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "user", void 0);
    TableComponent = __decorate([
        core_1.Component({
            selector: 'guide-client-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/table/table.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic()
    .bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jingtong1/Desktop/guide-client-desktop/apps/web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
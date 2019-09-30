(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"head\">\n  <div class=\"head-item\" [routerLink]=\"['/warehouse']\">我的倉庫</div>\n  <div class=\"head-item\" [routerLink]=\"['/product']\">物資搜尋</div>\n  <div class=\"head-item\" [routerLink]=\"['/login']\" *ngIf=\"!this.data.isLogin\">\n    登入\n  </div>\n  <div class=\"head-item name\" *ngIf=\"this.data.isLogin\" (click)=\"logout()\">\n    {{ name }}\n  </div>\n</header>\n\n<router-outlet></router-outlet>\n\n<div class=\"loading\"></div>\n<div class=\"popover\">\n  <div class=\"login\"></div>\n  <div class=\"alert\"></div>\n</div>\n\n<footer class=\"foot\">!測試用網站！</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/board/board.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/board/board.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"board\">\n  <div class=\"board-title t-shadow t-pure-white\">\n    食物銀行交換平台\n  </div>\n  <div class=\"board-subtitle t-shadow t-pure-white\">\n    測試用交換平台，測試用交換平台，測試用交換平台，測試用交換平台！\n  </div>\n\n  <div class=\"fastRoute\">\n    <div\n      class=\"warehousePage btn btn-action\"\n      [routerLink]=\"['/warehouse']\"\n    ></div>\n    <div class=\"searchPage btn btn-action\" [routerLink]=\"['/product']\"></div>\n    <div class=\"newsPage btn btn-action\" [routerLink]=\"['/home']\"></div>\n  </div>\n</header>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/card-domand/card-domand.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/card-domand/card-domand.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" (click)=\"toDetail()\">\n  <div class=\"card-img\">\n    <img src=\"{{ item.image }}\" alt=\"{{ item.name }}\" />\n  </div>\n  <div class=\"card-title\">{{ item.name }}</div>\n  <div class=\"card-text\" title=\"{{ item.text }}\">\n    {{ item.text }}\n  </div>\n  <div class=\"date\">剩餘 {{ item.amount }} | 到期日 {{ item.endDate }}</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/card-my/card-my.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/card-my/card-my.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>card-my works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/card-need/card-need.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/card-need/card-need.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>card-need works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"login\">\n  <div class=\"login-background\">\n    <div class=\"login-content\">\n      <div class=\"content-box\">\n        <div class=\"inputBox\">\n          <label>帳號</label>\n          <input type=\"text\" placeholder=\"請輸入您的帳號\" />\n        </div>\n      </div>\n      <div class=\"content-box\">\n        <div class=\"inputBox\">\n          <label>密碼</label>\n          <input type=\"text\" placeholder=\"請輸入您的密碼\" />\n        </div>\n      </div>\n      <div class=\"content-box\">\n        <p class=\"t5\">忘記密碼？(沒有功能)</p>\n      </div>\n      <div class=\"content-box\">\n        <button class=\"btn btn-action btn-main\" (click)=\"login()\">LOGIN</button>\n      </div>\n      <div class=\"content-box\">\n        <p class=\"t1\">or Connect with Social Media</p>\n      </div>\n      <div class=\"content-box\">\n        <button class=\"btn btn-action btn-main btn-red\">GOOGLE</button>\n      </div>\n      <div class=\"content-box\">\n        <button class=\"btn btn-action btn-main btn-blue\">FACEBOOK</button>\n      </div>\n    </div>\n    <div class=\"login-title\">\n      <h1>食(實)物共享交換平台</h1>\n      <h5>這是一個DEMO用的，針對非營利單位用戶設定的資訊及物資交流平台。</h5>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/recommend/recommend.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/recommend/recommend.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"new-set\">\n  <li *ngFor=\"let item of data\">\n    <app-card-domand [item]=\"item\"></app-card-domand>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/title/title.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/title/title.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section\">\n  <div class=\"sec-title\">\n    <div class=\"sec-title--text t-pure-white\">{{ title }}</div>\n    <div class=\"switch\" *ngIf=\"switchBtnList\">\n      <div\n        class=\"switch-btn\"\n        [ngClass]=\"{ 'switch-btn--actived': switch.actived }\"\n        *ngFor=\"let switch of switchBtnList\"\n      >\n        {{ switch.name }}\n      </div>\n    </div>\n  </div>\n  <div class=\"sec-body\">\n    <ng-content></ng-content>\n  </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-board></app-board>\n\n<main class=\"content\">\n  <app-title title=\"最新登陸物資\">\n    <app-recommend [data]=\"data.stockInfo\"></app-recommend>\n  </app-title>\n</main>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/production/demand/demand.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/production/demand/demand.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-board></app-board>\n\n<main class=\"content\">\n  <app-title title=\"物資供給\">\n    <div class=\"search\">\n      <div class=\"search-nav\"></div>\n      <div class=\"search-content\"></div>\n    </div>\n  </app-title>\n</main>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/production/product-detail/product-detail.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/production/product-detail/product-detail.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-board></app-board>\n<main class=\"content\">\n  <app-title title=\"物資需求\" [switchList]=\"switchList\">\n    <div class=\"search\">\n      <div class=\"search-nav\">\n        <div class=\"search-nav--search\"></div>\n        <div class=\"search-nav--list\">\n          <div class=\"list-title\">食品類</div>\n          <div class=\"list-subTitle\">米食穀類</div>\n          <div class=\"list-subTitle\">沖泡飲品、奶粉</div>\n          <div class=\"list-subTitle\">罐頭</div>\n          <div class=\"list-subTitle\">麵類</div>\n        </div>\n        <div class=\"search-nav--list\">\n          <div class=\"list-title\">用品類</div>\n          <div class=\"list-subTitle\">尿布</div>\n          <div class=\"list-subTitle\">衣物</div>\n          <div class=\"list-subTitle\">其他</div>\n        </div>\n      </div>\n      <div class=\"search-content\">\n        <div class=\"card\">\n          <div class=\"data-img\">\n            <img src=\"{{ product.image }}\" alt=\"{{ product.name }}\" />\n          </div>\n          <div class=\"data-content\">\n            <div class=\"data-title\">\n              <div>{{ product.name }}</div>\n              <div style=\"text-align: end; font-size: 0.5rem\">\n                剩餘 {{ product.amount }} / {{ product.ValidDate }}\n              </div>\n            </div>\n            <div class=\"data-info\">\n              <div>單位名稱：某個知名或不知名的單位</div>\n              <div>取貨地址：台灣的某個地方</div>\n              <div>連絡電話：0911-203-111</div>\n            </div>\n            <div class=\"btn-box\">\n              <button class=\"btn btn-main btn-active\" (click)=\"check()\">\n                我要取貨\n              </button>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"card\" style=\"margin-top: 1rem;\">\n          應該還有一些詳細資訊，但目前沒有！\n        </div>\n      </div>\n    </div>\n  </app-title>\n\n  <app-title title=\"推薦物資\">\n    <app-recommend [data]=\"data.stockInfo\"></app-recommend>\n  </app-title>\n</main>\n\n<div></div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/production/product/product.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/production/product/product.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-board></app-board>\n<main class=\"content\">\n  <app-title title=\"物資需求\" [switchList]=\"switchList\">\n    <div class=\"search\">\n      <div class=\"search-nav\">\n        <div class=\"search-nav--search\"></div>\n        <div class=\"search-nav--list\">\n          <div class=\"list-title\">食品類</div>\n          <div class=\"list-subTitle\">米食穀類</div>\n          <div class=\"list-subTitle\">沖泡飲品、奶粉</div>\n          <div class=\"list-subTitle\">罐頭</div>\n          <div class=\"list-subTitle\">麵類</div>\n        </div>\n        <div class=\"search-nav--list\">\n          <div class=\"list-title\">用品類</div>\n          <div class=\"list-subTitle\">尿布</div>\n          <div class=\"list-subTitle\">衣物</div>\n          <div class=\"list-subTitle\">其他</div>\n        </div>\n      </div>\n      <div class=\"search-content\">\n        <p style=\"font-size: 12px; margin:5px;\">#LOG</p>\n        <div class=\"domand-box\">\n          <app-card-domand\n            [item]=\"item\"\n            *ngFor=\"let item of data.stockInfo\"\n          ></app-card-domand>\n        </div>\n      </div>\n    </div>\n  </app-title>\n\n  <app-title title=\"推薦物資\">\n    <app-recommend [data]=\"data.stockInfo\"></app-recommend>\n  </app-title>\n</main>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/user/information/information.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/user/information/information.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-board></app-board>\n<main class=\"content\">\n  <app-title title=\"我的資訊\"></app-title>\n</main>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/user/warehouse/warehouse.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/user/warehouse/warehouse.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-board></app-board>\n<main class=\"content\">\n  <app-title title=\"我的倉庫\" [switchList]=\"switchList\"></app-title>\n</main>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_user_information_information_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/user/information/information.component */ "./src/app/pages/user/information/information.component.ts");
/* harmony import */ var _pages_user_warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/user/warehouse/warehouse.component */ "./src/app/pages/user/warehouse/warehouse.component.ts");
/* harmony import */ var _pages_production_demand_demand_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/production/demand/demand.component */ "./src/app/pages/production/demand/demand.component.ts");
/* harmony import */ var _pages_production_product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/production/product/product.component */ "./src/app/pages/production/product/product.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _pages_production_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/production/product-detail/product-detail.component */ "./src/app/pages/production/product-detail/product-detail.component.ts");










const routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "product", component: _pages_production_product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"] },
    { path: "demand", component: _pages_production_demand_demand_component__WEBPACK_IMPORTED_MODULE_6__["DemandComponent"] },
    { path: "information", component: _pages_user_information_information_component__WEBPACK_IMPORTED_MODULE_4__["InformationComponent"] },
    { path: "warehouse", component: _pages_user_warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_5__["WarehouseComponent"] },
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: "product/detail", component: _pages_production_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_9__["ProductDetailComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./database.service */ "./src/app/database.service.ts");



let AppComponent = class AppComponent {
    constructor(data) {
        this.data = data;
        this.title = "foodtransaction";
        this.name = "sunny";
    }
    ngOnInit() {
        const head = document.querySelector(".head");
        document.documentElement.style.setProperty("--header-margin", head.clientHeight + "px");
    }
    logout() {
        this.data.isLogin = false;
    }
};
AppComponent.ctorParameters = () => [
    { type: _database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_user_warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/user/warehouse/warehouse.component */ "./src/app/pages/user/warehouse/warehouse.component.ts");
/* harmony import */ var _pages_user_information_information_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/user/information/information.component */ "./src/app/pages/user/information/information.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_card_domand_card_domand_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/card-domand/card-domand.component */ "./src/app/components/card-domand/card-domand.component.ts");
/* harmony import */ var _components_card_need_card_need_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/card-need/card-need.component */ "./src/app/components/card-need/card-need.component.ts");
/* harmony import */ var _components_card_my_card_my_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/card-my/card-my.component */ "./src/app/components/card-my/card-my.component.ts");
/* harmony import */ var _pages_production_product_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/production/product/product.component */ "./src/app/pages/production/product/product.component.ts");
/* harmony import */ var _pages_production_demand_demand_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/production/demand/demand.component */ "./src/app/pages/production/demand/demand.component.ts");
/* harmony import */ var _components_board_board_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/board/board.component */ "./src/app/components/board/board.component.ts");
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/title/title.component */ "./src/app/components/title/title.component.ts");
/* harmony import */ var _components_recommend_recommend_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/recommend/recommend.component */ "./src/app/components/recommend/recommend.component.ts");
/* harmony import */ var _pages_production_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/production/product-detail/product-detail.component */ "./src/app/pages/production/product-detail/product-detail.component.ts");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _pages_user_warehouse_warehouse_component__WEBPACK_IMPORTED_MODULE_6__["WarehouseComponent"],
            _pages_user_information_information_component__WEBPACK_IMPORTED_MODULE_7__["InformationComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _components_card_domand_card_domand_component__WEBPACK_IMPORTED_MODULE_9__["CardDomandComponent"],
            _components_card_need_card_need_component__WEBPACK_IMPORTED_MODULE_10__["CardNeedComponent"],
            _components_card_my_card_my_component__WEBPACK_IMPORTED_MODULE_11__["CardMyComponent"],
            _pages_production_product_product_component__WEBPACK_IMPORTED_MODULE_12__["ProductComponent"],
            _pages_production_demand_demand_component__WEBPACK_IMPORTED_MODULE_13__["DemandComponent"],
            _components_board_board_component__WEBPACK_IMPORTED_MODULE_14__["BoardComponent"],
            _components_title_title_component__WEBPACK_IMPORTED_MODULE_15__["TitleComponent"],
            _components_recommend_recommend_component__WEBPACK_IMPORTED_MODULE_16__["RecommendComponent"],
            _pages_production_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_17__["ProductDetailComponent"]
        ],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/board/board.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/board/board.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header.board {\n  position: relative;\n  width: 100%;\n  height: 250px;\n  background: var(--color-prime-linear);\n  padding: 1rem 1.5rem;\n  margin-top: var(--header-margin);\n}\n\nheader.board .board-title {\n  font-size: 2rem;\n}\n\nheader.board .board-subtitle {\n  font-size: 1rem;\n}\n\nheader.board .fastRoute {\n  position: absolute;\n  right: 1rem;\n  bottom: 0.5rem;\n  display: flex;\n}\n\nheader.board .fastRoute div {\n  width: 150px;\n  height: 150px;\n  margin: 0.25rem;\n}\n\n.fastRoute .warehousePage {\n  background: url('btn_warehouse.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center center;\n  order: 3;\n}\n\n.fastRoute .searchPage {\n  background: url('btn_search.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center center;\n  order: 2;\n}\n\n.fastRoute .newsPage {\n  background: url('btn_news.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center center;\n  order: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib2FyZC9DOlxcVXNlcnNcXHVzZXJcXERvY3VtZW50c1xcZm9vZHRyYW5zYWN0aW9uL3NyY1xcYXBwXFxjb21wb25lbnRzXFxib2FyZFxcYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYm9hcmQvYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ0FGOztBRENFO0VBQ0UsWUFQVztFQVFYLGFBUlc7RUFTWCxlQUFBO0FDQ0o7O0FER0E7RUFDRSxvQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFFBQUE7QUNBRjs7QURHQTtFQUNFLGlDQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsUUFBQTtBQ0FGOztBREdBO0VBQ0UsK0JBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxRQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyLmJvYXJkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltZS1saW5lYXIpO1xyXG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xyXG4gIG1hcmdpbi10b3A6IHZhcigtLWhlYWRlci1tYXJnaW4pO1xyXG59XHJcblxyXG5oZWFkZXIuYm9hcmQgLmJvYXJkLXRpdGxlIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbmhlYWRlci5ib2FyZCAuYm9hcmQtc3VidGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuJGZhc3RCdG4tc2l6ZTogMTUwcHg7XHJcbmhlYWRlci5ib2FyZCAuZmFzdFJvdXRlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDFyZW07XHJcbiAgYm90dG9tOiAwLjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBkaXYge1xyXG4gICAgd2lkdGg6ICRmYXN0QnRuLXNpemU7XHJcbiAgICBoZWlnaHQ6ICRmYXN0QnRuLXNpemU7XHJcbiAgICBtYXJnaW46IDAuMjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uZmFzdFJvdXRlIC53YXJlaG91c2VQYWdlIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYnRuL2J0bl93YXJlaG91c2UucG5nKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIG9yZGVyOiAzO1xyXG59XHJcblxyXG4uZmFzdFJvdXRlIC5zZWFyY2hQYWdlIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYnRuLy9idG5fc2VhcmNoLnBuZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBvcmRlcjogMjtcclxufVxyXG5cclxuLmZhc3RSb3V0ZSAubmV3c1BhZ2Uge1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1ncy9idG4vL2J0bl9uZXdzLnBuZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBvcmRlcjogMTtcclxufVxyXG4iLCJoZWFkZXIuYm9hcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1MHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltZS1saW5lYXIpO1xuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgbWFyZ2luLXRvcDogdmFyKC0taGVhZGVyLW1hcmdpbik7XG59XG5cbmhlYWRlci5ib2FyZCAuYm9hcmQtdGl0bGUge1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbmhlYWRlci5ib2FyZCAuYm9hcmQtc3VidGl0bGUge1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbmhlYWRlci5ib2FyZCAuZmFzdFJvdXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMXJlbTtcbiAgYm90dG9tOiAwLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5oZWFkZXIuYm9hcmQgLmZhc3RSb3V0ZSBkaXYge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbjogMC4yNXJlbTtcbn1cblxuLmZhc3RSb3V0ZSAud2FyZWhvdXNlUGFnZSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1ncy9idG4vYnRuX3dhcmVob3VzZS5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIG9yZGVyOiAzO1xufVxuXG4uZmFzdFJvdXRlIC5zZWFyY2hQYWdlIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdzL2J0bi8vYnRuX3NlYXJjaC5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIG9yZGVyOiAyO1xufVxuXG4uZmFzdFJvdXRlIC5uZXdzUGFnZSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1ncy9idG4vL2J0bl9uZXdzLnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgb3JkZXI6IDE7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/board/board.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/board/board.component.ts ***!
  \*****************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BoardComponent = class BoardComponent {
    constructor() { }
    ngOnInit() {
    }
};
BoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-board',
        template: __webpack_require__(/*! raw-loader!./board.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/board/board.component.html"),
        styles: [__webpack_require__(/*! ./board.component.scss */ "./src/app/components/board/board.component.scss")]
    })
], BoardComponent);



/***/ }),

/***/ "./src/app/components/card-domand/card-domand.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/card-domand/card-domand.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  position: relative;\n  width: 10.7rem;\n  height: 12.05rem;\n  background: white;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);\n  border-radius: 0.5rem;\n  margin: 0.25rem;\n  padding: 0.8rem;\n}\n\n.card-img {\n  width: 100%;\n  height: 100px;\n  border-radius: 0.5rem;\n  background: #ccc;\n  overflow: hidden;\n}\n\n.card-img img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n\n.card-title {\n  margin: 0.25rem 0;\n  font-size: 1rem;\n}\n\n.card-text {\n  padding-left: 0.25rem;\n  font-size: 0.6rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: var(--color-pure-light);\n}\n\n.date {\n  position: absolute;\n  right: 0.5rem;\n  bottom: 0.5rem;\n  font-size: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkLWRvbWFuZC9DOlxcVXNlcnNcXHVzZXJcXERvY3VtZW50c1xcZm9vZHRyYW5zYWN0aW9uL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjYXJkLWRvbWFuZFxcY2FyZC1kb21hbmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZC1kb21hbmQvY2FyZC1kb21hbmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMENBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREFFO0VBQ0Usb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRUo7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJkLWRvbWFuZC9jYXJkLWRvbWFuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwLjdyZW07XHJcbiAgaGVpZ2h0OiAxMi4wNXJlbTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIG1hcmdpbjogMC4yNXJlbTtcclxuICBwYWRkaW5nOiAwLjhyZW07XHJcbn1cclxuXHJcbi5jYXJkLWltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgYmFja2dyb3VuZDogI2NjYztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGltZyB7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmQtdGl0bGUge1xyXG4gIG1hcmdpbjogMC4yNXJlbSAwO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLmNhcmQtdGV4dCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLXB1cmUtbGlnaHQpO1xyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwLjVyZW07XHJcbiAgYm90dG9tOiAwLjVyZW07XHJcbiAgZm9udC1zaXplOiAwLjVyZW07XHJcbn1cclxuIiwiLmNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMC43cmVtO1xuICBoZWlnaHQ6IDEyLjA1cmVtO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIG1hcmdpbjogMC4yNXJlbTtcbiAgcGFkZGluZzogMC44cmVtO1xufVxuXG4uY2FyZC1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNhcmQtaW1nIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIG1hcmdpbjogMC4yNXJlbSAwO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5jYXJkLXRleHQge1xuICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW07XG4gIGZvbnQtc2l6ZTogMC42cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgY29sb3I6IHZhcigtLWNvbG9yLXB1cmUtbGlnaHQpO1xufVxuXG4uZGF0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDAuNXJlbTtcbiAgYm90dG9tOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMC41cmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/card-domand/card-domand.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/card-domand/card-domand.component.ts ***!
  \*****************************************************************/
/*! exports provided: CardDomandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDomandComponent", function() { return CardDomandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/database.service */ "./src/app/database.service.ts");




let CardDomandComponent = class CardDomandComponent {
    constructor(router, data) {
        this.router = router;
        this.data = data;
    }
    ngOnInit() { }
    toDetail() {
        this.data.product = this.item;
        this.router.navigate(["/product/detail"]);
    }
};
CardDomandComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardDomandComponent.prototype, "item", void 0);
CardDomandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-card-domand",
        template: __webpack_require__(/*! raw-loader!./card-domand.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/card-domand/card-domand.component.html"),
        styles: [__webpack_require__(/*! ./card-domand.component.scss */ "./src/app/components/card-domand/card-domand.component.scss")]
    })
], CardDomandComponent);



/***/ }),

/***/ "./src/app/components/card-my/card-my.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/card-my/card-my.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZC1teS9jYXJkLW15LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/card-my/card-my.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/card-my/card-my.component.ts ***!
  \*********************************************************/
/*! exports provided: CardMyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardMyComponent", function() { return CardMyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CardMyComponent = class CardMyComponent {
    constructor() { }
    ngOnInit() {
    }
};
CardMyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card-my',
        template: __webpack_require__(/*! raw-loader!./card-my.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/card-my/card-my.component.html"),
        styles: [__webpack_require__(/*! ./card-my.component.scss */ "./src/app/components/card-my/card-my.component.scss")]
    })
], CardMyComponent);



/***/ }),

/***/ "./src/app/components/card-need/card-need.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/card-need/card-need.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZC1uZWVkL2NhcmQtbmVlZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/card-need/card-need.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/card-need/card-need.component.ts ***!
  \*************************************************************/
/*! exports provided: CardNeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardNeedComponent", function() { return CardNeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CardNeedComponent = class CardNeedComponent {
    constructor() { }
    ngOnInit() {
    }
};
CardNeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card-need',
        template: __webpack_require__(/*! raw-loader!./card-need.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/card-need/card-need.component.html"),
        styles: [__webpack_require__(/*! ./card-need.component.scss */ "./src/app/components/card-need/card-need.component.scss")]
    })
], CardNeedComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main.login {\n  width: 100%;\n  height: 100vh;\n  background: var(--color-pure-light);\n  margin-top: var(--header-margin);\n  padding: 5rem;\n}\n\n.login-background {\n  margin: 0 auto;\n  max-width: 1000px;\n  background: var(--color-prime-linear);\n  display: flex;\n  align-items: stretch;\n  justify-content: space-around;\n  padding: 1.5rem;\n  border-radius: 0.5rem;\n}\n\n.login-content {\n  flex: 1 1 300px;\n  padding: 1rem;\n  background: var(--color-pure-white);\n  border-radius: 0.5rem;\n}\n\n.login-title {\n  flex: 1 1 calc(100% - 300px);\n  padding: 2rem;\n  color: var(--color-pure-white);\n}\n\n.login-title h1 {\n  text-shadow: 2px 2px 5px var(--color-pure-dark);\n}\n\np.t5 {\n  margin: 0.1rem;\n  font-size: 0.5rem;\n  font-weight: 200;\n  text-align: end;\n}\n\np.t1 {\n  margin: 0.1rem;\n  font-size: 0.75rem;\n  font-weight: 300;\n  text-align: center;\n  color: var(--color-green-dark);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9DOlxcVXNlcnNcXHVzZXJcXERvY3VtZW50c1xcZm9vZHRyYW5zYWN0aW9uL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSwrQ0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluLmxvZ2luIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXB1cmUtbGlnaHQpO1xyXG4gIG1hcmdpbi10b3A6IHZhcigtLWhlYWRlci1tYXJnaW4pO1xyXG4gIHBhZGRpbmc6IDVyZW07XHJcbn1cclxuXHJcbi5sb2dpbi1iYWNrZ3JvdW5kIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltZS1saW5lYXIpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxufVxyXG5cclxuLmxvZ2luLWNvbnRlbnQge1xyXG4gIGZsZXg6IDEgMSAzMDBweDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXB1cmUtd2hpdGUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxufVxyXG5cclxuLmxvZ2luLXRpdGxlIHtcclxuICBmbGV4OiAxIDEgY2FsYygxMDAlIC0gMzAwcHgpO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLXB1cmUtd2hpdGUpO1xyXG59XHJcblxyXG4ubG9naW4tdGl0bGUgaDEge1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDVweCB2YXIoLS1jb2xvci1wdXJlLWRhcmspO1xyXG59XHJcblxyXG5wLnQ1IHtcclxuICBtYXJnaW46IDAuMXJlbTtcclxuICBmb250LXNpemU6IDAuNXJlbTtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG5cclxucC50MSB7XHJcbiAgbWFyZ2luOiAwLjFyZW07XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbi1kYXJrKTtcclxufVxyXG4iLCJtYWluLmxvZ2luIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXB1cmUtbGlnaHQpO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1oZWFkZXItbWFyZ2luKTtcbiAgcGFkZGluZzogNXJlbTtcbn1cblxuLmxvZ2luLWJhY2tncm91bmQge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1lLWxpbmVhcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZzogMS41cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG5cbi5sb2dpbi1jb250ZW50IHtcbiAgZmxleDogMSAxIDMwMHB4O1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wdXJlLXdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuXG4ubG9naW4tdGl0bGUge1xuICBmbGV4OiAxIDEgY2FsYygxMDAlIC0gMzAwcHgpO1xuICBwYWRkaW5nOiAycmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHVyZS13aGl0ZSk7XG59XG5cbi5sb2dpbi10aXRsZSBoMSB7XG4gIHRleHQtc2hhZG93OiAycHggMnB4IDVweCB2YXIoLS1jb2xvci1wdXJlLWRhcmspO1xufVxuXG5wLnQ1IHtcbiAgbWFyZ2luOiAwLjFyZW07XG4gIGZvbnQtc2l6ZTogMC41cmVtO1xuICBmb250LXdlaWdodDogMjAwO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5cbnAudDEge1xuICBtYXJnaW46IDAuMXJlbTtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbi1kYXJrKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/database.service */ "./src/app/database.service.ts");




let LoginComponent = class LoginComponent {
    constructor(router, data) {
        this.router = router;
        this.data = data;
    }
    ngOnInit() { }
    login() {
        this.data.isLogin = true;
        this.router.navigate(["/home"]);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/recommend/recommend.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/recommend/recommend.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".new-set {\n  max-width: calc((214px + 0.5rem) * 5);\n  margin: 0 auto;\n  overflow: hidden;\n  white-space: nowrap;\n  padding: 0;\n}\n\n.new-set li {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWNvbW1lbmQvQzpcXFVzZXJzXFx1c2VyXFxEb2N1bWVudHNcXGZvb2R0cmFuc2FjdGlvbi9zcmNcXGFwcFxcY29tcG9uZW50c1xccmVjb21tZW5kXFxyZWNvbW1lbmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcmVjb21tZW5kL3JlY29tbWVuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWNvbW1lbmQvcmVjb21tZW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldy1zZXQge1xyXG4gIG1heC13aWR0aDogY2FsYygoMjE0cHggKyAwLjVyZW0pICogNSk7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5uZXctc2V0IGxpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuIiwiLm5ldy1zZXQge1xuICBtYXgtd2lkdGg6IGNhbGMoKDIxNHB4ICsgMC41cmVtKSAqIDUpO1xuICBtYXJnaW46IDAgYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcGFkZGluZzogMDtcbn1cblxuLm5ldy1zZXQgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/recommend/recommend.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/recommend/recommend.component.ts ***!
  \*************************************************************/
/*! exports provided: RecommendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendComponent", function() { return RecommendComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RecommendComponent = class RecommendComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RecommendComponent.prototype, "data", void 0);
RecommendComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-recommend",
        template: __webpack_require__(/*! raw-loader!./recommend.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/recommend/recommend.component.html"),
        styles: [__webpack_require__(/*! ./recommend.component.scss */ "./src/app/components/recommend/recommend.component.scss")]
    })
], RecommendComponent);



/***/ }),

/***/ "./src/app/components/title/title.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/title/title.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section {\n  width: 100%;\n  margin: 1rem auto;\n}\n\n.section .sec-title {\n  position: relative;\n  width: 100%;\n  background: var(--color-green-prime);\n  padding: 0.5rem 1rem;\n}\n\n.section .sec-body {\n  width: 100%;\n  margin: 0.5rem auto;\n}\n\n.switch {\n  position: absolute;\n  right: 0%;\n  top: 0%;\n  padding: 0.5rem 1rem;\n  display: flex;\n}\n\n.switch .switch-btn {\n  padding: 0.1rem 1rem;\n  border: 1px solid var(--color-secondary);\n  color: var(--color-secondary);\n  font-size: 0.8rem;\n  margin: 0 0.1rem;\n}\n\n.switch .switch-btn--actived {\n  color: var(--color-green-prime);\n  border: unset;\n  background: var(--color-secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aXRsZS9DOlxcVXNlcnNcXHVzZXJcXERvY3VtZW50c1xcZm9vZHRyYW5zYWN0aW9uL3NyY1xcYXBwXFxjb21wb25lbnRzXFx0aXRsZVxcdGl0bGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdGl0bGUvdGl0bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFDQSx3Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsK0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGl0bGUvdGl0bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbn1cclxuXHJcbi5zZWN0aW9uIC5zZWMtdGl0bGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ncmVlbi1wcmltZSk7XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbn1cclxuXHJcbi5zZWN0aW9uIC5zZWMtYm9keSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwLjVyZW0gYXV0bztcclxufVxyXG5cclxuLnN3aXRjaCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwJTtcclxuICB0b3A6IDAlO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5zd2l0Y2ggLnN3aXRjaC1idG4ge1xyXG4gIHBhZGRpbmc6IDAuMXJlbSAxcmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgbWFyZ2luOiAwIDAuMXJlbTtcclxufVxyXG5cclxuLnN3aXRjaCAuc3dpdGNoLWJ0bi0tYWN0aXZlZCB7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLWdyZWVuLXByaW1lKTtcclxuICBib3JkZXI6IHVuc2V0O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbn1cclxuIiwiLnNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG59XG5cbi5zZWN0aW9uIC5zZWMtdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ncmVlbi1wcmltZSk7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xufVxuXG4uc2VjdGlvbiAuc2VjLWJvZHkge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwLjVyZW0gYXV0bztcbn1cblxuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDAlO1xuICB0b3A6IDAlO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnN3aXRjaCAuc3dpdGNoLWJ0biB7XG4gIHBhZGRpbmc6IDAuMXJlbSAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIG1hcmdpbjogMCAwLjFyZW07XG59XG5cbi5zd2l0Y2ggLnN3aXRjaC1idG4tLWFjdGl2ZWQge1xuICBjb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4tcHJpbWUpO1xuICBib3JkZXI6IHVuc2V0O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/title/title.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/title/title.component.ts ***!
  \*****************************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TitleComponent = class TitleComponent {
    constructor() { }
    ngOnInit() {
        if (this.switchList) {
            this.switchBtnList = this.switchList;
            console.log(this.switchBtnList);
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("title")
], TitleComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("switchList")
], TitleComponent.prototype, "switchList", void 0);
TitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-title",
        template: __webpack_require__(/*! raw-loader!./title.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/title/title.component.html"),
        styles: [__webpack_require__(/*! ./title.component.scss */ "./src/app/components/title/title.component.scss")]
    })
], TitleComponent);



/***/ }),

/***/ "./src/app/database.service.ts":
/*!*************************************!*\
  !*** ./src/app/database.service.ts ***!
  \*************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DatabaseService = class DatabaseService {
    constructor() {
        this.isLogin = false;
        this.product = {};
        this.stockInfo = [
            {
                name: "山水米池Q米",
                text: "不知道要寫些什麼，假資料裡沒有 01",
                upDate: "2019/09/01",
                endDate: "2019/11/01",
                ValidDate: "2019/12/03",
                amount: "15",
                image: "./assets/imgs/stock/img_01.jpg"
            },
            {
                name: "味王婦友醬油",
                text: "不知道要寫些什麼，假資料裡沒有 02",
                upDate: "2019/09/01",
                endDate: "2019/11/01",
                ValidDate: "2019/12/03",
                amount: "10",
                image: "./assets/imgs/stock/img_02.jpg"
            },
            {
                name: "統一科學麵",
                text: "不知道要寫些什麼，假資料裡沒有 03",
                upDate: "2019/09/01",
                endDate: "2019/11/01",
                ValidDate: "2019/12/03",
                amount: "112",
                image: "./assets/imgs/stock/img_03.jpg"
            },
            {
                name: "電鍋",
                text: "不知道要寫些什麼，假資料裡沒有 04",
                upDate: "2019/09/01",
                endDate: "2019/11/01",
                ValidDate: "2019/12/03",
                amount: "2",
                image: "./assets/imgs/stock/img_04.jpg"
            },
            {
                name: "來復易清爽俐落褲",
                text: "不知道要寫些什麼，假資料裡沒有 05",
                upDate: "2019/09/01",
                endDate: "2019/11/01",
                ValidDate: "2019/12/03",
                amount: "1",
                image: "./assets/imgs/stock/img_05.jpg"
            }
        ];
    }
};
DatabaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], DatabaseService);



/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/database.service */ "./src/app/database.service.ts");



let HomeComponent = class HomeComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() { }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/production/demand/demand.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/production/demand/demand.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3Rpb24vZGVtYW5kL2RlbWFuZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/production/demand/demand.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/production/demand/demand.component.ts ***!
  \*************************************************************/
/*! exports provided: DemandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandComponent", function() { return DemandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DemandComponent = class DemandComponent {
    constructor() {
        this.switchList = [
            {
                route: "product",
                name: "物資供給",
                actived: false
            },
            {
                route: "demand",
                name: "物資需求",
                actived: true
            }
        ];
    }
    ngOnInit() { }
};
DemandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-demand",
        template: __webpack_require__(/*! raw-loader!./demand.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/production/demand/demand.component.html"),
        styles: [__webpack_require__(/*! ./demand.component.scss */ "./src/app/pages/production/demand/demand.component.scss")]
    })
], DemandComponent);



/***/ }),

/***/ "./src/app/pages/production/product-detail/product-detail.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/production/product-detail/product-detail.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  position: relative;\n  width: 100%;\n  background: var(--color-pure-white);\n  padding: 1.5rem;\n  display: flex;\n  align-items: stretch;\n  justify-content: space-between;\n}\n\n.data-img {\n  flex: 1 1 320px;\n  width: 320px;\n  height: 200px;\n}\n\n.data-img img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.data-content {\n  flex: 1 1 calc(100% - 450px);\n  padding: 0 1.5rem;\n  display: flex;\n  align-items: stretch;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.data-title {\n  display: flex;\n  align-items: stretch;\n  justify-content: space-between;\n}\n\n.data-info {\n  font-size: 0.6rem;\n}\n\n.btn-box {\n  position: absolute;\n  right: 1rem;\n  bottom: 1rem;\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdGlvbi9wcm9kdWN0LWRldGFpbC9DOlxcVXNlcnNcXHVzZXJcXERvY3VtZW50c1xcZm9vZHRyYW5zYWN0aW9uL3NyY1xcYXBwXFxwYWdlc1xccHJvZHVjdGlvblxccHJvZHVjdC1kZXRhaWxcXHByb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0aW9uL3Byb2R1Y3QtZGV0YWlsL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDRUo7O0FERUE7RUFDRSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdGlvbi9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHVyZS13aGl0ZSk7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZGF0YS1pbWcge1xyXG4gIGZsZXg6IDEgMSAzMjBweDtcclxuICB3aWR0aDogMzIwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbn1cclxuXHJcbi5kYXRhLWNvbnRlbnQge1xyXG4gIGZsZXg6IDEgMSBjYWxjKDEwMCUgLSA0NTBweCk7XHJcbiAgcGFkZGluZzogMCAxLjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmRhdGEtdGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZGF0YS1pbmZvIHtcclxuICBmb250LXNpemU6IDAuNnJlbTtcclxufVxyXG5cclxuLmJ0bi1ib3gge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMXJlbTtcclxuICBib3R0b206IDFyZW07XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcbiIsIi5jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHVyZS13aGl0ZSk7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmRhdGEtaW1nIHtcbiAgZmxleDogMSAxIDMyMHB4O1xuICB3aWR0aDogMzIwcHg7XG4gIGhlaWdodDogMjAwcHg7XG59XG4uZGF0YS1pbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5kYXRhLWNvbnRlbnQge1xuICBmbGV4OiAxIDEgY2FsYygxMDAlIC0gNDUwcHgpO1xuICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmRhdGEtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZGF0YS1pbmZvIHtcbiAgZm9udC1zaXplOiAwLjZyZW07XG59XG5cbi5idG4tYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMXJlbTtcbiAgYm90dG9tOiAxcmVtO1xuICB3aWR0aDogMTUwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/production/product-detail/product-detail.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/production/product-detail/product-detail.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/database.service */ "./src/app/database.service.ts");



let ProductDetailComponent = class ProductDetailComponent {
    constructor(data) {
        this.data = data;
        this.product = {};
        this.product = this.data.product;
        console.log(this.product);
    }
    ngOnInit() { }
    check() {
        alert("成功發送取獲通知！你可以聯絡該單位了！");
    }
};
ProductDetailComponent.ctorParameters = () => [
    { type: src_app_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] }
];
ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-product-detail",
        template: __webpack_require__(/*! raw-loader!./product-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/production/product-detail/product-detail.component.html"),
        styles: [__webpack_require__(/*! ./product-detail.component.scss */ "./src/app/pages/production/product-detail/product-detail.component.scss")]
    })
], ProductDetailComponent);



/***/ }),

/***/ "./src/app/pages/production/product/product.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/production/product/product.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".domand-box {\n  display: flex;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdGlvbi9wcm9kdWN0L0M6XFxVc2Vyc1xcdXNlclxcRG9jdW1lbnRzXFxmb29kdHJhbnNhY3Rpb24vc3JjXFxhcHBcXHBhZ2VzXFxwcm9kdWN0aW9uXFxwcm9kdWN0XFxwcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0aW9uL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0aW9uL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kb21hbmQtYm94IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4iLCIuZG9tYW5kLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/production/product/product.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/production/product/product.component.ts ***!
  \***************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/database.service */ "./src/app/database.service.ts");



let ProductComponent = class ProductComponent {
    constructor(data) {
        this.data = data;
        this.switchList = [
            {
                route: "product",
                name: "物資供給",
                actived: true
            },
            {
                route: "demand",
                name: "物資需求",
                actived: false
            }
        ];
    }
    ngOnInit() { }
};
ProductComponent.ctorParameters = () => [
    { type: src_app_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] }
];
ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-product",
        template: __webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/production/product/product.component.html"),
        styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/pages/production/product/product.component.scss")]
    })
], ProductComponent);



/***/ }),

/***/ "./src/app/pages/user/information/information.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/user/information/information.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvaW5mb3JtYXRpb24vaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/user/information/information.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/user/information/information.component.ts ***!
  \*****************************************************************/
/*! exports provided: InformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationComponent", function() { return InformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InformationComponent = class InformationComponent {
    constructor() { }
    ngOnInit() {
    }
};
InformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-information',
        template: __webpack_require__(/*! raw-loader!./information.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/user/information/information.component.html"),
        styles: [__webpack_require__(/*! ./information.component.scss */ "./src/app/pages/user/information/information.component.scss")]
    })
], InformationComponent);



/***/ }),

/***/ "./src/app/pages/user/warehouse/warehouse.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/user/warehouse/warehouse.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvd2FyZWhvdXNlL3dhcmVob3VzZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/user/warehouse/warehouse.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/user/warehouse/warehouse.component.ts ***!
  \*************************************************************/
/*! exports provided: WarehouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseComponent", function() { return WarehouseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WarehouseComponent = class WarehouseComponent {
    constructor() {
        this.switchList = [
            {
                route: "warehouse",
                name: "物資清單",
                actived: true
            },
            {
                route: "information",
                name: "用戶資訊",
                actived: false
            }
        ];
    }
    ngOnInit() { }
};
WarehouseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-warehouse",
        template: __webpack_require__(/*! raw-loader!./warehouse.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/user/warehouse/warehouse.component.html"),
        styles: [__webpack_require__(/*! ./warehouse.component.scss */ "./src/app/pages/user/warehouse/warehouse.component.scss")]
    })
], WarehouseComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\Documents\foodtransaction\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
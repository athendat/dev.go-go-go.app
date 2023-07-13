"use strict";
(self["webpackChunkgo_go_go"] = self["webpackChunkgo_go_go"] || []).push([["main"],{

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5046);
/* harmony import */ var _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/common/footer/footer.component */ 6442);
/* harmony import */ var _components_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/common/navbar/navbar.component */ 7902);
/* harmony import */ var _components_common_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/common/preloader/preloader.component */ 1881);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);



// Thirds Modules

// Components





function AppComponent_app_navbar_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-navbar");
  }
}
function AppComponent_app_footer_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-footer");
  }
}
class AppComponent {
  constructor(router) {
    (0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "router", void 0);
    (0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "location", void 0);
    (0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "routerSubscription", void 0);
    this.router = router;
  }
  ngOnInit() {
    this.recallJsFuntions();
  }
  recallJsFuntions() {
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationStart) {
        $('.preloader').fadeIn('slow');
      }
    });
    this.routerSubscription = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationCancel)).subscribe(event => {
      $.getScript('../assets/js/custom.js');
      $('.preloader').fadeOut('slow');
      this.location = this.router.url;
      if (!(event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppComponent, "\u0275fac", function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
});
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["ath-root"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_7__.Location, {
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_7__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_7__.PathLocationStrategy
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
  decls: 4,
  vars: 2,
  consts: [[4, "ngIf"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-preloader");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AppComponent_app_navbar_1_Template, 1, 0, "app-navbar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AppComponent_app_footer_3_Template, 1, 0, "app-footer", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(ctx.location == "/coming-soon"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(ctx.location == "/coming-soon"));
    }
  },
  dependencies: [_components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _components_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _components_common_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_3__.PreloaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 34:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_pages_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pages/coming-soon/coming-soon.component */ 3255);
/* harmony import */ var _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/error/error.component */ 4837);
/* harmony import */ var _components_pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/faq/faq.component */ 9995);
/* harmony import */ var _components_pages_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/gallery/gallery.component */ 758);
/* harmony import */ var _components_pages_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/privacy-policy/privacy-policy.component */ 4150);
/* harmony import */ var _components_pages_services_details_services_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/services-details/services-details.component */ 6763);
/* harmony import */ var _components_pages_services_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/services/services.component */ 8995);
/* harmony import */ var _components_pages_team_team_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/team/team.component */ 2813);
/* harmony import */ var _components_pages_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/terms-conditions/terms-conditions.component */ 3764);
/* harmony import */ var _components_pages_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pages/testimonials/testimonials.component */ 9117);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);














const routes = [
// Redirect empty path to '/home'
{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
},
// Home
{
  path: 'home',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_pages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/pages/home/home.module */ 4937)).then(m => m.HomeModule)
},
// About
{
  path: 'about',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./components/pages/about/about.module */ 5859)).then(m => m.AboutModule)
},
// Contact
{
  path: 'contact',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./components/pages/contact/contact.module */ 7663)).then(m => m.ContactModule)
}, {
  path: 'team',
  component: _components_pages_team_team_component__WEBPACK_IMPORTED_MODULE_8__.TeamComponent
}, {
  path: 'testimonials',
  component: _components_pages_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_10__.TestimonialsComponent
}, {
  path: 'gallery',
  component: _components_pages_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__.GalleryComponent
}, {
  path: 'faq',
  component: _components_pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_3__.FaqComponent
}, {
  path: 'privacy-policy',
  component: _components_pages_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_5__.PrivacyPolicyComponent
}, {
  path: 'terms-conditions',
  component: _components_pages_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_9__.TermsConditionsComponent
}, {
  path: 'coming-soon',
  component: _components_pages_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_1__.ComingSoonComponent
}, {
  path: 'error',
  component: _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_2__.ErrorComponent
}, {
  path: 'services',
  component: _components_pages_services_services_component__WEBPACK_IMPORTED_MODULE_7__.ServicesComponent
}, {
  path: 'services-details',
  component: _components_pages_services_details_services_details_component__WEBPACK_IMPORTED_MODULE_6__.ServicesDetailsComponent
}, {
  path: '**',
  component: _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_2__.ErrorComponent
} // This line will remain down from the whole component list
];

class AppRoutingModule {}
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppRoutingModule, "\u0275fac", function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
});
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppRoutingModule, "\u0275mod", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
}));
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AppRoutingModule, "\u0275inj", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
}));
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
  });
})();

/***/ }),

/***/ 6442:
/*!**************************************************************!*\
  !*** ./src/app/components/common/footer/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);



class FooterComponent {
  constructor() {}
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  /**
   * Getter for current year
   */
  get currentYear() {
    return new Date().getFullYear();
  }
  ngOnInit() {}
}
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(FooterComponent, "\u0275fac", function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
});
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(FooterComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 81,
  vars: 1,
  consts: [[1, "footer-area", "pt-100", "pb-70"], [1, "container"], [1, "row"], [1, "col-lg-3", "col-sm-6"], [1, "footer-widget"], [1, "logo"], ["src", "assets/img/logo-text.svg", "alt", "logo"], [1, "footer-socials"], ["href", "https://www.facebook.com/profile.php?id=100094867050628", "target", "_blank"], [1, "bx", "bxl-facebook"], ["href", "#", "target", "_blank"], [1, "bx", "bxl-twitter"], ["href", "https://www.linkedin.com/showcase/go-go-go-app", "target", "_blank"], [1, "bx", "bxl-linkedin"], ["href", "https://goo.gl/maps/BWA8LQgekv4VN4Nq9", "target", "_blank"], [1, "bx", "bxs-map"], [1, "footer-widget", "pl-80"], [1, "footer-text"], ["routerLink", "/about"], ["routerLink", "/services"], ["routerLink", "/"], ["routerLink", "/contact"], [1, "footer-widget", "pl-50"], ["routerLink", "/privacy-policy"], ["routerLink", "/terms-conditions"], ["routerLink", "/faq"], [1, "info-list"], [1, "bx", "bxs-map-pin"], ["href", "https://goo.gl/maps/BWA8LQgekv4VN4Nq9"], [1, "bx", "bxs-envelope"], ["href", "mailto:info@go-go-go.app"], [1, "bx", "bxs-phone"], ["href", "tel:+535-254-1322"], [1, "footer-bottom"], ["href", "https://athendat.site", "target", "_blank", "rel", "noopener noreferrer"], [1, "go-top"], [1, "bx", "bx-chevrons-up"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " ATHENDAT s.r.l. una empresa que ofrece soluciones tecnol\u00F3gicas para potenciar los beneficios econ\u00F3micos de otros negocios mediante plataformas digitales de gesti\u00F3n empresarial, comercio electr\u00F3nico y operaci\u00F3n log\u00EDstica. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 7)(10, "li")(11, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li")(14, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li")(17, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li")(20, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 3)(23, "div", 16)(24, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Empresa");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ul", 17)(27, "li")(28, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Sobre nosotros");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li")(31, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Servicios");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li")(34, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Cotizaciones");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li")(37, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Cont\u00E1ctenos");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 3)(40, "div", 22)(41, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Informaci\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ul", 17)(44, "li")(45, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Aviso Legal");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li")(48, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Pol\u00EDtica de Privacidad");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li")(51, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "T\u00E9rminos y Condiciones");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "li")(54, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "FAQ's");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 3)(57, "div", 4)(58, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Cont\u00E1ctenos");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "ul", 26)(61, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Calle La Sola #307, entre Santa Catalina y Milagros, municipio Diez de Octubre, c\u00F3digo postal 10700, provincia La Habana, Rep\u00FAblica de Cuba.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "i", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "info@go-go-go.app");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "i", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "+535 254 1322");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 33)(74, "div", 1)(75, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "a", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "ATHENDAT");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "i", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](76);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u00A9 ", ctx.currentYear, " Desarrollado y mantenido por ");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 7902:
/*!**************************************************************!*\
  !*** ./src/app/components/common/navbar/navbar.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);



const _c0 = function () {
  return {
    exact: true
  };
};
class NavbarComponent {
  constructor() {}
  ngOnInit() {}
}
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(NavbarComponent, "\u0275fac", function NavbarComponent_Factory(t) {
  return new (t || NavbarComponent)();
});
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(NavbarComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavbarComponent,
  selectors: [["app-navbar"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 51,
  vars: 6,
  consts: [[1, "header-area"], [1, "top-header"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-sm-6"], [1, "left-info"], ["href", "mailto:info@go-go-go.app"], [1, "bx", "bxs-envelope"], ["href", "tel:+535-254-1322"], [1, "bx", "bxs-phone-call"], [1, "right-info"], ["href", "https://www.facebook.com/profile.php?id=100094867050628", "target", "_blank"], [1, "bx", "bxl-facebook"], ["href", "#", "target", "_blank"], [1, "bx", "bxl-twitter"], ["href", "https://www.linkedin.com/showcase/go-go-go-app", "target", "_blank"], [1, "bx", "bxl-linkedin"], ["href", "https://goo.gl/maps/BWA8LQgekv4VN4Nq9", "target", "_blank"], [1, "bx", "bxs-map"], [1, "navbar-area"], [1, "floza-responsive-nav"], [1, "floza-responsive-menu"], [1, "logo"], ["routerLink", "/"], ["src", "assets/img/logo-text.svg", "alt", "logo"], [1, "floza-nav"], [1, "navbar", "navbar-expand-md", "navbar-light"], ["routerLink", "/", 1, "navbar-brand"], ["src", "assets/img/logo-text.svg", "alt", "logo", "height", "40"], [1, "collapse", "navbar-collapse", "mean-menu"], [1, "navbar-nav", "ml-200"], [1, "nav-item"], ["routerLink", "/home", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/about", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/contact", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"]],
  template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "ul", 5)(6, "li")(7, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " info@go-go-go.app");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li")(11, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " +535 254 1322");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 4)(15, "ul", 10)(16, "li")(17, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li")(20, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li")(23, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li")(26, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 19)(29, "div", 20)(30, "div", 2)(31, "div", 21)(32, "div", 22)(33, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 25)(36, "div", 2)(37, "nav", 26)(38, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "img", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 29)(41, "ul", 30)(42, "li", 31)(43, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Inicio");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "li", 31)(46, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Sobre Nosotros");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "li", 31)(49, "a", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Cont\u00E1ctenos");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 1881:
/*!********************************************************************!*\
  !*** ./src/app/components/common/preloader/preloader.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreloaderComponent: () => (/* binding */ PreloaderComponent)
/* harmony export */ });
/* harmony import */ var D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class PreloaderComponent {
  constructor() {}
  ngOnInit() {}
}
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(PreloaderComponent, "\u0275fac", function PreloaderComponent_Factory(t) {
  return new (t || PreloaderComponent)();
});
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(PreloaderComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PreloaderComponent,
  selectors: [["app-preloader"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 8,
  vars: 0,
  consts: [[1, "preloader"], [1, "d-table"], [1, "d-table-cell"], [1, "lds-ring"]],
  template: function PreloaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div")(5, "div")(6, "div")(7, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 1646:
/*!********************************************************************!*\
  !*** ./src/app/components/common/subscribe/subscribe.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubscribeComponent: () => (/* binding */ SubscribeComponent)
/* harmony export */ });
/* harmony import */ var D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class SubscribeComponent {
  constructor() {
    // Public properties
    (0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "email", new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl());
  }
  ngOnInit() {}
}
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SubscribeComponent, "\u0275fac", function SubscribeComponent_Factory(t) {
  return new (t || SubscribeComponent)();
});
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(SubscribeComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SubscribeComponent,
  selectors: [["ath-subscribe"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 15,
  vars: 0,
  consts: [[1, "newsletter-area"], [1, "container"], [1, "newsletter-content"], [1, "row", "align-items-center"], [1, "col-lg-5", "col-md-12"], [1, "newsletter-title"], [1, "col-lg-7", "col-md-12"], [1, "newsletter-form"], ["type", "email", "placeholder", "Su correo electr\u00F3nico", "autocomplete", "off", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"]],
  template: function SubscribeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Suscr\u00EDbase a nuestros boletines:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Mant\u00E9ngase informado de las novedades");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6)(11, "form", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Suscribirme");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm],
  encapsulation: 2
}));

/***/ }),

/***/ 4244:
/*!***********************************************************!*\
  !*** ./src/app/components/pages/about/about.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/subscribe/subscribe.component */ 1646);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class AboutComponent {
  constructor() {}
  ngOnInit() {}
}
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AboutComponent, "\u0275fac", function AboutComponent_Factory(t) {
  return new (t || AboutComponent)();
});
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AboutComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AboutComponent,
  selectors: [["app-about"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 46,
  vars: 0,
  consts: [[1, "page-banner", "bg-1"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "page-content"], ["routerLink", "/"], [1, "about-text-area", "ptb-100"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-md-12"], [1, "about-safe-text"], [1, "shipping-card"], [1, "shipping-contant"], [1, "shipping-image"], ["src", "https://res.cloudinary.com/athendat/image/upload/w_100,h_100,c_fill,ar_1:1,g_auto,r_max/v1687990858/BalanctTesting/User/rsg8marxteqlagmakluc.webp", "alt", "image"], [1, "safe-image"], ["src", "assets/img/speciality/speciality2.jpg", "alt", "image"]],
  template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u00BFQui\u00E9nes Somos?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul")(8, "li")(9, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Inicio");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Sobre Nosotros");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 6)(14, "div", 3)(15, "div", 7)(16, "div", 8)(17, "div", 9)(18, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "go-go-go.app, es una ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "soluci\u00F3n r\u00E1pida y segura");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " para planificar el movimiento de cargas en Cuba, desarrollada, mantenida y operada por ATHENDAT s.r.l..");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Nuestra empresa ofrece soluciones tecnol\u00F3gicas para potenciar los beneficios econ\u00F3micos de otros negocios mediante plataformas digitales de gesti\u00F3n empresarial, comercio electr\u00F3nico y operaci\u00F3n log\u00EDstica. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " Con la plataforma ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "go-go-go");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " ponemos a su disposici\u00F3n un servicio para la planificaci\u00F3n de movimientos de cargas en Cuba, soportado por un staff de transportistas privados y estatales que est\u00E1n a la espera de sus solicitud. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Puede descargar nuestra aplicaci\u00F3n para clientes desde Apklis o Google Play.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 10)(33, "div", 11)(34, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Frank Rodr\u00EDguez L\u00F3pez");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Fundador y Director Ejecutivo, ATHENDAT s.r.l.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "\"Creamos soluciones tecnol\u00F3gicas para facilitar procesos comerciales, empresariales y sociales.\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 8)(43, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "ath-subscribe");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_1__.SubscribeComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 5859:
/*!********************************************************!*\
  !*** ./src/app/components/pages/about/about.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutModule: () => (/* binding */ AboutModule)
/* harmony export */ });
/* harmony import */ var D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.component */ 4244);
/* harmony import */ var _about_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.routing */ 5338);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);


// Modules
// Component

// Routes



class AboutModule {}
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AboutModule, "\u0275fac", function AboutModule_Factory(t) {
  return new (t || AboutModule)();
});
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AboutModule, "\u0275mod", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AboutModule
}));
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(AboutModule, "\u0275inj", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(_about_routing__WEBPACK_IMPORTED_MODULE_2__.aboutRoutes), _about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent]
}));
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AboutModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent]
  });
})();

/***/ }),

/***/ 5338:
/*!*********************************************************!*\
  !*** ./src/app/components/pages/about/about.routing.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aboutRoutes: () => (/* binding */ aboutRoutes)
/* harmony export */ });
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.component */ 4244);
// Component

// About Routes
const aboutRoutes = [{
  path: '',
  component: _about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent
}];

/***/ }),

/***/ 3255:
/*!***********************************************************************!*\
  !*** ./src/app/components/pages/coming-soon/coming-soon.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComingSoonComponent: () => (/* binding */ ComingSoonComponent)
/* harmony export */ });
/* harmony import */ var D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class ComingSoonComponent {
  constructor() {
    (0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "days", void 0);
    (0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "hours", void 0);
    (0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "minutes", void 0);
    (0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "seconds", void 0);
    (0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "myInterval", void 0);
    (0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "commingSoonTime", () => {
      const endTimeParse = Date.parse('September 01, 2023 12:00:00 PDT') / 1000;
      const now = new Date();
      const nowParse = Date.parse(now.toString()) / 1000;
      const timeLeft = endTimeParse - nowParse;
      const days = Math.floor(timeLeft / 86400);
      let hours = Math.floor((timeLeft - days * 86400) / 3600);
      let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      let seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);
      if (hours < 10) {
        hours = 0 + hours;
      }
      if (minutes < 10) {
        minutes = 0 + minutes;
      }
      if (seconds < 10) {
        seconds = 0 + seconds;
      }
      this.days = days;
      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
    });
  }
  ngOnInit() {
    this.myInterval = setInterval(() => {
      this.commingSoonTime();
    }, 0);
  }
}
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ComingSoonComponent, "\u0275fac", function ComingSoonComponent_Factory(t) {
  return new (t || ComingSoonComponent)();
});
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ComingSoonComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ComingSoonComponent,
  selectors: [["app-coming-soon"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 33,
  vars: 4,
  consts: [[1, "coming-soon-area"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "coming-soon-contant"], ["id", "timer"], ["id", "days"], ["id", "hours"], ["id", "minutes"], ["id", "seconds"], ["href", "https://www.facebook.com/profile.php?id=100094867050628", "target", "_blank"], [1, "bx", "bxl-facebook"], ["href", "https://www.linkedin.com/showcase/go-go-go-app", "target", "_blank"], [1, "bx", "bxl-linkedin"]],
  template: function ComingSoonComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "En construcci\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "En este sitio se levantar\u00E1 la plataforma log\u00EDsitica go-go-go.app.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5)(10, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "D\u00EDas");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Horas");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Minutos");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Segundos");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ul")(27, "li")(28, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li")(31, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.days, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.hours, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.minutes, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.seconds, " ");
    }
  },
  encapsulation: 2
}));

/***/ }),

/***/ 847:
/*!***************************************************************!*\
  !*** ./src/app/components/pages/contact/contact.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2484);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3303);
/* harmony import */ var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/subscribe/subscribe.component */ 1646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.service */ 3479);



// Third's Modules







const _c0 = ["contactNgForm"];
class ContactComponent {
  /**
   * Constructor
   */
  constructor(_contactService, _changeDetectorRef, _formBuilder, _router) {
    (0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_contactService", void 0);
    (0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_changeDetectorRef", void 0);
    (0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_formBuilder", void 0);
    (0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_router", void 0);
    // Viewchild properties
    (0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "contactNgForm", void 0);
    // Public properties
    (0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "contactFormSubmitted", false);
    (0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "contactForm", void 0);
    // Private properties
    (0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_unsubscribeAll", new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject());
    this._contactService = _contactService;
    this._changeDetectorRef = _changeDetectorRef;
    this._formBuilder = _formBuilder;
    this._router = _router;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  ngOnInit() {
    this.contactForm = this._formBuilder.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      subject: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
    });
  }
  /**
   * On destroy
   */
  ngOnDestroy() {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Send Message
   */
  sendMessage() {
    // Set submitted status to true
    this.contactFormSubmitted = true;
    // Do nothing if the form is invalid
    if (this.contactForm.invalid) {
      return;
    }
    // Get Message Data
    const message = this.contactForm.getRawValue();
    this._contactService.sendMessage(message).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._unsubscribeAll)).subscribe(() => {
      // // Trigger the snackbar
      // this._snackBar.open('Mensaje Recibido', 'OK', {
      //     panelClass: 'success',
      //     verticalPosition: 'top',
      //     duration: 3600,
      // });
      // Reset the form
      this.contactForm.reset();
      // Change the page
      this._router.navigate(['/home']);
      // Mark for check
      this._changeDetectorRef.markForCheck();
    });
  }
}
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ContactComponent, "\u0275fac", function ContactComponent_Factory(t) {
  return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_contact_service__WEBPACK_IMPORTED_MODULE_2__.ContactService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
});
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ContactComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ContactComponent,
  selectors: [["ath-contact"]],
  viewQuery: function ContactComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.contactNgForm = _t.first);
    }
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
  decls: 78,
  vars: 1,
  consts: [[1, "page-banner", "bg-1"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "page-content"], ["routerLink", "/"], [1, "pt-100", "pb-70"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "contact-info"], [1, "bx", "bxs-phone"], ["href", "tel:+52-1-999-518-8337"], ["href", "tel:+52-1-999-544-8624"], [1, "bx", "bxs-map-pin"], [1, "col-lg-4", "col-md-6", "offset-md-3", "offset-lg-0"], [1, "bx", "bxs-envelope"], ["href", "mailto:info@wimexpress.com"], ["href", "mailto:mabel.comelect@wiremidmx.com"], [1, "contact-form-area", "pb-100"], [1, "section-title"], [1, "contact-form"], ["id", "contactForm", 3, "formGroup"], [1, "col-md-6", "col-md-6"], [1, "form-group"], ["type", "text", "formControlName", "name", "id", "name", "required", "", "placeholder", "Su nombre y apellidos", 1, "form-control"], ["type", "email", "formControlName", "email", "id", "email", "required", "", "placeholder", "Su correo electr\u00F3nico", 1, "form-control"], ["type", "text", "formControlName", "subject", "id", "msg_subject", "required", "", "placeholder", "Asunto", 1, "form-control"], ["type", "text", "formControlName", "phone", "id", "phone_number", "required", "", "placeholder", "Su tel\u00E9fono", 1, "form-control"], [1, "col-lg-12", "col-md-12"], ["formControlName", "message", "id", "message", "cols", "30", "rows", "6", "required", "", "placeholder", "Escriba su mensaje...", 1, "form-control"], [1, "col-lg-12", "col-md-12", "text-center"], ["type", "submit", 1, "default-btn-one"]],
  template: function ContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "NUESTRO EQUIPO EST\u00C1 SUS \u00D3RDENES");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "ul")(8, "li")(9, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Inicio");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Cont\u00E1ctenos");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 6)(14, "div", 3)(15, "div", 7)(16, "div", 8)(17, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Tel\u00E9fonos");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "p")(22, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "+52 1 999 518 8337");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "p")(25, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "+52 1 999 544 8624");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 8)(28, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Domicilio");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Calle 16 No 313 interior 5");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "entre 7 y 9 Residencial C\u00E1mara");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "de Comercio del Norte. M\u00E9rida, Yucat\u00E1n");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 14)(39, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](40, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "Correos electr\u00F3nicos");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "p")(44, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "info@wimexpress.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "p")(47, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "mabel.comelect@wiremidmx.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 18)(50, "div", 3)(51, "div", 19)(52, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "Escr\u00EDbanos");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "Estamos a la espera de sus comentarios");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 20)(57, "form", 21)(58, "div", 7)(59, "div", 22)(60, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](61, "input", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "div", 22)(63, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](64, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "div", 22)(66, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](67, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "div", 22)(69, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](70, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "div", 28)(72, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](73, "textarea", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "div", 30)(75, "button", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](76, "Enviar Mensaje");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](77, "ath-subscribe");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](57);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.contactForm);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_1__.SubscribeComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 7663:
/*!************************************************************!*\
  !*** ./src/app/components/pages/contact/contact.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactModule: () => (/* binding */ ContactModule)
/* harmony export */ });
/* harmony import */ var D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.component */ 847);
/* harmony import */ var _contact_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.routing */ 4086);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);


// Modules
// Component

// Routes



class ContactModule {}
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ContactModule, "\u0275fac", function ContactModule_Factory(t) {
  return new (t || ContactModule)();
});
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ContactModule, "\u0275mod", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: ContactModule
}));
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ContactModule, "\u0275inj", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(_contact_routing__WEBPACK_IMPORTED_MODULE_2__.contactRoutes), _contact_component__WEBPACK_IMPORTED_MODULE_1__.ContactComponent]
}));
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ContactModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _contact_component__WEBPACK_IMPORTED_MODULE_1__.ContactComponent]
  });
})();

/***/ }),

/***/ 4086:
/*!*************************************************************!*\
  !*** ./src/app/components/pages/contact/contact.routing.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contactRoutes: () => (/* binding */ contactRoutes)
/* harmony export */ });
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.component */ 847);
// Component

// Contact Routes
const contactRoutes = [{
  path: '',
  component: _contact_component__WEBPACK_IMPORTED_MODULE_0__.ContactComponent
}];

/***/ }),

/***/ 3479:
/*!*************************************************************!*\
  !*** ./src/app/components/pages/contact/contact.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactService: () => (/* binding */ ContactService)
/* harmony export */ });
/* harmony import */ var D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);



const API_URL = 'environment.API_URL';
/**
 * Contact Service
 *
 * @export
 * @class ContactService
 */
class ContactService {
  /**
   * Constructor
   */
  constructor(_httpClient) {
    (0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_httpClient", void 0);
    this._httpClient = _httpClient;
  }
  /**
   * Send message
   *
   * @param {Message} message
   * @return {Observable<{ok: boolean, message: string}>}
   * @memberof ContactService
   */
  sendMessage(message) {
    return this._httpClient.post(`${API_URL}/bot`, message);
  }
}
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ContactService, "\u0275fac", function ContactService_Factory(t) {
  return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
});
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ContactService, "\u0275prov", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ContactService,
  factory: ContactService.ɵfac,
  providedIn: 'root'
}));

/***/ }),

/***/ 4837:
/*!***********************************************************!*\
  !*** ./src/app/components/pages/error/error.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorComponent: () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);



class ErrorComponent {
  constructor() {}
  ngOnInit() {}
}
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ErrorComponent, "\u0275fac", function ErrorComponent_Factory(t) {
  return new (t || ErrorComponent)();
});
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ErrorComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ErrorComponent,
  selectors: [["app-error"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 39,
  vars: 0,
  consts: [[1, "page-banner", "bg-3"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "page-content"], ["routerLink", "/"], [1, "error-area", "ptb-100"], [1, "error"], ["src", "assets/img/error.png", "alt", "image", 1, "error-image"], [1, "error-btn"], [1, "newsletter-area"], [1, "newsletter-content"], [1, "row", "align-items-center"], [1, "col-lg-5", "col-md-12"], [1, "newsletter-title"], [1, "col-lg-7", "col-md-12"], [1, "newsletter-form"], ["type", "email", "placeholder", "Enter your email", "name", "EMAIL", "required", "", "autocomplete", "off", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"]],
  template: function ErrorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "404 Error Page");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul")(8, "li")(9, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "404 Error");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6)(14, "div", 1)(15, "div", 2)(16, "div", 3)(17, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Page Not Found");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 9)(22, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Back To Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 10)(25, "div", 3)(26, "div", 11)(27, "div", 12)(28, "div", 13)(29, "div", 14)(30, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Subscribe to our newsletter:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Focused on the transport and logistic industry");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 15)(35, "form", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Subscribe");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 9995:
/*!*******************************************************!*\
  !*** ./src/app/components/pages/faq/faq.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqComponent: () => (/* binding */ FaqComponent)
/* harmony export */ });
/* harmony import */ var D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);



class FaqComponent {
  constructor() {}
  ngOnInit() {}
}
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(FaqComponent, "\u0275fac", function FaqComponent_Factory(t) {
  return new (t || FaqComponent)();
});
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(FaqComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: FaqComponent,
  selectors: [["app-faq"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 119,
  vars: 0,
  consts: [[1, "page-banner", "bg-2"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "page-content"], ["routerLink", "/"], [1, "faq-area", "ptb-100"], [1, "section-title"], [1, "faq-contant"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-md-12"], [1, "accordion"], [1, "title"], [1, "accordion-content"], [1, "faq-image"], ["src", "assets/img/about/about1.jpg", "alt", "image"], [1, "faq-form"], [1, "row"], [1, "col-lg-6", "col-md-6"], [1, "form-group"], ["type", "text", "id", "name", "placeholder", "Your Name", 1, "form-control"], ["type", "email", "id", "email", "placeholder", "Your Email", 1, "form-control"], ["type", "text", "id", "phone", "placeholder", "Your Phone", 1, "form-control"], ["type", "text", "id", "subject", "placeholder", "Your Subject", 1, "form-control"], ["id", "message", "rows", "3", "placeholder", "Message", 1, "form-control"], [1, "text-center"], ["type", "submit", 1, "faq-form-btn"], [1, "newsletter-area"], [1, "newsletter-content"], [1, "col-lg-5", "col-md-12"], [1, "newsletter-title"], [1, "col-lg-7", "col-md-12"], [1, "newsletter-form"], ["type", "email", "placeholder", "Enter your email", "name", "EMAIL", "required", "", "autocomplete", "off", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"]],
  template: function FaqComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "FAQ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul")(8, "li")(9, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "FAQ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6)(14, "div", 3)(15, "div", 7)(16, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "FAQ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Frequently Asked Questions");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8)(21, "div", 9)(22, "div", 10)(23, "ul", 11)(24, "li")(25, "h3", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Transport & Logistic Services");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 13)(28, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li")(31, "h3", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Safe and Faster Logistic Service Neer You");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 13)(34, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li")(37, "h3", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Digital Shipping Solution");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 13)(40, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li")(43, "h3", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "We Provide Best Logistic Services ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 13)(46, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "li")(49, "h3", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Modern, Safe And Trusted Logistic Company");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 13)(52, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "li")(55, "h3", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Our Clients Around ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 13)(58, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "li")(61, "h3", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "The World Makes Us Special");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 13)(64, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 10)(67, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 16)(70, "form")(71, "div", 7)(72, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "FAQ,s");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Frequently Asked Questions");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 17)(77, "div", 18)(78, "div", 19)(79, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 18)(83, "div", 19)(84, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Email address");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 18)(88, "div", 19)(89, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Phone");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 18)(93, "div", 19)(94, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Subject");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 19)(98, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Message");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "textarea", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 25)(102, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Send Message");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 27)(105, "div", 3)(106, "div", 28)(107, "div", 9)(108, "div", 29)(109, "div", 30)(110, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Subscribe to our newsletter:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Focused on the transport and logistic industry");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 31)(115, "form", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](116, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "button", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Subscribe");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 758:
/*!***************************************************************!*\
  !*** ./src/app/components/pages/gallery/gallery.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GalleryComponent: () => (/* binding */ GalleryComponent)
/* harmony export */ });
/* harmony import */ var D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);



class GalleryComponent {
  constructor() {}
  ngOnInit() {}
}
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(GalleryComponent, "\u0275fac", function GalleryComponent_Factory(t) {
  return new (t || GalleryComponent)();
});
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(GalleryComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: GalleryComponent,
  selectors: [["app-gallery"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 82,
  vars: 0,
  consts: [[1, "page-banner", "bg-3"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "page-content"], ["routerLink", "/"], [1, "gallery-area", "pt-100", "pb-70"], [1, "gallery-title"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "floza-gallery"], ["src", "assets/img/gallery/gallery1.jpg", "alt", "image"], [1, "caption"], ["href", "assets/img/gallery/gallery1.jpg"], [1, "bx", "bx-show-alt"], ["src", "assets/img/gallery/gallery2.jpg", "alt", "image"], ["href", "assets/img/gallery/gallery2.jpg"], ["src", "assets/img/gallery/gallery3.jpg", "alt", "image"], ["href", "assets/img/gallery/gallery3.jpg"], ["src", "assets/img/gallery/gallery4.jpg", "alt", "image"], ["href", "assets/img/gallery/gallery4.jpg"], ["src", "assets/img/gallery/gallery5.jpg", "alt", "image"], ["href", "assets/img/gallery/gallery5.jpg"], ["src", "assets/img/gallery/gallery6.jpg", "alt", "image"], ["href", "assets/img/gallery/gallery6.jpg"], [1, "newsletter-area"], [1, "newsletter-content"], [1, "row", "align-items-center"], [1, "col-lg-5", "col-md-12"], [1, "newsletter-title"], [1, "col-lg-7", "col-md-12"], [1, "newsletter-form"], ["type", "email", "placeholder", "Enter your email", "name", "EMAIL", "required", "", "autocomplete", "off", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"]],
  template: function GalleryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul")(8, "li")(9, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6)(14, "div", 3)(15, "div", 7)(16, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Picture To Floza");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8)(19, "div", 9)(20, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 12)(23, "div", 1)(24, "div", 2)(25, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 9)(28, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 12)(31, "div", 1)(32, "div", 2)(33, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 9)(36, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 12)(39, "div", 1)(40, "div", 2)(41, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 9)(44, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 12)(47, "div", 1)(48, "div", 2)(49, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 9)(52, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "img", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 12)(55, "div", 1)(56, "div", 2)(57, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 9)(60, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "img", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 12)(63, "div", 1)(64, "div", 2)(65, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 25)(68, "div", 3)(69, "div", 26)(70, "div", 27)(71, "div", 28)(72, "div", 29)(73, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Subscribe to our newsletter:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Focused on the transport and logistic industry");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 30)(78, "form", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Subscribe");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 4150:
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/privacy-policy/privacy-policy.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrivacyPolicyComponent: () => (/* binding */ PrivacyPolicyComponent)
/* harmony export */ });
/* harmony import */ var D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);



class PrivacyPolicyComponent {
  constructor() {}
  ngOnInit() {}
}
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(PrivacyPolicyComponent, "\u0275fac", function PrivacyPolicyComponent_Factory(t) {
  return new (t || PrivacyPolicyComponent)();
});
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(PrivacyPolicyComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PrivacyPolicyComponent,
  selectors: [["app-privacy-policy"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 55,
  vars: 0,
  consts: [[1, "page-banner", "bg-3"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "page-content"], ["routerLink", "/"], [1, "privacy-policy", "ptb-100"], [1, "privacy-policy-text"], [1, "newsletter-area"], [1, "newsletter-content"], [1, "row", "align-items-center"], [1, "col-lg-5", "col-md-12"], [1, "newsletter-title"], [1, "col-lg-7", "col-md-12"], [1, "newsletter-form"], ["type", "email", "placeholder", "Enter your email", "name", "EMAIL", "required", "", "autocomplete", "off", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"]],
  template: function PrivacyPolicyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Privacy Policy");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul")(8, "li")(9, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Privacy Policy");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6)(14, "div", 3)(15, "div", 7)(16, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Digital Shipping Solution");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Digital Solution For Transportation ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Make an easy shipment");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Clients Around The World Makes Us Special");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 8)(41, "div", 3)(42, "div", 9)(43, "div", 10)(44, "div", 11)(45, "div", 12)(46, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Subscribe to our newsletter:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Focused on the transport and logistic industry");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 13)(51, "form", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Subscribe");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 6763:
/*!*********************************************************************************!*\
  !*** ./src/app/components/pages/services-details/services-details.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServicesDetailsComponent: () => (/* binding */ ServicesDetailsComponent)
/* harmony export */ });
/* harmony import */ var D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);



class ServicesDetailsComponent {
  constructor() {}
  ngOnInit() {}
}
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ServicesDetailsComponent, "\u0275fac", function ServicesDetailsComponent_Factory(t) {
  return new (t || ServicesDetailsComponent)();
});
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ServicesDetailsComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ServicesDetailsComponent,
  selectors: [["app-services-details"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 78,
  vars: 0,
  consts: [[1, "page-banner", "bg-1"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "page-content"], ["routerLink", "/"], [1, "single-services-area", "ptb-100"], [1, "row"], [1, "col-lg-8", "col-md-12"], [1, "service-details-text"], [1, "service-image"], ["src", "assets/img/services/single-services1.jpg", "alt", "image"], [1, "image"], ["src", "assets/img/services/single-services2.jpg", "alt", "image"], [1, "col-lg-4", "col-md-12"], [1, "service-sidebar"], [1, "title"], ["routerLink", "/services-details"], [1, "bx", "bxs-truck"], [1, "bx", "bxs-ship"], [1, "bx", "bxs-plane-take-off"], [1, "bx", "bx-transfer"], [1, "bx", "bx-home"], [1, "bx", "bx-line-chart-down"], [1, "newsletter-area"], [1, "newsletter-content"], [1, "row", "align-items-center"], [1, "col-lg-5", "col-md-12"], [1, "newsletter-title"], [1, "col-lg-7", "col-md-12"], [1, "newsletter-form"], ["type", "email", "placeholder", "Enter your email", "name", "EMAIL", "required", "", "autocomplete", "off", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"]],
  template: function ServicesDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Service Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul")(8, "li")(9, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Service Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6)(14, "div", 3)(15, "div", 7)(16, "div", 8)(17, "div", 9)(18, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Easy Shipment Solution");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "NNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 14)(35, "div", 15)(36, "h3", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Our Services");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ul")(39, "li")(40, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Road Freight");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li")(44, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Ocean Freight");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li")(48, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " Air Freight");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "li")(52, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " B2B Exchange");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "li")(56, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " Home Shipping");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li")(60, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " Office Moving");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 24)(64, "div", 3)(65, "div", 25)(66, "div", 26)(67, "div", 27)(68, "div", 28)(69, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Subscribe to our newsletter:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Focused on the transport and logistic industry");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 29)(74, "form", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "button", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Subscribe");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 8995:
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/services/services.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServicesComponent: () => (/* binding */ ServicesComponent)
/* harmony export */ });
/* harmony import */ var D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);



class ServicesComponent {
  constructor() {}
  ngOnInit() {}
}
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ServicesComponent, "\u0275fac", function ServicesComponent_Factory(t) {
  return new (t || ServicesComponent)();
});
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ServicesComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ServicesComponent,
  selectors: [["app-services"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 132,
  vars: 0,
  consts: [[1, "page-banner", "bg-2"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "page-content"], ["routerLink", "/"], [1, "our-services-area", "ptb-100"], [1, "section-title"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "service-card-two"], ["src", "assets/img/services/services1.jpg", "alt", "image"], [1, "service-caption"], ["routerLink", "/services-details", 1, "default-btn-two"], ["src", "assets/img/services/services2.jpg", "alt", "image"], ["src", "assets/img/services/services3.jpg", "alt", "image"], ["src", "assets/img/services/services4.jpg", "alt", "image"], ["src", "assets/img/services/services5.jpg", "alt", "image"], ["src", "assets/img/services/services6.jpg", "alt", "image"], [1, "col-lg-12", "col-md-12"], [1, "pagination"], [1, "page-item"], ["routerLink", "/services", 1, "page-link"], ["aria-hidden", "true"], [1, "page-item", "active"], [1, "best-logistic-area", "ptb-100"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-md-12"], [1, "logistic-text"], ["routerLink", "/about", 1, "default-btn-one"], [1, "logistic-image"], ["src", "assets/img/services/services7.jpg", "alt", "image"], [1, "newsletter-area"], [1, "newsletter-content"], [1, "col-lg-5", "col-md-12"], [1, "newsletter-title"], [1, "col-lg-7", "col-md-12"], [1, "newsletter-form"], ["type", "email", "placeholder", "Enter your email", "name", "EMAIL", "required", "", "autocomplete", "off", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"]],
  template: function ServicesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Our Services");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul")(8, "li")(9, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Services");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6)(14, "div", 3)(15, "div", 7)(16, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Our Services");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Safe, Faster and Relaible Logistics Services");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8)(21, "div", 9)(22, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 12)(25, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Road Freight");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "But I must explain to you how all this mistaken idea of denouncing I will give you a complete account of the system.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Read More");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 9)(32, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 12)(35, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Ocean Freight");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "But I must explain to you how all this mistaken idea of denouncing I will give you a complete account of the system.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Read More");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 9)(42, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 12)(45, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Air Freight");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "But I must explain to you how all this mistaken idea of denouncing I will give you a complete account of the system.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Read More");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 9)(52, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 12)(55, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "B2B Exchange");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "But I must explain to you how all this mistaken idea of denouncing I will give you a complete account of the system.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Read More");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 9)(62, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 12)(65, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Home Shipping");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "But I must explain to you how all this mistaken idea of denouncing I will give you a complete account of the system.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Read More");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 9)(72, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 12)(75, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Office Moving");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "But I must explain to you how all this mistaken idea of denouncing I will give you a complete account of the system.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Read More");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 19)(82, "ul", 20)(83, "li", 21)(84, "a", 22)(85, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "\u00AB");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "li", 24)(88, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "li", 21)(91, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "li", 21)(94, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "li", 21)(97, "a", 22)(98, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "\u00BB");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 25)(101, "div", 3)(102, "div", 26)(103, "div", 27)(104, "div", 28)(105, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Best ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Logistic Service");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, " Solution Near you");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "At vero eos et et iusto odio ducimus qui blanditiis praesentium animi voluptatum deleniti atque corrupti dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Read More");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 27)(115, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](116, "img", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 32)(118, "div", 3)(119, "div", 33)(120, "div", 26)(121, "div", 34)(122, "div", 35)(123, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Subscribe to our newsletter:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Focused on the transport and logistic industry");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 36)(128, "form", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "input", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "button", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "Subscribe");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 2813:
/*!*********************************************************!*\
  !*** ./src/app/components/pages/team/team.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TeamComponent: () => (/* binding */ TeamComponent)
/* harmony export */ });
/* harmony import */ var D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);



class TeamComponent {
  constructor() {}
  ngOnInit() {}
}
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TeamComponent, "\u0275fac", function TeamComponent_Factory(t) {
  return new (t || TeamComponent)();
});
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TeamComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TeamComponent,
  selectors: [["app-team"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 186,
  vars: 0,
  consts: [[1, "page-banner", "bg-3"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "page-content"], ["routerLink", "/"], [1, "team-area", "pt-100", "pb-70"], [1, "section-title"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "team-card"], [1, "team-image"], ["src", "assets/img/team/team1.jpg", "alt", "image"], [1, "caption"], ["href", "#", "target", "_blank"], [1, "bx", "bxl-facebook"], [1, "bx", "bxl-twitter"], [1, "bx", "bxl-linkedin"], [1, "bx", "bxl-instagram"], [1, "team-text"], ["src", "assets/img/team/team2.jpg", "alt", "image"], ["src", "assets/img/team/team3.jpg", "alt", "image"], ["src", "assets/img/team/team4.jpg", "alt", "image"], ["src", "assets/img/team/team5.jpg", "alt", "image"], ["src", "assets/img/team/team6.jpg", "alt", "image"], [1, "newsletter-area"], [1, "newsletter-content"], [1, "row", "align-items-center"], [1, "col-lg-5", "col-md-12"], [1, "newsletter-title"], [1, "col-lg-7", "col-md-12"], [1, "newsletter-form"], ["type", "email", "placeholder", "Enter your email", "name", "EMAIL", "required", "", "autocomplete", "off", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"]],
  template: function TeamComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Our Expert Team");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul")(8, "li")(9, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Team");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6)(14, "div", 3)(15, "div", 7)(16, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Our Team");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Intelligence Heros Make The Comapny Proud");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8)(21, "div", 9)(22, "div", 10)(23, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13)(26, "ul")(27, "li")(28, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li")(31, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li")(34, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li")(37, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 19)(40, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "John Doe");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Founder - CEO");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 9)(47, "div", 10)(48, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 13)(51, "ul")(52, "li")(53, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "li")(56, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "li")(59, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "li")(62, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 19)(65, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Pery Henry");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Marketing Manager");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 9)(72, "div", 10)(73, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "img", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 13)(76, "ul")(77, "li")(78, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "li")(81, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "li")(84, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "li")(87, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 19)(90, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Milthon Hence");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Shipping Manager");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 9)(97, "div", 10)(98, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 13)(101, "ul")(102, "li")(103, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "li")(106, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "li")(109, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "li")(112, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 19)(115, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Hillary Fin");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Marketing Specialist");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 9)(122, "div", 10)(123, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "img", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 13)(126, "ul")(127, "li")(128, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "li")(131, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "li")(134, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](135, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "li")(137, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](138, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 19)(140, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Karlos Bentham");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Marking Assistant");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 9)(147, "div", 10)(148, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "img", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 13)(151, "ul")(152, "li")(153, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](154, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "li")(156, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](157, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "li")(159, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](160, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "li")(162, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](163, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 19)(165, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "Niccy Priti");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "Office Manager");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 25)(172, "div", 3)(173, "div", 26)(174, "div", 27)(175, "div", 28)(176, "div", 29)(177, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "Subscribe to our newsletter:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "Focused on the transport and logistic industry");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 30)(182, "form", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](183, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "Subscribe");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 3764:
/*!*********************************************************************************!*\
  !*** ./src/app/components/pages/terms-conditions/terms-conditions.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TermsConditionsComponent: () => (/* binding */ TermsConditionsComponent)
/* harmony export */ });
/* harmony import */ var D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);



class TermsConditionsComponent {
  constructor() {}
  ngOnInit() {}
}
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TermsConditionsComponent, "\u0275fac", function TermsConditionsComponent_Factory(t) {
  return new (t || TermsConditionsComponent)();
});
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TermsConditionsComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TermsConditionsComponent,
  selectors: [["app-terms-conditions"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 55,
  vars: 0,
  consts: [[1, "page-banner", "bg-3"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "page-content"], ["routerLink", "/"], [1, "privacy-policy", "ptb-100"], [1, "privacy-policy-text"], [1, "newsletter-area"], [1, "newsletter-content"], [1, "row", "align-items-center"], [1, "col-lg-5", "col-md-12"], [1, "newsletter-title"], [1, "col-lg-7", "col-md-12"], [1, "newsletter-form"], ["type", "email", "placeholder", "Enter your email", "name", "EMAIL", "required", "", "autocomplete", "off", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"]],
  template: function TermsConditionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Terms Condition");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul")(8, "li")(9, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Terms Condition");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6)(14, "div", 3)(15, "div", 7)(16, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Digital Shipping Solution");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Digital Solution For Transportation ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Make an easy shipment");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Clients Around The World Makes Us Special");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 8)(41, "div", 3)(42, "div", 9)(43, "div", 10)(44, "div", 11)(45, "div", 12)(46, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Subscribe to our newsletter:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Focused on the transport and logistic industry");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 13)(51, "form", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Subscribe");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 9117:
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/testimonials/testimonials.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestimonialsComponent: () => (/* binding */ TestimonialsComponent)
/* harmony export */ });
/* harmony import */ var D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 7797);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);



class TestimonialsComponent {
  constructor() {}
  ngOnInit() {}
}
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TestimonialsComponent, "\u0275fac", function TestimonialsComponent_Factory(t) {
  return new (t || TestimonialsComponent)();
});
(0,D_Libraries_GitHub_Proyectos_PA023_TRAXPORTA_landing_go_go_go_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(TestimonialsComponent, "\u0275cmp", /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TestimonialsComponent,
  selectors: [["app-testimonials"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 84,
  vars: 0,
  consts: [[1, "page-banner", "bg-3"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "page-content"], ["routerLink", "/"], [1, "testimonials-area", "ptb-100"], [1, "section-title"], [1, "testimonials-slider", "owl-carousel", "owl-theme"], [1, "testimonials-card"], [1, "client-img"], ["src", "assets/img/clients/client6.jpg", "alt", "image"], [1, "rating"], [1, "bx", "bxs-star"], [1, "feedback-text"], ["src", "assets/img/clients/client5.jpg", "alt", "image"], ["src", "assets/img/clients/client4.jpg", "alt", "image"], [1, "newsletter-area"], [1, "newsletter-content"], [1, "row", "align-items-center"], [1, "col-lg-5", "col-md-12"], [1, "newsletter-title"], [1, "col-lg-7", "col-md-12"], [1, "newsletter-form"], ["type", "email", "placeholder", "Enter your email", "name", "EMAIL", "required", "", "autocomplete", "off", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"]],
  template: function TestimonialsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Our Special Testimonials");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul")(8, "li")(9, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Testimonials");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6)(14, "div", 3)(15, "div", 7)(16, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Clients Review");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Whats Our Clients Said About Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8)(21, "div", 9)(22, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Jhon Smith");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "CEO of LTD company");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 13)(30, "i", 13)(31, "i", 13)(32, "i", 13)(33, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 14)(35, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 9)(38, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "William leo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "CEO of LTD company");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 13)(46, "i", 13)(47, "i", 13)(48, "i", 13)(49, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 14)(51, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 9)(54, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Benjamin Liam");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "CEO of LTD company");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 13)(62, "i", 13)(63, "i", 13)(64, "i", 13)(65, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 14)(67, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 17)(70, "div", 3)(71, "div", 18)(72, "div", 19)(73, "div", 20)(74, "div", 21)(75, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Subscribe to our newsletter:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Focused on the transport and logistic industry");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 22)(80, "form", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "input", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Subscribe");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
}));

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environments/environment */ 553);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.component */ 6401);
/* harmony import */ var _app_components_pages_contact_contact_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/components/pages/contact/contact.module */ 7663);
/* harmony import */ var _app_components_pages_about_about_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/components/pages/about/about.module */ 5859);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.routing */ 34);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);









if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.enableProdMode)();
}
(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, {
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.importProvidersFrom)(_app_app_routing__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
  // Modules
  _app_components_pages_about_about_module__WEBPACK_IMPORTED_MODULE_3__.AboutModule, _app_components_pages_contact_contact_module__WEBPACK_IMPORTED_MODULE_2__.ContactModule), {
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_7__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_7__.HashLocationStrategy
  }, (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.withInterceptorsFromDi)())]
}).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
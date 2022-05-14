"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = exports.HttpLoaderFactory = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var footer_component_1 = require("./footer/footer.component");
var http_1 = require("@angular/common/http");
var ng_nice_select_1 = require("ng-nice-select");
var forms_1 = require("@angular/forms");
var single_component_1 = require("./single/single.component");
var home_component_1 = require("./home/home.component");
var animations_1 = require("@angular/platform-browser/animations");
var ngx_owl_carousel_o_1 = require("ngx-owl-carousel-o");
var core_2 = require("@ngx-translate/core");
var http_loader_1 = require("@ngx-translate/http-loader");
var multi_select_dropdown_component_1 = require("./multi-select-dropdown/multi-select-dropdown.component");
// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new http_loader_1.TranslateHttpLoader(http);
}
exports.HttpLoaderFactory = HttpLoaderFactory;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                single_component_1.SingleComponent,
                home_component_1.HomeComponent,
                multi_select_dropdown_component_1.MultiSelectDropdownComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                ng_nice_select_1.NiceSelectModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule,
                ngx_owl_carousel_o_1.CarouselModule,
                core_2.TranslateModule.forRoot({
                    defaultLanguage: 'pl',
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [http_1.HttpClient]
                    }
                })
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent],
            exports: [
                multi_select_dropdown_component_1.MultiSelectDropdownComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

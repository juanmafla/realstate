"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent(offerservice) {
        this.offerservice = offerservice;
        this.title = 'realstate';
        this.property = '';
        this.location = '';
        this.market = '';
        this.price_from = 300000;
        this.price_to = 50000;
        this.area_from = 0;
        this.area_to = 0;
        this.offer_type = '';
        this.number_offers = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.search = {
            "query": [
                {
                    "name": "sorting",
                    "value": "pricing",
                    "type": "descending"
                },
                {
                    "name": "page",
                    "value": 1
                },
                {
                    "name": "price",
                    "value": 300000,
                    "type": "lower"
                },
                {
                    "name": "price",
                    "value": 50000,
                    "type": "greater"
                }
            ]
        };
        this.offerservice.getSettings().subscribe(function (data) {
            _this.fields = data['output'];
            //console.log(data);
        });
        this.offerservice.getOffers(this.search).subscribe(function (data) {
            _this.offers = data['output'];
            _this.number_offers = data.lenght;
            console.log(data);
            console.log(_this.number_offers);
        });
    };
    AppComponent.prototype.Search_offers = function () {
        var _this = this;
        var Search_offers = {
            "query": [
                {
                    "name": "sorting",
                    "value": "pricing",
                    "type": "ascending"
                },
                {
                    "name": "page",
                    "value": 1
                },
                {
                    "name": "price",
                    "value": this.price_from,
                    "type": "lower"
                },
                {
                    "name": "price",
                    "value": this.price_to,
                    "type": "greater"
                }
            ]
        };
        this.offerservice.getOffers(Search_offers).subscribe(function (data) {
            _this.offers = data['output'];
            _this.number_offers = data['output'].lenght;
            console.log(data);
            console.log(_this.number_offers);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

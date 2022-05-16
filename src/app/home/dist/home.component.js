"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(offerservice) {
        this.offerservice = offerservice;
        this.location = '';
        this.price_from = 300000;
        this.price_to = 50000;
        this.area_from = 0;
        this.area_to = 0;
        this.number_offers = 0;
        this.loaded = false;
        this.sortby = 'Sort by';
        this.property_type =
            [
                { name: 'Select All', checked: false, multi: false }
            ];
        this.market_select =
            [];
        this.offertype_select =
            [];
    }
    HomeComponent.prototype.ngOnInit = function () {
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
                },
            ]
        };
        this.offerservice.getSettings().subscribe(function (data) {
            var _a;
            _this.fields = data['output'];
            (_a = _this.fields) === null || _a === void 0 ? void 0 : _a.forEach(function (field) {
                if ((field === null || field === void 0 ? void 0 : field.name) == 'property_type') {
                    field === null || field === void 0 ? void 0 : field.allowed_values.forEach(function (value) {
                        _this.property_type.push({ name: value.replace('_', ' ').replace('_', ' '), checked: false, multi: false });
                    });
                }
                if ((field === null || field === void 0 ? void 0 : field.name) == 'market') {
                    field === null || field === void 0 ? void 0 : field.allowed_values.forEach(function (value) {
                        _this.market_select.push({ name: value.replace('_', ' ').replace('_', ' '), checked: false, multi: true });
                    });
                }
                if ((field === null || field === void 0 ? void 0 : field.name) == 'offertype_select') {
                    field === null || field === void 0 ? void 0 : field.allowed_values.forEach(function (value) {
                        _this.offertype_select.push({ name: value.replace('_', ' ').replace('_', ' '), checked: false, multi: true });
                    });
                }
            });
            _this.loaded = true;
        });
        this.offerservice.getOffers(this.search).subscribe(function (data) {
            _this.offers = data['output'];
        });
    };
    HomeComponent.prototype.Search_offers = function () {
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
                },
                {
                    "name": "property",
                    "value": this.property
                },
                {
                    "name": "location",
                    "value": this.location
                },
                {
                    "name": "market",
                    "value": this.market
                },
                {
                    "name": "area_from",
                    "value": this.area_from,
                    "type": "lower"
                },
                {
                    "name": "area_to",
                    "value": this.area_to,
                    "type": "greater"
                },
                {
                    "name": "offer_type",
                    "value": this.offer_type
                }
            ]
        };
        this.offerservice.getOffers(Search_offers).subscribe(function (data) {
            _this.offers = data['output'];
            console.log(Search_offers);
        });
    };
    HomeComponent.prototype.Timeorder = function () {
        var _this = this;
        this.sortby = 'Time';
        var Search_offers = {
            "query": [
                {
                    "name": "sorting",
                    "value": "time",
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
                },
                {
                    "name": "property",
                    "value": this.property
                },
                {
                    "name": "location",
                    "value": this.location
                },
                {
                    "name": "market",
                    "value": this.market
                },
                {
                    "name": "area_from",
                    "value": this.area_from,
                    "type": "lower"
                },
                {
                    "name": "area_to",
                    "value": this.area_to,
                    "type": "greater"
                },
                {
                    "name": "offer_type",
                    "value": this.offer_type
                }
            ]
        };
        this.offerservice.getOffers(Search_offers).subscribe(function (data) {
            _this.offers = data['output'];
            _this.number_offers = data['output'].length;
        });
    };
    HomeComponent.prototype.Pricingorder = function () {
        var _this = this;
        this.sortby = 'Pricing';
        var Search_offers = {
            "query": [
                {
                    "name": "sorting",
                    "value": "price",
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
                },
                {
                    "name": "property",
                    "value": this.property
                },
                {
                    "name": "location",
                    "value": this.location
                },
                {
                    "name": "market",
                    "value": this.market
                },
                {
                    "name": "area_from",
                    "value": this.area_from,
                    "type": "lower"
                },
                {
                    "name": "area_to",
                    "value": this.area_to,
                    "type": "greater"
                },
                {
                    "name": "offer_type",
                    "value": this.offer_type
                }
            ]
        };
        this.offerservice.getOffers(Search_offers).subscribe(function (data) {
            _this.offers = data['output'];
            _this.number_offers = data['output'].length;
        });
    };
    HomeComponent.prototype.propertylist = function (item) {
        this.property = item;
    };
    HomeComponent.prototype.marketlist = function (item) {
        this.market = item;
    };
    HomeComponent.prototype.offer_typelist = function (item) {
        this.offer_type = item;
    };
    HomeComponent.prototype.shareCheckedList = function (item) {
        console.log(item);
    };
    HomeComponent.prototype.shareIndividualCheckedList = function (item) {
        console.log(item);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

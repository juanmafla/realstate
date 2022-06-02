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
        this.fields = [];
        this.offers = [];
        this.property = [];
        this.location = '';
        this.market = [];
        this.offer_type = [];
        this.number_offers = 0;
        this.loaded = false;
        this.sortby = 'Sort by';
        this.currentpage = 1;
        this.currentsort = 'time';
        this.query_settings = {
            "output": [
                {
                    "name": "property_type",
                    "allowed_types": [
                        "equal"
                    ],
                    "allowed_values": [
                        "flat",
                        "commercial_premises",
                        "house",
                        "plot",
                        "halls_and_warehouses"
                    ],
                    "input_type": "radio"
                },
                {
                    "name": "status",
                    "allowed_types": [
                        "equal"
                    ],
                    "allowed_values": [
                        "sell",
                        "rent"
                    ],
                    "input_type": "radio"
                },
                {
                    "name": "market",
                    "allowed_types": [
                        "equal"
                    ]
                },
                {
                    "name": "area",
                    "allowed_types": [
                        "lower",
                        "greater"
                    ]
                },
                {
                    "name": "price",
                    "allowed_types": [
                        "lower",
                        "greater"
                    ]
                },
                {
                    "name": "price_per_m2",
                    "allowed_types": [
                        "lower",
                        "greater"
                    ]
                },
                {
                    "name": "floor",
                    "allowed_types": [
                        "equal"
                    ]
                },
                {
                    "name": "floor_number",
                    "allowed_types": [
                        "lower",
                        "greater"
                    ]
                },
                {
                    "name": "room_number",
                    "allowed_types": [
                        "lower",
                        "greater"
                    ]
                },
                {
                    "name": "tags",
                    "allowed_types": [
                        "equal"
                    ],
                    "allowed_values": [
                        "parking",
                        "garden",
                        "heating",
                        "furnishings",
                        "site",
                        "remote_service",
                        "non_smoking_only",
                        "separate_kitchen",
                        "lift",
                        "air_conditioning",
                        "fence",
                        "balcony",
                        "swimming_pool",
                        "basement",
                        "attic",
                        "terrace"
                    ],
                    "input_type": "checkbox"
                },
                {
                    "name": "build_year",
                    "allowed_types": [
                        "lower",
                        "greater"
                    ]
                }
            ]
        };
        this.property_type = [{ name: 'Select All', checked: true, multi: false }];
        this.market_select = [{ name: 'Select All', checked: true, multi: false }];
        this.offertype_select = [{ name: 'Select All', checked: true, multi: false }];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.UpdateQuery();
        this.GetSettings();
    };
    HomeComponent.prototype.GetSettings = function () {
        var _this = this;
        this.offerservice.getSettings(this.query_settings).subscribe(function (data) {
            var _a;
            _this.fields = data['output'];
            (_a = _this.fields) === null || _a === void 0 ? void 0 : _a.forEach(function (field) {
                if ((field === null || field === void 0 ? void 0 : field.name) == 'property_type') {
                    field === null || field === void 0 ? void 0 : field.allowed_values.forEach(function (value) {
                        var _a;
                        _this.property_type.push({ name: value.replace('_', ' ').replace('_', ' '), checked: true, multi: false });
                        (_a = _this.property) === null || _a === void 0 ? void 0 : _a.push(value);
                    });
                }
                if ((field === null || field === void 0 ? void 0 : field.name) == 'market') {
                    field === null || field === void 0 ? void 0 : field.allowed_values.forEach(function (value) {
                        var _a;
                        _this.market_select.push({ name: value.replace('_', ' ').replace('_', ' '), checked: true, multi: false });
                        (_a = _this.market) === null || _a === void 0 ? void 0 : _a.push(value);
                    });
                }
                if ((field === null || field === void 0 ? void 0 : field.name) == 'status') {
                    field === null || field === void 0 ? void 0 : field.allowed_values.forEach(function (value) {
                        var _a;
                        _this.offertype_select.push({ name: value.replace('_', ' ').replace('_', ' '), checked: true, multi: false });
                        (_a = _this.offer_type) === null || _a === void 0 ? void 0 : _a.push(value);
                    });
                }
            });
            _this.loaded = true;
        });
        this.offerservice.getOffers(this.search).subscribe(function (data) {
            _this.offers = data['output'];
            console.log(_this.search);
        });
    };
    HomeComponent.prototype.UpdateQuery = function () {
        this.search = {
            "query": [
                {
                    "name": "sorting",
                    "value": this.currentsort,
                    "type": "descending"
                },
                {
                    "name": "page",
                    "value": this.currentpage
                },
                {
                    "name": "price",
                    "value": this.price_to,
                    "type": "lower"
                },
                {
                    "name": "price",
                    "value": this.price_from,
                    "type": "greater"
                },
                {
                    "name": "property_type",
                    "value": this.property
                },
                {
                    "name": "market",
                    "value": this.market
                },
                {
                    "name": "area",
                    "value": this.area_to,
                    "type": "lower"
                },
                {
                    "name": "area",
                    "value": this.area_from,
                    "type": "greater"
                },
                {
                    "name": "status",
                    "values": this.offer_type
                },
            ]
        };
        if (this.location) {
            this.search.query.push({
                "name": "location",
                "value": this.location,
                "type": ''
            });
        }
    };
    HomeComponent.prototype.Search_offers = function () {
        var _this = this;
        this.UpdateQuery();
        this.offerservice.getOffers(this.search).subscribe(function (data) {
            _this.offers = data['output'];
        });
    };
    HomeComponent.prototype.Timeorder = function () {
        var _this = this;
        this.sortby = 'Time';
        this.currentsort = 'time';
        this.UpdateQuery();
        this.offerservice.getOffers(this.search).subscribe(function (data) {
            _this.offers = data['output'];
            _this.number_offers = data['output'].length;
        });
    };
    HomeComponent.prototype.Pricingorder = function () {
        var _this = this;
        this.sortby = 'Pricing';
        this.currentsort = 'price';
        this.UpdateQuery();
        this.offerservice.getOffers(this.search).subscribe(function (data) {
            _this.offers = data['output'];
            _this.number_offers = data['output'].length;
        });
    };
    HomeComponent.prototype.ClearFilters = function () {
        this.property_type = [{ name: 'Select All', checked: true, multi: false }];
        this.market_select = [{ name: 'Select All', checked: true, multi: false }];
        this.offertype_select = [{ name: 'Select All', checked: true, multi: false }];
        this.GetSettings();
        this.location = '';
        this.price_from = '';
        this.price_to = '';
        this.area_from = '';
        this.area_to = '';
        this.UpdateQuery();
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
    HomeComponent.prototype.Pagprev = function () {
        var _this = this;
        if (this.currentpage > 1) {
            this.currentpage--;
            this.UpdateQuery();
            this.offerservice.getOffers(this.search).subscribe(function (data) {
                _this.offers = data['output'];
            });
        }
    };
    HomeComponent.prototype.Pagnext = function () {
        var _this = this;
        this.currentpage++;
        this.UpdateQuery();
        this.offerservice.getOffers(this.search).subscribe(function (data) {
            _this.offers = data['output'];
        });
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

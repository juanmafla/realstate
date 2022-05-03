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
    }
    AppComponent.prototype.ngOnInit = function () {
        this.search = {
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
                    "value": 0,
                    "type": "lower"
                },
                {
                    "name": "price",
                    "value": 50000,
                    "type": "greater"
                }
            ]
        };
        this.offerservice.getOffers(this.search).subscribe(function (data) {
            console.log(data);
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

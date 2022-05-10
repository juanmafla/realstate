"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SingleComponent = void 0;
var core_1 = require("@angular/core");
var SingleComponent = /** @class */ (function () {
    function SingleComponent(route, offerservice) {
        this.route = route;
        this.offerservice = offerservice;
        this.sync1 = {
            items: 1,
            nav: true,
            autoplay: false,
            dots: true,
            loop: false,
            responsiveRefreshRate: 200,
            navText: [
                '<i class="fal fa-angle-left"></i>',
                '<i class="fal fa-angle-right"></i>'
            ]
        };
        this.sync2 = {
            margin: 16,
            dots: false,
            nav: false,
            loop: false,
            smartSpeed: 200,
            responsiveRefreshRate: 100,
            responsive: {
                0: {
                    items: 2
                },
                576: {
                    items: 4
                }
            }
        };
        this.currentitem = '';
        this.loaded = false;
    }
    SingleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            //console.log(this.id);
            var link_id = { "id": _this.id };
            _this.offerservice.getOffer(link_id).subscribe(function (data) {
                _this.offer = data.output;
                _this.loaded = true;
                //console.log(data.output);
            });
        });
    };
    SingleComponent.prototype.getData = function (data, sl) {
        this.activeSlides = data;
        //console.log(this.activeSlides.slides![0].id);
        if (this.activeSlides.slides[0].id) {
            sl.to(this.activeSlides.slides[0].id);
        }
    };
    SingleComponent.prototype.getThumbsdata = function (sl, index, photo) {
        sl.to('sl_' + index);
        this.currentitem = photo;
    };
    SingleComponent = __decorate([
        core_1.Component({
            selector: 'app-single',
            templateUrl: './single.component.html',
            styleUrls: ['./single.component.css']
        })
    ], SingleComponent);
    return SingleComponent;
}());
exports.SingleComponent = SingleComponent;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MultiSelectDropdownComponent = void 0;
var core_1 = require("@angular/core");
var MultiSelectDropdownComponent = /** @class */ (function () {
    function MultiSelectDropdownComponent() {
        this.shareCheckedList = new core_1.EventEmitter();
        this.shareIndividualCheckedList = new core_1.EventEmitter();
        this.currentSelected = {};
        this.checkedList = [];
        this.list = [];
        this.currentSelected = {};
    }
    MultiSelectDropdownComponent.prototype.getSelectedValue = function (status, value) {
        var _this = this;
        if (status) {
            this.checkedList.push(value);
            if (value == 'All properties') {
                this.checkedList = [];
                this.list.forEach(function (element) {
                    if (element.name != 'All properties') {
                        _this.checkedList.push(element.name);
                        element.checked = true;
                    }
                });
            }
        }
        else {
            var index = this.checkedList.indexOf(value);
            this.checkedList.splice(index, 1);
            this.list.forEach(function (element) {
                if (element.name == 'All properties') {
                    if (element.checked == true) {
                        element.checked = false;
                    }
                }
            });
            if (value == 'All properties') {
                this.list.forEach(function (element) {
                    if (element.name != 'All properties') {
                        element.checked = false;
                        var index = _this.checkedList.indexOf(element.name);
                        _this.checkedList.splice(index, 1);
                    }
                });
            }
        }
        this.currentSelected = { checked: status, name: value };
        //share checked list
        this.shareCheckedlist();
        //share individual selected item
        this.shareIndividualStatus();
    };
    MultiSelectDropdownComponent.prototype.shareCheckedlist = function () {
        this.shareCheckedList.emit(this.checkedList);
    };
    MultiSelectDropdownComponent.prototype.shareIndividualStatus = function () {
        this.shareIndividualCheckedList.emit(this.currentSelected);
    };
    __decorate([
        core_1.Input()
    ], MultiSelectDropdownComponent.prototype, "list");
    __decorate([
        core_1.Output()
    ], MultiSelectDropdownComponent.prototype, "shareCheckedList");
    __decorate([
        core_1.Output()
    ], MultiSelectDropdownComponent.prototype, "shareIndividualCheckedList");
    MultiSelectDropdownComponent = __decorate([
        core_1.Component({
            selector: 'app-multi-select-dropdown',
            templateUrl: './multi-select-dropdown.component.html',
            styleUrls: ['./multi-select-dropdown.component.css']
        })
    ], MultiSelectDropdownComponent);
    return MultiSelectDropdownComponent;
}());
exports.MultiSelectDropdownComponent = MultiSelectDropdownComponent;

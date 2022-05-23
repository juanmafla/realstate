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
        this.showonselect = 'All';
        this.isall = false;
        this.checkedList = [];
        this.list = [];
        this.currentSelected = {};
        this.listname = '';
    }
    MultiSelectDropdownComponent.prototype.ngOnInit = function () {
    };
    MultiSelectDropdownComponent.prototype.getSelectedValue = function (status, value, multi, i) {
        var _this = this;
        if (!status) {
            if (!multi) {
                this.checkedList = [];
                this.checkedList.push(value);
                this.list.forEach(function (element) {
                    if (element.name != value) {
                        element.checked = false;
                    }
                });
                this.list[i].checked = true;
            }
            else {
                if (!this.checkedList.includes(value)) {
                    this.checkedList.push(value);
                    this.list[i].checked = true;
                }
                else {
                    var valin = this.checkedList.indexOf(value);
                    this.checkedList.splice(valin, 1);
                    this.list[i].checked = false;
                }
            }
            if (value == 'Select All') {
                this.checkedList = [];
                this.isall = true;
                this.list.forEach(function (element) {
                    if (element.name != 'Select All') {
                        _this.checkedList.push(element.name);
                        element.checked = true;
                    }
                });
            }
        }
        else {
            if (this.list[0].name == 'Select All' && this.list[0].checked) {
                this.isall = false;
                this.list.forEach(function (element) {
                    _this.checkedList = [];
                    element.checked = false;
                });
                this.checkedList.push(value);
                this.list[i].checked = true;
            }
            else {
                var valin = this.checkedList.indexOf(value);
                this.checkedList.splice(valin, 1);
                this.list[i].checked = false;
            }
            if (value == 'Select All') {
                this.isall = false;
                this.list.forEach(function (element) {
                    element.checked = false;
                    _this.checkedList = [];
                });
            }
        }
        this.currentSelected = { checked: status, name: value };
        if (value == 'Select All' && this.checkedList.length > 0) {
            this.showonselect = 'All';
        }
        else if (this.checkedList.length == 0) {
            this.showonselect = 'Select';
        }
        else {
            if (this.checkedList.includes(value)) {
                this.showonselect = value;
            }
            else {
                this.showonselect = this.checkedList[0];
            }
        }
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
        core_1.Input()
    ], MultiSelectDropdownComponent.prototype, "listname");
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

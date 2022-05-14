import {Component,Input,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-multi-select-dropdown',
  templateUrl: './multi-select-dropdown.component.html',
  styleUrls: ['./multi-select-dropdown.component.css']
})
export class MultiSelectDropdownComponent {
  @Input() list:any[];

    @Output() shareCheckedList = new EventEmitter();
    @Output() shareIndividualCheckedList = new EventEmitter();

    showDropDown: any;
    checkedList : any[];
    currentSelected:any ={};

  constructor() {
    this.checkedList = [];
    this.list = [];
    this.currentSelected = {};
   }

       getSelectedValue(status:Boolean,value:String){
        if(status){
          this.checkedList.push(value);
          if(value == 'All properties'){
            this.checkedList=[];
            this.list.forEach(element => {
              if(element.name!='All properties'){
                this.checkedList.push(element.name);
                element.checked = true;
              }
            });
          }
        }else{
            var index = this.checkedList.indexOf(value);
            this.checkedList.splice(index,1);

            this.list.forEach(element => {
              if(element.name=='All properties'){
                if(element.checked == true) {
                  element.checked = false;
                }
              }
            });

            if(value == 'All properties'){
              this.list.forEach(element => {
                if(element.name!='All properties'){
                    element.checked = false;
                    var index = this.checkedList.indexOf(element.name);
                    this.checkedList.splice(index,1);
                }
              });
            }


        }

        this.currentSelected = {checked : status,name:value};

        //share checked list
        this.shareCheckedlist();

        //share individual selected item
        this.shareIndividualStatus();
    }
    shareCheckedlist(){
         this.shareCheckedList.emit(this.checkedList);
    }
    shareIndividualStatus(){
        this.shareIndividualCheckedList.emit(this.currentSelected);
    }

}

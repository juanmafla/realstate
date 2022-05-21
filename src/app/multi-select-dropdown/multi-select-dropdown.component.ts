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
    showonselect: any;
    isall: boolean= false;

  constructor() {
    this.checkedList = [];
    this.list = [];
    this.currentSelected = {};
   }

       getSelectedValue(status:Boolean,value:String, multi:String, i:number){
        if(!status){
          console.log('ok');
          if(!multi) {
            this.checkedList = [];
            this.checkedList.push(value);
            this.list.forEach(element => {
              if(element.name!=value){
                element.checked = false;
              }
            });
            this.list[i].checked= true;
            console.log('aa2');
          } else {
            if(!this.checkedList.includes(value)){
              this.checkedList.push(value);
              this.list[i].checked= true;
              console.log('aa');
            }
          }

          if(value == 'Select All'){
            this.checkedList=[];
            this.isall= true;
            this.list.forEach(element => {
              if(element.name!='Select All'){
                this.checkedList.push(element.name);
                element.checked = true;
              }
            });
            console.log('aa3');
          }
        }else{
          console.log('ok2');
            if(this.list[0].name=='Select All' && this.list[0].checked) {

              this.isall= false;
              this.list.forEach(element => {
                this.checkedList = [];
                element.checked = false;
              });
              this.checkedList.push(value);
              this.list[i].checked= true;
              console.log('aa4');
            } else {
              this.checkedList.splice(i,1);
              this.list[i].checked= false;
              console.log('aa5');
            }

            if(value == 'Select All'){
              this.isall= false;
              this.list.forEach(element => {
                    element.checked = false;
                    this.checkedList = [];
              });
              console.log('aa6');
            }
        }

        this.currentSelected = {checked : status,name:value};

        console.log(this.list.length);
        console.log(this.list);
        console.log(this.checkedList.length);
        console.log(this.checkedList);
        if(value=='Select All'){
          this.showonselect= 'All properties';
        } else if(this.list.length == this.checkedList.length) {
          this.showonselect= 'All';
        } else if(this.showonselect==value) {
          this.showonselect='Select';
        } else {
          this.showonselect=value;
        }

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


import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'realstate';

  constructor(translate: TranslateService){
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('pl');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('pl');
  }



  ngOnInit(): void { }
}

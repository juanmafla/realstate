import { OffersService } from './offers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'realstate';
  search: any;

  constructor(public offerservice: OffersService){}



  ngOnInit(): void {

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

    this.offerservice.getOffers(this.search).subscribe(data=> {
      console.log(data);
    })
  }
}

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
  fields: any;
  offers: any;
  property: string = '';
  location: string = '';
  market: string = '';
  price_from: number = 300000;
  price_to: number = 50000;
  area_from: number = 0;
  area_to: number = 0;
  offer_type: string = '';
  number_offers: number = 0;

  constructor(public offerservice: OffersService){}



  ngOnInit(): void {

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
          }
        ]
    };

    this.offerservice.getSettings().subscribe(data=> {
      this.fields=data['output'];
      //console.log(data);
    });

    this.offerservice.getOffers(this.search).subscribe(data=> {
      this.offers=data['output'];
      this.number_offers=data.lenght;
      console.log(data);
      console.log(this.number_offers);
    });

  }

  Search_offers() {
    const Search_offers = {
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
        }
      ]
    };

    this.offerservice.getOffers(Search_offers).subscribe(data=> {
      this.offers=data['output'];
      this.number_offers=data['output'].lenght;
      console.log(data);
      console.log(this.number_offers);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
  loaded: boolean = false;

  constructor(public offerservice: OffersService) { }

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
      this.loaded=true;
    });

    this.offerservice.getOffers(this.search).subscribe(data=> {
      this.offers=data['output'];
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
    });
  }

  Timeorder() {
    const Search_offers = {
      "query": [
        {
          "name": "sorting",
          "value": "time",
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
      this.number_offers=data['output'].length;
    });
  }

  Pricingorder() {
    const Search_offers = {
      "query": [
        {
          "name": "sorting",
          "value": "price",
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
      this.number_offers=data['output'].length;
    });
  }

}

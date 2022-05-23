import { Component, OnInit } from '@angular/core';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  property_type : any[];
  market_select : any[];
  offertype_select : any[];
  search: any;
  fields: any;
  offers: any;
  property:any[]=[];
  location: string = '';
  market: any[]=[];
  price_from: any = 'From';
  price_to: any = 'To';
  area_from: any = 'From';
  area_to: any = 'To';
  offer_type: any[]=[];
  number_offers: number = 0;
  loaded: boolean = false;
  sortby= 'Sort by';

  constructor(public offerservice: OffersService) {
    this.property_type =
      [
        {name :'Select All',checked : true, multi: false}
      ];
    this.market_select =
      [ {name :'Select All',checked : true, multi: true} ]
    this.offertype_select =
      [ {name :'Select All',checked : true, multi: true}  ]
   }

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
          },
          /*{
            "name": "property",
            "value": this.property,
          },
          {
            "name": "location",
            "value": this.location,
          },
          {
            "name": "market",
            "value": this.market,
          },
          {
            "name": "area_from",
            "value": this.area_from,
            "type": "lower"
          },
          {
            "name": "area_to",
            "value": this.area_to,
            "type": "greater"
          },
          {
            "name": "offer_type",
            "value": this.offer_type,
          }*/
        ]
    };

    this.offerservice.getSettings().subscribe(data=> {
      this.fields=data['output'];
      this.fields?.forEach(field => {
        if(field?.name == 'property_type'){
          field?.allowed_values.forEach(value => {
              this.property_type.push({name: value.replace('_', ' ').replace('_', ' '), checked:true, multi: false});
              this.property?.push(value);
          });
        }
        if(field?.name == 'market'){
          field?.allowed_values.forEach(value => {
              this.market_select.push({name: value.replace('_', ' ').replace('_', ' '), checked:true, multi: true});
              this.market?.push(value);
          });
        }
        if(field?.name == 'offertype_select'){
          field?.allowed_values.forEach(value => {
              this.offertype_select.push({name: value.replace('_', ' ').replace('_', ' '), checked:true, multi: true});
              this.offer_type?.push(value);
          });
        }
      });
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
        },
        {
          "name": "property",
          "value": this.property,
        },
        {
          "name": "location",
          "value": this.location,
        },
        {
          "name": "market",
          "value": this.market,
        },
        {
          "name": "area_from",
          "value": this.area_from,
          "type": "lower"
        },
        {
          "name": "area_to",
          "value": this.area_to,
          "type": "greater"
        },
        {
          "name": "offer_type",
          "value": this.offer_type,
        }
      ]
    };

    this.offerservice.getOffers(Search_offers).subscribe(data=> {
      this.offers=data['output'];
      console.log(Search_offers);
    });
  }

  Timeorder() {
    this.sortby='Time';
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
        },
        {
          "name": "property",
          "value": this.property,
        },
        {
          "name": "location",
          "value": this.location,
        },
        {
          "name": "market",
          "value": this.market,
        },
        {
          "name": "area_from",
          "value": this.area_from,
          "type": "lower"
        },
        {
          "name": "area_to",
          "value": this.area_to,
          "type": "greater"
        },
        {
          "name": "offer_type",
          "value": this.offer_type,
        }
      ]
    };

    this.offerservice.getOffers(Search_offers).subscribe(data=> {
      this.offers=data['output'];
      this.number_offers=data['output'].length;
    });
  }

  Pricingorder() {
    this.sortby='Pricing';
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
        },
        {
          "name": "property",
          "value": this.property,
        },
        {
          "name": "location",
          "value": this.location,
        },
        {
          "name": "market",
          "value": this.market,
        },
        {
          "name": "area_from",
          "value": this.area_from,
          "type": "lower"
        },
        {
          "name": "area_to",
          "value": this.area_to,
          "type": "greater"
        },
        {
          "name": "offer_type",
          "value": this.offer_type,
        }
      ]
    };

    this.offerservice.getOffers(Search_offers).subscribe(data=> {
      this.offers=data['output'];
      this.number_offers=data['output'].length;
    });
  }

  propertylist(item:any[]){
    this.property=item;
  }

  marketlist(item:any[]) {
    this.market=item;
  }

  offer_typelist(item:any[]){
    this.offer_type=item;
  }

  shareCheckedList(item:any[]){
    console.log(item);
  }
  shareIndividualCheckedList(item:{}){
    console.log(item);
  }

}

import { Component, OnInit } from '@angular/core';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  property_type:Array<any>;
  market_select:Array<any>;
  offertype_select:Array<any>;
  search:any;
  fields:Array<any> = [];
  offers:Array<any> = [];
  property:Array<any> = [];
  location:string = '';
  market:Array<any> = [];
  price_from:any;
  price_to:any;
  area_from:any;
  area_to:any;
  offer_type:Array<any> = [];
  number_offers:number = 0;
  loaded:boolean = false;
  sortby:string = 'Sort by';
  currentpage:number = 1;
  currentsort:string='time';
  query_settings:any = {
                        "output": [
                          {
                            "name": "property_type",
                            "allowed_types": [
                              "equal"
                            ],
                            "allowed_values": [
                              "flat",
                              "commercial_premises",
                              "house",
                              "plot",
                              "halls_and_warehouses"
                            ],
                            "input_type": "radio"
                          },
                          {
                            "name": "status",
                            "allowed_types": [
                              "equal"
                            ],
                            "allowed_values": [
                              "sell",
                              "rent"
                            ],
                            "input_type": "radio"
                          },
                          {
                            "name": "market",
                            "allowed_types": [
                              "equal"
                            ]
                          },
                          {
                            "name": "area",
                            "allowed_types": [
                              "lower",
                              "greater"
                            ]
                          },
                          {
                            "name": "price",
                            "allowed_types": [
                              "lower",
                              "greater"
                            ]
                          },
                          {
                            "name": "price_per_m2",
                            "allowed_types": [
                              "lower",
                              "greater"
                            ]
                          },
                          {
                            "name": "floor",
                            "allowed_types": [
                              "equal"
                            ]
                          },
                          {
                            "name": "floor_number",
                            "allowed_types": [
                              "lower",
                              "greater"
                            ]
                          },
                          {
                            "name": "room_number",
                            "allowed_types": [
                              "lower",
                              "greater"
                            ]
                          },
                          {
                            "name": "tags",
                            "allowed_types": [
                              "equal"
                            ],
                            "allowed_values": [
                              "parking",
                              "garden",
                              "heating",
                              "furnishings",
                              "site",
                              "remote_service",
                              "non_smoking_only",
                              "separate_kitchen",
                              "lift",
                              "air_conditioning",
                              "fence",
                              "balcony",
                              "swimming_pool",
                              "basement",
                              "attic",
                              "terrace"
                            ],
                            "input_type": "checkbox"
                          },
                          {
                            "name": "build_year",
                            "allowed_types": [
                              "lower",
                              "greater"
                            ]
                          }
                        ]
                      }

  constructor(public offerservice: OffersService) {
    this.property_type =[{name :'Select All',checked : true, multi: false}];
    this.market_select =[{name :'Select All',checked : true, multi: false}];
    this.offertype_select =[{name :'Select All',checked : true, multi: false}];
  }
  ngOnInit(): void {
    this.UpdateQuery();
    this.GetSettings();
  }
  GetSettings(){
    this.offerservice.getSettings(this.query_settings).subscribe(data=> {
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
              this.market_select.push({name: value.replace('_', ' ').replace('_', ' '), checked:true, multi: false});
              this.market?.push(value);
          });
        }
        if(field?.name == 'status'){
          field?.allowed_values.forEach(value => {
              this.offertype_select.push({name: value.replace('_', ' ').replace('_', ' '), checked:true, multi: false});
              this.offer_type?.push(value);
          });
        }
      });
      this.loaded=true;
    });
    this.offerservice.getOffers(this.search).subscribe(data=> {
      this.offers=data['output'];
      console.log(this.search);
    });
  }
  UpdateQuery() {
    this.search = {
      "query": [
        {
          "name": "sorting",
          "value": this.currentsort,
          "type": "descending"
        },
        {
          "name": "page",
          "value": this.currentpage
        },
        {
          "name": "price",
          "value": this.price_to,
          "type": "lower"
        },
        {
          "name": "price",
          "value": this.price_from,
          "type": "greater"
        },
        {
          "name": "property_type",
          "value": this.property,
        },
        {
          "name": "market",
          "value": this.market,
        },
        {
          "name": "area",
          "value": this.area_to,
          "type": "lower"
        },
        {
          "name": "area",
          "value": this.area_from,
          "type": "greater"
        },
        {
          "name": "status",
          "values": this.offer_type
        },
      ]
    };
    if(this.location) {
      this.search.query.push({
        "name": "location",
        "value": this.location,
        "type" : ''
      });
    }
  }
  Search_offers() {
    this.UpdateQuery();
    this.offerservice.getOffers(this.search).subscribe(data=> {
      this.offers=data['output'];
    });
  }
  Timeorder() {
    this.sortby='Time';
    this.currentsort='time';
    this.UpdateQuery();
    this.offerservice.getOffers(this.search).subscribe(data=> {
      this.offers=data['output'];
      this.number_offers=data['output'].length;
    });
  }
  Pricingorder() {
    this.sortby='Pricing';
    this.currentsort='price';
    this.UpdateQuery();
    this.offerservice.getOffers(this.search).subscribe(data=> {
      this.offers=data['output'];
      this.number_offers=data['output'].length;
    });
  }
  ClearFilters() {
    this.property_type =[{name :'Select All',checked : true, multi: false}];
    this.market_select =[{name :'Select All',checked : true, multi: false}];
    this.offertype_select =[{name :'Select All',checked : true, multi: false}];
    this.GetSettings();
    this.location = '';
    this.price_from = '';
    this.price_to = '';
    this.area_from = '';
    this.area_to = '';
    this.UpdateQuery();
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
  Pagprev(){
    if(this.currentpage >1){
      this.currentpage--;
      this.UpdateQuery();
      this.offerservice.getOffers(this.search).subscribe(data=> {
        this.offers=data['output'];
      });
    }
  }
  Pagnext(){
    this.currentpage++;
    this.UpdateQuery();
    this.offerservice.getOffers(this.search).subscribe(data=> {
      this.offers=data['output'];
    });
  }
}

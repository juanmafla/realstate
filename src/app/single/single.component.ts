import { OffersService } from './../offers.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})

export class SingleComponent implements OnInit {

  id:number= 0;
  offer: any;
  sync1: OwlOptions = {
    items: 1,
    nav: true,
    autoplay: false,
    dots: true,
    loop: false,
    responsiveRefreshRate: 200,
    navText: [
        '<i class="fal fa-angle-left"></i>',
        '<i class="fal fa-angle-right"></i>'
    ]
  };
  sync2: OwlOptions = {
    margin: 16,
    dots: false,
    nav: false,
    loop: false,
    smartSpeed: 200,
    responsiveRefreshRate: 100,
    responsive: {
        0: {
            items: 2,
        },
        576: {
            items: 4,
        }
    }
  };
  owlCar2: any;
  activeSlides!:SlidesOutputData;
  slidesStore!:any[];
  currentitem: string = '';
  loaded: boolean = false;
  ariaex: boolean =false;


  constructor(private route: ActivatedRoute, public offerservice: OffersService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      const link_id= {"id": this.id};
      this.offerservice.getOffer(link_id).subscribe(data=> {
        this.offer=data.output;
        console.log(this.offer);
        this.loaded=true;
      });
    });
  }
  getData(data: SlidesOutputData, sl:any) {
    this.activeSlides = data;
    if(this.activeSlides.slides![0].id) {
      sl.to(this.activeSlides.slides![0].id);
    }
  }
  getThumbsdata(sl:any, index:number, photo:any) {
    sl.to('sl_'+index);
    this.currentitem = photo;
  }
  showmoredes() {
    if(!this.ariaex) {
      this.ariaex = true;
    } else   {
      this.ariaex = false;
    }
  }
}

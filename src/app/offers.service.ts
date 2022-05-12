import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private http: HttpClient) { }

  getOffer(link_id: any):Observable<any> {
    return this.http.post('/offer', link_id);
  }

  getOffers(search: any):Observable<any> {
    return this.http.post('/offers', search);
  }

  getSettings():Observable<any> {
    return this.http.post('/settings','');
  }
}

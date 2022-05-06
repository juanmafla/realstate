import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private http: HttpClient) { }

  getOffers(search: any):Observable<any> {
    return this.http.post('http://127.0.0.1:5000/offers', search);
  }

  getSettings():Observable<any> {
    return this.http.post('http://127.0.0.1:5000/settings','');
  }
}

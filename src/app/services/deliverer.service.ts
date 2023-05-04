import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Deliverer} from "../models/deliverer";

@Injectable({
  providedIn: 'root'
})
export class DelivererService {

  private readonly baseUrl = 'http://localhost:9001/bns/deliverers';

  constructor(private http: HttpClient) { }

  getAllDeliverers(): Observable<Deliverer[]> {
    return this.http.get<Deliverer[]>(`${this.baseUrl}/getAllDeliverers`);
  }

  getDelivererById(delivererId: number): Observable<Deliverer> {
    return this.http.get<Deliverer>(`${this.baseUrl}/getDelivererById/${delivererId}`);
  }

  addDeliverer(deliverer: Deliverer): Observable<Deliverer> {
    return this.http.post<Deliverer>(`${this.baseUrl}/addDeliverer`, deliverer);
  }

  updateDeliverer(deliverer: Deliverer): Observable<boolean> {
    return this.http.put<boolean>(`${this.baseUrl}/updateDeliverer`, deliverer);
  }

  deleteDeliverer(delivererId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/deleteDeliverer/${delivererId}`);
  }
}

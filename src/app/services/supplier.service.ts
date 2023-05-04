import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Supplier} from "../models/supplier";

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private readonly baseUrl = 'http://localhost:9001/bns/suppliers';

  constructor(private http: HttpClient) { }

  getAllSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(`${this.baseUrl}/getAllSuppliers`);
  }

  getSupplierById(supplierId: number): Observable<Supplier> {
    return this.http.get<Supplier>(`${this.baseUrl}/getSupplierById/${supplierId}`);
  }

  addSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(`${this.baseUrl}/addSupplier`, supplier);
  }

  updateSupplier(supplier: Supplier, id: number): Observable<boolean> {
    supplier.id = id;
    return this.http.put<boolean>(`${this.baseUrl}/updateSupplier`, supplier);
  }

  deleteSupplier(supplierId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/deleteSupplier/${supplierId}`);
  }
}

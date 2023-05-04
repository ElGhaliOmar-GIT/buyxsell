import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Admin} from "../models/admin";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private readonly baseUrl = 'http://localhost:9001/bns/admins';

  constructor(private http: HttpClient) { }

  getAllAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${this.baseUrl}/getAllAdmins`);
  }

  getAdminById(adminId: number): Observable<Admin> {
    return this.http.get<Admin>(`${this.baseUrl}/getAdminById/${adminId}`);
  }

  addAdmin(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(`${this.baseUrl}/addAdmin`, admin);
  }

  updateAdmin(admin: Admin): Observable<boolean> {
    return this.http.put<boolean>(`${this.baseUrl}/updateAdmin`, admin);
  }

  deleteAdmin(adminId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/deleteAdmin/${adminId}`);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../models/client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private readonly baseUrl = 'http://localhost:9001/bns/clients';

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.baseUrl}/getAllClients`);
  }

  getClientById(clientId: number): Observable<Client> {
    return this.http.get<Client>(`${this.baseUrl}/getClientById/${clientId}`);
  }

  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.baseUrl}/addClient`, client);
  }

  updateClient(client: Client): Observable<boolean> {
    return this.http.put<boolean>(`${this.baseUrl}/updateClient`, client);
  }

  deleteClient(clientId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/deleteClient/${clientId}`);
  }
}

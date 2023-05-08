import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseUrl = 'http://localhost:9000/bns/users';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/getAllUsers`);
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/getUserById/${userId}`);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/addUser`, user);
  }

  updateUser(user: User, id: number): Observable<User> {
    user.id = id;
    return this.http.put<User>(`${this.baseUrl}/updateUser`, user);
  }

  deleteUser(userId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/deleteUser/${userId}`);
  }

}

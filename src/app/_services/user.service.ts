import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserClass } from 'src/app/dashboard/classes/user-class';
import { Garbagept } from '../dashboard/classes/garbagept';

const API_URL = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

const httpOption2 = {
  headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
 
  updateEmployee(id: any, users: UserClass) {
    return this.http.put(`${API_URL}users/update/`+id, users);
  }
  getEmployeeById(id: number) {
    return this.http.get<UserClass>(`${API_URL}users/user/` + id,httpOptions);

  }
  getAllEmployees() {
    return this.http.get(`${API_URL}users`);
  }
  deleteEmployee(id: number) {
    return this.http.delete(`${API_URL}user/` + id);
  }
  getAllUsers() {
    return this.http.get<UserClass>(`${API_URL}users`);
  }

  postAll(userData: any) {
    return this.http.post<UserClass>(`${API_URL}signup`, userData);
  }

  constructor(private http: HttpClient) {}

  update(id: any, userData: any) {
    return this.http.post(`${API_URL}` + id, userData, httpOptions);
  }

  updateProfileImage(id: number, profile: any): Observable<any> {
    return this.http.post(`${API_URL}${profile}/${id}`, profile, {
      responseType: 'arraybuffer',
    });
  }

  getPublicContent(username: string): Observable<any> {
    return this.http.get(`${API_URL}${username}`, httpOptions);
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(username: string): Observable<any> {
    return this.http.get(`${API_URL}user/${username}`, httpOptions);
  }

  usersByEmailDepartment(userId: number) {
    return this.http.get(`${API_URL}department/${userId}`, httpOptions);
  }
}

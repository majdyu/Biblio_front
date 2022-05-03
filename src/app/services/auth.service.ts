import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login.model';
import { ManagerUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor(private http: HttpClient) { }

  authentication(login : Login): Observable<any>{
    return this.http.post(environment.api+"/api/authenticate", login);
  }
  isAuthenticated(): Observable<any> {
    return this.http.get(environment.api+"/api/authenticate");
  }
  register(user: ManagerUser){
    user.activated = true;
    return this.http.post(environment.api+"/api/register", user)
  }
}

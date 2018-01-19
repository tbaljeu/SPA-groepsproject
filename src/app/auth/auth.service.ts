import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';

@Injectable()
export class AuthService {
  token: string;

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private serverUrl = environment.serverUrl;
  private users: User[] = [];
  private user : User;
  //
  //
  //
  constructor(private http: Http) {}

  //
  //
  //
  public signupUser(username: string, password: string) {
    console.log('items ophalen van server');
    return this.http.get(this.serverUrl, { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as User[];
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  public signinUser(username: string, password: string) {
    console.log( "user = " + username);
    return this.http.get(this.serverUrl + '/' + username + '/' + password, { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as User[];
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  public logout() {
    this.token = null;
  }
  //

  isAuthenticated() {
    return this.token != null;
  }
  //
  //
  private handleError(error: any): Promise<any> {
    console.log('handleError');
    return Promise.reject(error.message || error);
  }

}

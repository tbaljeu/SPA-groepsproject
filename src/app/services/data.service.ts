import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Data } from '../models/data.model';

@Injectable()
export class DataService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private serverUrl = environment.serverUrl; // URL to web api
  private datas: Data[] = [];
  private data : Data;
  //
  //
  //
  constructor(private http: Http) { }

  //
  //
  //
  public getRaw(): Promise<any> {
    console.log('items ophalen van server');
    return this.http.get(this.serverUrl + '/rawdatas', { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as any[];
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  private handleError(error: any): Promise<any> {
    console.log('handleError');
    return Promise.reject(error.message || error);
  }
}

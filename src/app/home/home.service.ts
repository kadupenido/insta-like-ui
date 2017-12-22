import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';

@Injectable()
export class HomeService {

  private baseUrl = environment.baseUrl + '/user';

  constructor(private http: HttpClient) { }

  getUserInfo() {
    const url = `${this.baseUrl}/me/`;
    return this.http.get(url);
  }

}

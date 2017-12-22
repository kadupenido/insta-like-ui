import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';

@Injectable()
export class AuthService {

  private baseUrl = environment.baseUrl + '/auth';

  constructor(private http: HttpClient) { }

  authenticate(user, password) {

    const url = `${this.baseUrl}/authe5nticate/`;

    const body = { user: user, password: password };

    return this.http.post(url, body).toPromise().then((token) => {

      console.log(token);
      return {
        success: true
      };

    }, (err) => {
      return {
        success: false
      };
    });
  }

  getToken(): string {
    return 'eyJhbGciOiJIUzI1NiJ9.a2FkdXBlbmlkbw.xGjzd3XQMkPZx5TY6uknWf4au2Z9sJB2KnHNl6aTUkk';
  }

}

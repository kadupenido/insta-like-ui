import { HttpClient } from '@angular/common/http';
import { Injectable, transition } from '@angular/core';

import { environment } from './../../environments/environment';

@Injectable()
export class AuthService {

  private baseUrl = environment.baseUrl + '/auth';

  constructor(private http: HttpClient) { }

  authenticate(user, password) {

    const url = `${this.baseUrl}/authenticate/`;

    const body = { user: user, password: password };

    return this.http.post(url, body).toPromise().then((res: any) => {

      localStorage.setItem('iL', JSON.stringify({ token: res.token, exp: res.exp }));

      return {
        success: true
      };

    }, (err) => {
      return err.error;
    });
  }

  isLoggedIn() {

    const token = this.getToken();

    if (!token || token.exp < new Date()) {
      this.destroyToken();
      return false;
    }

    return true;
  }

  private getToken(): any {
    return JSON.parse(localStorage.getItem('iL'));
  }

  private destroyToken(): any {
    return localStorage.removeItem('iL');
  }

}

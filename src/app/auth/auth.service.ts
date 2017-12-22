import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  getToken(): string {
    return 'eyJhbGciOiJIUzI1NiJ9.a2FkdXBlbmlkbw.xGjzd3XQMkPZx5TY6uknWf4au2Z9sJB2KnHNl6aTUkk';
  }

}

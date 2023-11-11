import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// services are constructed at the start of the application and not
// destroyed until the app is closed (user closes the app in browser). This
// is considered "Singleton". Whereas components are built and destroyed
// as the user navigates to them

// services are a good place to store any type of state we want our app to remember

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  login(model: any){
    return this.http.post(this.baseUrl + 'account/login', model);
  }
}

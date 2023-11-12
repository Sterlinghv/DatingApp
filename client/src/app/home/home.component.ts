import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  registerMode = false;
  users: any; // bad

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
  }

  registerToggle() {
    this.registerMode = !this.registerMode; // sets to opposite
  }

  getUsers(){
    // observable is a stream of data, want to observe what is coming back from out dotnet api
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Request has worked!')
    })
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
}

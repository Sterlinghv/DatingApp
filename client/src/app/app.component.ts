import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { // oninit is an interface that handles initilization tasks for a component
  title: string ='Dating app';
  users: any; // bad

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // observable is a stream of data, want to observe what is coming back from out dotnet api
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Request has worked!')
    })
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  registerMode = false;
  users: any; // bad

  constructor() {}

  ngOnInit(): void {
  }

  registerToggle() {
    this.registerMode = !this.registerMode; // sets to opposite
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
}

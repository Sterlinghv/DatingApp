import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Input() usersFromHomeComponent: any; // parent to child
  @Output() cancelRegister = new EventEmitter(); // child to parent
  model: any = {}

  constructor() {}

  ngOnInit(): void {

  }

  register(){
    console.log(this.model);
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}

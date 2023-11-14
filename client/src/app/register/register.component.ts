import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // @Input() usersFromHomeComponent: any; // parent to child
  @Output() cancelRegister = new EventEmitter(); // child to parent
  model: any = {}

  constructor(private accountService: AccountService, private toastr: ToastrService) {}

  ngOnInit(): void {

  }

  register(){
    this.accountService.register(this.model).subscribe({
      next: () => {
        this.cancel(); // close register form
      },
      error: error => this.toastr.error(error.error)
    })
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}

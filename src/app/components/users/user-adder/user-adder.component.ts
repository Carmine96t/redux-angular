import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-adder',
  templateUrl: './user-adder.component.html',
  styleUrls: ['./user-adder.component.scss']
})
export class UserAdderComponent implements OnInit {

  @Input() users: ReadonlyArray<User> = [];
  @Output() add = new EventEmitter<User>();

  firstName = '';
  lastName = '';
  username = '';

  constructor() { }

  ngOnInit(): void {
  }

  addUser() {
    
    let userId: string = (this.users.length + 1).toString();
    let toEmit = {} as User;

    if(!this.firstName || !this.lastName || !this.username) return;

    toEmit.firstName = this.firstName;
    toEmit.lastName = this.lastName;
    toEmit.username = this.username;
    toEmit.userId = userId;

    this.firstName = '';
    this.lastName = '';
    this.username = '';

    this.add.emit(toEmit);
    
  }

}

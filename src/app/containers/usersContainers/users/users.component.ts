import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import * as UserActions from '../../../state/users.actions';
import * as fromUser from '../../../state/users.selectors';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: ReadonlyArray<User> = [];

  constructor(private store: Store, private _usersService: UsersService) { 
  }

  ngOnInit(): void {
    this._usersService.getJSON().subscribe( users => {
      console.log(users);
      this.store.dispatch(UserActions.retrievedUserList({ users }));
    });

    this.store.select(fromUser.selectUsers).pipe().subscribe((users) => this.users = users);
  }

  onAdd(user: User){
    this.store.dispatch(UserActions.addUser({user: user }));
  }

  onRemove(user: User){
    this.store.dispatch(UserActions.removeUser({user: user}));
  }



}

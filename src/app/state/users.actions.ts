import { Action, createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';
 
export const addUser = createAction(
  '[User List] Add User',
  props<{ user: User }>()
);

export const removeUser = createAction(
  '[User Collection] Remove User',
  props<{ user: User }>()
);

export const retrievedUserList = createAction(
  '[User List/API] Retrieve Users Success',
  props<{ users: ReadonlyArray<User> }>()
);
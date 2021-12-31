import { Action, createReducer, on } from '@ngrx/store';

import { removeUser, retrievedUserList } from './users.actions';
import { User } from '../models/user.model';

export const initialState: ReadonlyArray<User> = [];

export const usersReducer = createReducer(
  initialState,
  on(retrievedUserList, (state, { users }) => users),
  on(removeUser, (state, { user }) => state.filter((item) => item.userId !== user.userId)),
);

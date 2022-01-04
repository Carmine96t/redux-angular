import { Action, createReducer, on, State } from '@ngrx/store';

import { addUser, removeUser, retrievedUserList } from './users.actions';
import { User } from '../models/user.model';

export const initialState: ReadonlyArray<User> = [];

export const usersReducer = createReducer(
  initialState,
  on(retrievedUserList, (state, { users }) => users),
  on(removeUser, (state, { user }) => state.filter((item) => item.userId !== user.userId)),
  on(addUser, (state, { user }) => {
    let contains = state.find(item => item.userId === user.userId || item.username === user.username);
    if(contains) return state;
    return [...state, user] 
  } )
);

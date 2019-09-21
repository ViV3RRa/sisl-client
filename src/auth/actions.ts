import { Dispatch } from 'react';
import { Actions, IAuthState } from './reducers';

export const useActions = (state: IAuthState, dispatch: Dispatch<Actions>) => ({
  logout: () => dispatch({ type: 'LOGOUT' }),
  login: (username: string, password: string) =>
    dispatch({ type: 'LOGIN', payload: { username, password } })
});

export type IActions = ReturnType<typeof useActions>;

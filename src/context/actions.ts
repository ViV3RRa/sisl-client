import { Dispatch } from 'react';
import { Actions, IState } from './reducers';
import { Actions as AuthActions } from '../auth/reducers';
import { useActions as useAuthActions } from '../auth/actions';
import { Actions as UIActions } from '../ui/reducers';
import { useActions as useUIActions } from '../ui/actions';
import { Actions as GlobalActions } from '../global/reducers';
import { useActions as useGlobalActions } from '../global/actions';

export const useActions = (state: IState, dispatch: Dispatch<Actions>) => ({
  global: useGlobalActions(state.global, dispatch as Dispatch<GlobalActions>),
  auth: useAuthActions(state.auth, dispatch as Dispatch<AuthActions>),
  ui: useUIActions(state.ui, dispatch as Dispatch<UIActions>)
});

export type IActions = ReturnType<typeof useActions>;

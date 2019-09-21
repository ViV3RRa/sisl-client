import {
  IAuthState,
  initialState as initialAuthState,
  Actions as AuthActions,
  reducer as authReducer
} from '../auth/reducers';
import {
  initialState as initialGlobalState,
  Actions as GlobalActions,
  reducer as globalReducer,
  IGlobalState
} from '../global/reducers';
import {
  initialState as initialUIState,
  IUIState,
  rootReducer as uiReducer,
  Actions as UIActions
} from '../ui/reducers';

export interface IState {
  global: IGlobalState;
  auth: IAuthState;
  ui: IUIState;
}

export const initialState: IState = {
  global: initialGlobalState,
  auth: initialAuthState,
  ui: initialUIState
};

export type Actions = GlobalActions | AuthActions | UIActions;

export const mainReducer = ({ global, auth, ui }: IState, action: Actions) => {
  // Run middleware here
  return {
    global: globalReducer(global, action as GlobalActions),
    auth: authReducer(auth, action as AuthActions),
    ui: uiReducer(ui, action as UIActions)
  };
};

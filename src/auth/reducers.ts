export interface IAuthState {
  username: string;
  authenticated: boolean;
}

const initialState: IAuthState = {
  username: '',
  authenticated: false
};

interface ILogout {
  type: 'LOGOUT';
}

interface ILogin {
  type: 'LOGIN';
  payload: { username: string; password: string };
}

export type Actions = ILogout | ILogin;

const reducer = (state: IAuthState = initialState, action: Actions) => {
  switch (action.type) {
    case 'LOGOUT':
      return { ...state, username: '' };
    case 'LOGIN':
      return { ...state, username: action.payload.username };
    default:
      return state;
  }
};

export { initialState, reducer };

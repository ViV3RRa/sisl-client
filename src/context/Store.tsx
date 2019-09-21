import React, { createContext, useReducer, Dispatch, useContext } from 'react';
import { Actions, IState, mainReducer, initialState } from './reducers';
import { useActions, IActions } from './actions';

export interface IStoreContext {
  state: IState;
  dispatch: Dispatch<Actions>;
  actions: IActions;
}

export const StoreContext = createContext({} as IStoreContext);

export const StoreProvider = (props: any) => {
  const { children } = props;
  const [state, dispatch] = useReducer(mainReducer, initialState);
  const actions = useActions(state, dispatch);

  const value = { state, dispatch, actions };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);

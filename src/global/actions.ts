import { Dispatch } from 'react';
import { Actions, IGlobalState } from './reducers';

export const useActions = (
  state: IGlobalState,
  dispatch: Dispatch<Actions>
) => ({
  setName: (name: string) => dispatch({ type: 'CHANGE_NAME', payload: name })
});

export type IActions = ReturnType<typeof useActions>;

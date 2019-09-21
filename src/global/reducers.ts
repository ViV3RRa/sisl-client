export interface IGlobalState {
  name: string;
}

export const initialState: IGlobalState = {
  name: 'test'
};

interface IChangeName {
  type: 'CHANGE_NAME';
  payload: string;
}

export type Actions = IChangeName;

export const reducer = (
  state: IGlobalState = initialState,
  action: IChangeName
) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.payload
      };
    default:
      return state;
  }
};

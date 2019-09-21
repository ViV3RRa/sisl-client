import { AccountValue } from "../../customtypes";

export interface IUIStateAccountValues {
  fetching: boolean;
  data: AccountValue[];
}

export const initialStateAccountValuess: IUIStateAccountValues = {
  fetching: false,
  data: []
};

interface IAccountValuesFetching {
  type: 'ACCOUNT_VALUES_FETCHING';
}

interface IAccountValuesFetched {
  type: 'ACCOUNT_VALUES_FETCHED';
  payload: AccountValue[];
}

export type AccountValuesActions =
  | IAccountValuesFetching
  | IAccountValuesFetched;

export function accountValuessReducer(
  state: IUIStateAccountValues = initialStateAccountValuess,
  action: AccountValuesActions
) {
  switch (action.type) {
    case 'ACCOUNT_VALUES_FETCHING':
      return {
        ...state,
        fetching: true,
        data: []
      };
    case 'ACCOUNT_VALUES_FETCHED':
      return {
        ...state,
        fetching: false,
        data: action.payload
      };
    default:
      return state;
  }
}

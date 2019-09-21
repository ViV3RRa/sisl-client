export interface IUIStateAllPlanDefinitions {
  fetching: boolean;
  data: {}[];
}

export const initialStateAllPlanDefinitions: IUIStateAllPlanDefinitions = {
  fetching: false,
  data: []
};

export interface IAllPlanDefinitionsFetching {
  type: 'ALL_PLAN_DEFINITIONS_FETCHING';
}

export interface IAllPlanDefinitionsFetched {
  type: 'ALL_PLAN_DEFINITIONS_FETCHED';
  payload: any;
}

export type AllPlanDefinitionsActions =
  | IAllPlanDefinitionsFetching
  | IAllPlanDefinitionsFetched;

export function allPlanDefinitionsReducer(
  state: IUIStateAllPlanDefinitions = initialStateAllPlanDefinitions,
  action: AllPlanDefinitionsActions
) {
  switch (action.type) {
    case 'ALL_PLAN_DEFINITIONS_FETCHING':
      return {
        ...state,
        fetching: true,
        data: []
      };
    case 'ALL_PLAN_DEFINITIONS_FETCHED':
      return {
        ...state,
        fetching: false,
        data: action.payload
      };
    default:
      return state;
  }
}

import {
  allPlanDefinitionsReducer,
  IAllPlanDefinitionsFetching,
  IUIStateAllPlanDefinitions,
  IAllPlanDefinitionsFetched
} from './all-plan-definitions-reducer';

describe('all plan definitions reducer', () => {
  it('should set fetching true when fetching', () => {
    const initialState: IUIStateAllPlanDefinitions = {
      fetching: false,
      data: []
    };
    const action: IAllPlanDefinitionsFetching = {
      type: 'ALL_PLAN_DEFINITIONS_FETCHING'
    };
    const newState = allPlanDefinitionsReducer(initialState, action);
    expect(newState).toEqual({
      fetching: true,
      data: []
    });
  });

  it('should set fetching false and return payload when fetched', () => {
    const initialState: IUIStateAllPlanDefinitions = {
      fetching: true,
      data: []
    };
    const payload = [
      {
        test: 'data'
      }
    ];
    const action: IAllPlanDefinitionsFetched = {
      type: 'ALL_PLAN_DEFINITIONS_FETCHED',
      payload
    };
    const newState = allPlanDefinitionsReducer(initialState, action);
    expect(newState).toEqual({
      fetching: false,
      data: payload
    });
  });

  it('should return unchanged state when called with unknown actions', () => {
    const initialState: IUIStateAllPlanDefinitions = {
      fetching: true,
      data: []
    };
    const payload = [
      {
        test: 'data'
      }
    ];
    const action = {
      type: 'UNKNOWN_ACTION',
      payload
    };
    const newState = allPlanDefinitionsReducer(initialState, action as any);
    expect(newState).toEqual(initialState);
  });
});

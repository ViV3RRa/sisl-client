import { Dispatch } from 'react';
import { Actions, IUIState } from './reducers';
import {
  getPlanDefinitions,
  getQuestionnaires,
  getAllPlandefinitions,
  getAllQuestionnaires,
  getAllAccountValues
} from '../api/api';

export const useActions = (state: IUIState, dispatch: Dispatch<Actions>) => {
  const populateDashboard = (data: any) => {
    if (data.hasOwnProperty('resource')) {
      // Get PlanDefinitions attached to data
      const planDefinitionIds: any = [];
      fetchPlanDefinitions(planDefinitionIds);

      // Get Questionnaires attached to data
      // TODO: this should be changed souch that questionnaires are found by FHIR-internal-reference-identifiers
      const questionnaireIds: any = [];
      fetchQuestionnaires(questionnaireIds);
    } else {
      dispatch({ type: 'CLEAR_PLAN_DEFINITIONS', payload: data });
      dispatch({ type: 'CLEAR_QUESTIONNAIRES', payload: data });
    }
  };

  const fetchAccountValues = () => {
    dispatch({ type: 'ACCOUNT_VALUES_FETCHING' });
    getAllAccountValues().then(accountValues => {
      dispatch({ type: 'ACCOUNT_VALUES_FETCHED', payload: accountValues });
    });
  };

  const fetchPlanDefinitions = (ids: string[]) => {
    dispatch({ type: 'PLAN_DEFINITIONS_FETCHING', payload: ids });
    getPlanDefinitions(ids).then(data => {
      dispatch({ type: 'PLAN_DEFINITIONS_FETCHED', payload: data });
    });
  };

  const fetchQuestionnaires = (ids: string[]) => {
    dispatch({ type: 'QUESTIONNAIRES_FETCHING', payload: ids });
    getQuestionnaires(ids).then(data => {
      dispatch({ type: 'QUESTIONNAIRES_FETCHED', payload: data });
    });
  };

  const fetchAllPlanDefinitions = () => {
    dispatch({ type: 'ALL_PLAN_DEFINITIONS_FETCHING' });
    getAllPlandefinitions().then(data => {
      dispatch({ type: 'ALL_PLAN_DEFINITIONS_FETCHED', payload: data });
    });
  };

  const fetchAllQuestionnaires = () => {
    dispatch({ type: 'ALL_QUESTIONNAIRES_FETCHING', payload: {} });
    getAllQuestionnaires().then(data => {
      dispatch({ type: 'ALL_QUESTIONNAIRES_FETCHED', payload: data });
    });
  };

  /*
  const selectAccount = (account: any) => {
    dispatch({ type: 'ACCOUNT_SELECTED', payload: account });
  };
  */

  return {
    fetchAccountValues,
    populateDashboard,
    fetchPlanDefinitions,
    fetchQuestionnaires,
    fetchAllQuestionnaires,
    fetchAllPlanDefinitions,
  };
};

export type IActions = ReturnType<typeof useActions>;

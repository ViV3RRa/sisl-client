interface IAllQuestionnairesFetching {
  type: 'ALL_QUESTIONNAIRES_FETCHING';
  payload: any;
}

interface IAllQuestionnairesFetched {
  type: 'ALL_QUESTIONNAIRES_FETCHED';
  payload: any;
}

export type AllQuestionnairesActions =
  | IAllQuestionnairesFetching
  | IAllQuestionnairesFetched;

export interface IUIStateAllQuestionnaires {
  fetching: boolean;
  data: {}[];
}

export const initialStateAllQuestionnaires: IUIStateAllQuestionnaires = {
  fetching: false,
  data: []
};

export function allQuestionnairesReducer(
  state: IUIStateAllQuestionnaires = initialStateAllQuestionnaires,
  action: AllQuestionnairesActions
) {
  switch (action.type) {
    case 'ALL_QUESTIONNAIRES_FETCHING':
      return {
        ...state,
        fetching: true,
        data: []
      };
    case 'ALL_QUESTIONNAIRES_FETCHED':
      return {
        ...state,
        fetching: false,
        data: action.payload
      };
    default:
      return state;
  }
}

import { Actions } from './../../ui/reducers';

export interface IUIStateQuestionnaireAnswers {
  fetching: boolean;
  data: {}[];
}

export const initialStateQuestionnaireAnswers: IUIStateQuestionnaireAnswers = {
  fetching: false,
  data: []
};

export type QuestionnaireAnswersActions = Actions;

export function questionnaireAnswersReducer(
  state: IUIStateQuestionnaireAnswers = initialStateQuestionnaireAnswers,
  action: QuestionnaireAnswersActions
) {
  switch (action.type) {
    default:
      return state;
  }
}

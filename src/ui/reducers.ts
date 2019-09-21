import { cloneObject } from '../utils/utils';
import {
  IUIStateQuestionnaireAnswers,
  initialStateQuestionnaireAnswers,
  QuestionnaireAnswersActions,
  questionnaireAnswersReducer
} from './reducers/questionnaire-answers-reducer';
import {
  IUIStateAllQuestionnaires,
  initialStateAllQuestionnaires,
  AllQuestionnairesActions,
  allQuestionnairesReducer
} from './reducers/all-questionnaires-reducer';
import {
  IUIStateAllPlanDefinitions,
  initialStateAllPlanDefinitions,
  AllPlanDefinitionsActions,
  allPlanDefinitionsReducer
} from './reducers/all-plan-definitions-reducer';
import { IUIStateAccountValues, initialStateAccountValuess, AccountValuesActions, accountValuessReducer } from './reducers/account-values-reducer';

export interface Measurement {
  date: any; // Is string in store, but will be parsed as Date object when used.
  value: number;
}

export interface MeasurementCollection {
  type: string;
  reference: string;
  unit: string;
  values: Measurement[];
}

export interface MeasurementScale {
  type: string;
  scale: number[];
}

interface Color {
  type: string;
  color: string;
}

export interface MeasurementColor extends Color {}

export interface ThresholdColor extends Color {}

interface IUIStateOther {
  planDefinitions: {
    fetching: boolean;
    data: {}[];
  };
  questionnaires: {
    fetching: boolean;
    data: {}[];
  };
  thresholds: {}[];
  resourceFinder: {
    data: any[];
  };
  measurementData: MeasurementCollection[];
  measurementScales: MeasurementScale[];
  measurementColors: MeasurementColor[];
  thresholdColors: ThresholdColor[];
}

export interface IUIState {
  accountValues: IUIStateAccountValues;
  questionnaireAnswers: IUIStateQuestionnaireAnswers;
  allQuestionnaires: IUIStateAllQuestionnaires;
  allPlanDefinitions: IUIStateAllPlanDefinitions;
  other: IUIStateOther;
}

const initialStateOther: IUIStateOther = {
  planDefinitions: {
    fetching: false,
    data: []
  },
  questionnaires: {
    fetching: false,
    data: []
  },
  thresholds: [
    {
      type: 'Threshold',
      title: '',
      values: ['Red high', 'Yellow high', 'Red low', 'Yellow low'],
      action: 'none'
    }
  ],
  resourceFinder: {
    data: []
  },
  measurementData: [
    {
      type: 'data',
      reference: 'testData',
      unit: 'mm',
      values: [
        {
          date: '2013-09-06T10:37:00.000Z',
          value: 1
        },
        {
          date: '2013-09-06T11:29:00.000Z',
          value: 2
        },
        {
          date: '2013-09-06T12:48:00.000Z',
          value: 3
        },
        {
          date: '2013-09-06T14:18:00.000Z',
          value: 4
        }
      ]
    }
  ],
  measurementScales: [
    {
      type: 'testScale',
      scale: [40, 200]
    }
  ],
  measurementColors: [
    {
      type: 'testColor',
      color: '#CCCC00'
    }
  ],
  thresholdColors: [
    {
      type: 'Red high',
      color: '#DC143C'
    },
    {
      type: 'Yellow high',
      color: '#FEDF00'
    },
    {
      type: 'Red low',
      color: '#DC143C'
    },
    {
      type: 'Yellow low',
      color: '#FEDF00'
    }
  ]
};

export const initialState: IUIState = {
  accountValues: initialStateAccountValuess,
  questionnaireAnswers: initialStateQuestionnaireAnswers,
  allQuestionnaires: initialStateAllQuestionnaires,
  allPlanDefinitions: initialStateAllPlanDefinitions,
  other: initialStateOther
};

interface IPlanDefinitionsFetching {
  type: 'PLAN_DEFINITIONS_FETCHING';
  payload: any;
}

interface IPlanDefinitionsFetched {
  type: 'PLAN_DEFINITIONS_FETCHED';
  payload: any;
}

interface IQuestionnairesFetching {
  type: 'QUESTIONNAIRES_FETCHING';
  payload: any;
}

interface IQuestionnairesFetched {
  type: 'QUESTIONNAIRES_FETCHED';
  payload: any;
}

interface IClearPlanDefinitions {
  type: 'CLEAR_PLAN_DEFINITIONS';
  payload: any;
}

interface IClearQuestionnaires {
  type: 'CLEAR_QUESTIONNAIRES';
  payload: any;
}
export type Actions =
  | OtherActions
  | AllQuestionnairesActions
  | AllPlanDefinitionsActions
  | AccountValuesActions;

type OtherActions =
  | IPlanDefinitionsFetching
  | IPlanDefinitionsFetched
  | IQuestionnairesFetching
  | IQuestionnairesFetched
  | IClearPlanDefinitions
  | IClearQuestionnaires;

export function rootReducer(state: IUIState, action: any) {
  return {
    accountValues: accountValuessReducer(state.accountValues, action),
    questionnaireAnswers: questionnaireAnswersReducer(
      state.questionnaireAnswers,
      action
    ),
    allQuestionnaires: allQuestionnairesReducer(
      state.allQuestionnaires,
      action
    ),
    allPlanDefinitions: allPlanDefinitionsReducer(
      state.allPlanDefinitions,
      action
    ),
    other: otherReducer(state.other, action)
  };
}

const otherReducer = (
  state: IUIStateOther = initialStateOther,
  action: OtherActions
) => {
  switch (action.type) {
    case 'PLAN_DEFINITIONS_FETCHING':
      return {
        ...state,
        planDefinitions: {
          fetching: true,
          data: []
        }
      };
    case 'PLAN_DEFINITIONS_FETCHED':
      return {
        ...state,
        planDefinitions: {
          fetching: false,
          data: action.payload
        }
      };
    case 'QUESTIONNAIRES_FETCHING':
      return {
        ...state,
        questionnaires: {
          fetching: true,
          data: []
        }
      };
    case 'QUESTIONNAIRES_FETCHED':
      return {
        ...state,
        questionnaires: {
          fetching: false,
          data: action.payload
        }
      };
    case 'CLEAR_PLAN_DEFINITIONS':
      return {
        ...state,
        planDefinitions: {
          fetching: false,
          data: []
        }
      };
    case 'CLEAR_QUESTIONNAIRES':
      return {
        ...state,
        questionnaires: {
          fetching: false,
          data: []
        }
      };
    default:
      return state;
  }
};

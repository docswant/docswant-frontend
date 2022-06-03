import { handleActions } from 'redux-actions';
import { createAction } from 'redux-actions';

const QUESTION_INITIALIZE = 'questionList/QUESTION_INITIALIZE';
const QUESTION_LIST_SUCCESS = 'questionList/QUESTION_LIST_SUCCESS';
const QUESTION_LIST_FAILURE = 'questionList/QUESTION_LIST_FAILURE';
const QUESTION_CHANGE = 'questionList/QUESTION_CHANGE';
const QUESTION_UPDATE_CHANGE = 'questionList/QUESTION_UPDATE_CHANGE';
const QUESTION_SUBMIT_SUCCESS = 'questionList/QUESTION_SUBMIT_SUCCESS';
const QUESTION_SUBMIT_FAILURE = 'questionList/QUESTION_SUBMIT_FAILURE';
const QUESTION_DELETE_SUCCESS = 'questionList/QUESTION_DELETE_SUCCESS';
const QUESTION_DELETE_FAILURE = 'questionList/QUSTION_DELETE_FAILURE';
const QUESTION_UPDATE_SUCCESS = 'questionList/QUESTION_UPDATE_SUCCESS';
const QUESTION_UPDATE_FAILURE = 'questionList/QUSTION_UPDATE_FAILURE';

export const questionInitialize = createAction(QUESTION_INITIALIZE);
export const questionListSuccess = createAction(
  QUESTION_LIST_SUCCESS,
  (list) => list,
);
export const questionListFailure = createAction(
  QUESTION_LIST_FAILURE,
  (error) => error,
);
export const questionChange = createAction(
  QUESTION_CHANGE,
  ({ key, value }) => ({ key, value }),
);
export const questionUpdateChange = createAction(
  QUESTION_UPDATE_CHANGE,
  ({ key, value }) => ({ key, value }),
);
export const questionSubmitSuccess = createAction(
  QUESTION_SUBMIT_SUCCESS,
  (success) => success,
);
export const questionSubmitFailure = createAction(
  QUESTION_SUBMIT_FAILURE,
  (error) => error,
);
export const questionDeleteSuccess = createAction(
  QUESTION_DELETE_SUCCESS,
  (success) => success,
);
export const questionDeleteFailure = createAction(
  QUESTION_DELETE_FAILURE,
  (error) => error,
);
export const questionUpdateSuccess = createAction(
  QUESTION_UPDATE_SUCCESS,
  (success) => success,
);
export const questionUpdateFailure = createAction(
  QUESTION_UPDATE_FAILURE,
  (error) => error,
);

const initialState = {
  questionList: null,
  questionListError: null,
  questionSubmit: null,
  questionSubmitError: null,
  questionDelete: null,
  questionDeleteError: null,
  questionUpdate: null,
  questionUpdateError: null,

  questionText: '',
  questionUpdateText: '',
};

const questionList = handleActions(
  {
    [QUESTION_INITIALIZE]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    [QUESTION_LIST_SUCCESS]: (state, { payload: list }) => ({
      ...state,
      questionList: list,
      questionListError: null,
    }),
    [QUESTION_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      questionListError: error,
    }),
    [QUESTION_SUBMIT_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      questionSubmit: success,
      questionSubmitFailure: null,
    }),
    [QUESTION_SUBMIT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      questionSubmitFailure: error,
    }),
    [QUESTION_DELETE_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      questionDelete: success,
      questionDeleteError: null,
    }),
    [QUESTION_DELETE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      questionDeleteError: error,
    }),
    [QUESTION_UPDATE_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      questionUpdate: success,
      questionUpdateError: null,
    }),
    [QUESTION_UPDATE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      questionUpdateError: error,
    }),
    [QUESTION_CHANGE]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [QUESTION_UPDATE_CHANGE]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
  },
  initialState,
);

export default questionList;

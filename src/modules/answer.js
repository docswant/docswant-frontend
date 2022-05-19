import { handleActions } from 'redux-actions';
import { createAction } from 'redux-actions';

const ANSWER_CHANGE = 'answer/ANSWER_CHANGE';
const ANSWER_INITIALIZE = 'answer/ANSWER_INITIALIZE';
const ANSWER_SUCCESS = 'answer/ANSWER_SUCCESS';
const ANSWER_FAILURE = 'answer/ANSWER_FAILURE';

export const answerChange = createAction(ANSWER_CHANGE, ({ key, value }) => ({
  key,
  value,
}));
export const answerInitialize = createAction(ANSWER_INITIALIZE);
export const answerSuccess = createAction(ANSWER_SUCCESS, (success) => success);
export const answerFailure = createAction(ANSWER_FAILURE, (error) => error);

const initialState = {
  answerText: '',
  answer: null,
  answerError: null,
};

const answer = handleActions(
  {
    [ANSWER_CHANGE]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [ANSWER_INITIALIZE]: (state, { payload: { key } }) => ({
      ...state,
      [key]: initialState[key],
    }),
    [ANSWER_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      answer: success,
      answerError: null,
    }),
    [ANSWER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      answerError: error,
    }),
  },
  initialState,
);

export default answer;

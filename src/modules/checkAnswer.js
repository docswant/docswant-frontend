import { handleActions } from 'redux-actions';
import { createAction } from 'redux-actions';

const CHECK_ANSWER_SUCCESS = 'checkAnswer/CHECK_ANSWER_SUCCESS';
const CHECK_ANSWER_FAILURE = 'checkAnswer/CHECK_ANSWER_FAILURE';

export const checkAnswerSuccess = createAction(
  CHECK_ANSWER_SUCCESS,
  (success) => success,
);
export const checkAnswerFailure = createAction(
  CHECK_ANSWER_FAILURE,
  (error) => error,
);

const initialState = {
  checkAnswer: null,
  checkAnswerError: null,
};

const checkAnswer = handleActions(
  {
    [CHECK_ANSWER_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      checkAnswer: success,
      checkAnswerError: null,
    }),
    [CHECK_ANSWER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      checkAnswerError: error,
    }),
  },
  initialState,
);
export default checkAnswer;

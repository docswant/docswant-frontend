import { handleActions } from 'redux-actions';
import { createAction } from 'redux-actions';

const STAGE_USER = 'user/STAGE_USER';
const STATE_USER_ERROR = 'user/STAGE_USER_ERROR';
const STAGE_WHO = 'user/STAGE_WHO';
const STAGE_WHO_ERROR = 'user/STAGE_WHO_ERROR';

export const stageUser = createAction(STAGE_USER, (user) => user);
export const stageUserError = createAction(STATE_USER_ERROR, (error) => error);
export const stageWho = createAction(STAGE_WHO, (who) => who);
export const stageWhoError = createAction(STAGE_WHO_ERROR, (error) => error);

const initialState = {
  user: null,
  userError: null,
  who: null,
  whoError: null,
};

const user = handleActions(
  {
    [STAGE_USER]: (state, { payload: user }) => ({
      ...state,
      user,
      userError: null,
    }),
    [STATE_USER_ERROR]: (state, { payload: error }) => ({
      ...state,
      userError: error,
    }),
    [STAGE_WHO]: (state, { payload: who }) => ({
      ...state,
      who,
      whoError: null,
    }),
    [STAGE_WHO_ERROR]: (state, { payload: error }) => ({
      ...state,
      whoError: error,
    }),
  },
  initialState,
);

export default user;

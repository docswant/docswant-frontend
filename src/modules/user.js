import { handleActions } from 'redux-actions';
import { createAction } from 'redux-actions';

const STAGE_USER = 'user/STAGE_USER';
const STATE_USER_ERROR = 'user/STAGE_USER_ERROR';

export const stageUser = createAction(STAGE_USER, (user) => user);
export const stageUserError = createAction(STATE_USER_ERROR, (error) => error);

const initialState = {
  user: null,
  userError: null,
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
  },
  initialState,
);

export default user;

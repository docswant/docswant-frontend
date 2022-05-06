import { createAction, handleActions } from 'redux-actions';

const DUPLICATE_CODE_SUCCESS = 'auth/DUPLICATE_CODE_SUCCESS';
const DUPLICATE_CODE_FAILURE = 'auth/DUPLICATE_CODE_FAILURE';
const DUPLICATE_USER_SUCCESS = 'auth/DUPLICATE_USER_SUCCESS';
const DUPLICATE_USER_FALIURE = 'auth/DUPLICATE_USER_FAILURE';

export const duplicateCodeSuccess = createAction(
  DUPLICATE_CODE_SUCCESS,
  (success) => success,
);
export const duplicateCodeFailure = createAction(
  DUPLICATE_CODE_FAILURE,
  (error) => error,
);

export const duplicateUserSuccess = createAction(
  DUPLICATE_USER_SUCCESS,
  (success) => success,
);
export const duplicateUserFailure = createAction(
  DUPLICATE_USER_FALIURE,
  (error) => error,
);

const initialState = {
  //의사코드 중복
  duplicateCode: null,
  duplicateCodeError: null,

  //아이디 중복
  duplicateUser: null,
  duplicateUserError: null,
};

const duplicate = handleActions(
  {
    [DUPLICATE_CODE_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      duplicateCode: success,
      duplicateCodeError: null,
    }),
    [DUPLICATE_CODE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      duplicateCodeError: error,
    }),
    [DUPLICATE_USER_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      duplicateUser: success,
      duplicateUserError: null,
    }),
    [DUPLICATE_USER_FALIURE]: (state, { payload: error }) => ({
      ...state,
      duplicateUserError: error,
    }),
  },
  initialState,
);

export default duplicate;

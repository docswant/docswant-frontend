import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
const REGISTER_FAILURE = 'auth/REGISTER_FAILURE';

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({ form, key, value }),
);

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);
export const registerSuccess = createAction(
  REGISTER_SUCCESS,
  (registerForm) => registerForm,
);
export const registerFailure = createAction(REGISTER_FAILURE, (error) => error);

const initialState = {
  //회원가입 input value
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
    code: '',
    name: '',
    major: '',
  },

  //회원가입 response
  registerForm: null,
  //회원가입 response error
  registerError: null,
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    [REGISTER_SUCCESS]: (state, { payload: registerForm }) => ({
      ...state,
      registerForm,
      registerError: null,
    }),
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      registerFailure: error,
    }),
  },
  initialState,
);

export default auth;

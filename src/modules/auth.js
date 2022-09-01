import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
const REGISTER_FAILURE = 'auth/REGISTER_FAILURE';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_CODE = 'auth/LOGIN_CODE';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';
const PATIENT_MODIFY_SUCCESS = 'auth/PATIENT_MODIFY_SUCCESS';
const PATIENT_MODIFY_FAILURE = 'auth/PATIENT_MODIFY_FAILURE';
const DOCTOR_MODIFY_SUCCESS = 'auth/PDOCTOR_MODIFY_SUCCESS';
const DOCTOR_MODIFY_FAILURE = 'auth/DOCTOR_MODIFY_FAILURE';
const DOCTOR_MODIFY_PATIENT_SUCCESS = 'auth/DOCTOR_MODIFY_PATIENT_SUCCESS';
const DOCTOR_MODIFY_PATIENT_FAILURE = 'auth/DOCTOR_MODIFY_PATIENT_FAILURE';

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({ form, key, value }),
);

export const initializeForm = createAction(INITIALIZE_FORM);
export const registerSuccess = createAction(
  REGISTER_SUCCESS,
  (registerForm) => registerForm,
);
export const registerFailure = createAction(REGISTER_FAILURE, (error) => error);

export const loginSucess = createAction(
  LOGIN_SUCCESS,
  (loginForm) => loginForm,
);
export const loginCode = createAction(LOGIN_CODE, (code) => code);
export const loginFailure = createAction(LOGIN_FAILURE, (error) => error);
export const patientModifySuccess = createAction(
  PATIENT_MODIFY_SUCCESS,
  (success) => success,
);
export const patientModifyFailure = createAction(
  PATIENT_MODIFY_FAILURE,
  (error) => error,
);

export const doctorModifySuccess = createAction(
  DOCTOR_MODIFY_SUCCESS,
  (success) => success,
);
export const doctorModifyFailure = createAction(
  DOCTOR_MODIFY_FAILURE,
  (error) => error,
);
export const doctorModifyPatientSuccess = createAction(
  DOCTOR_MODIFY_PATIENT_SUCCESS,
  (success) => success,
);
export const doctorModifyPatientFailure = createAction(
  DOCTOR_MODIFY_PATIENT_FAILURE,
  (error) => error,
);

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

  login: {
    username: '',
    password: '',
  },

  modify: {
    username: '',
    oldPassword: '',
    password: '',
    passwordConfirm: '',
    birthDate: '',
    // dayText: '',
    // date: '',
  },

  modifyDoctor: {
    username: '',
    oldPassword: '',
    password: '',
    passwordConfirm: '',
    major: '',
  },

  modifyPatient: {
    hospitalizationDate: '',
    surgeryDate: '',
    dischargeDate: '',
    diseaseName: '',
    hospitalRoom: '',
  },

  //회원가입 response
  registerForm: null,
  //회원가입 response error
  registerError: null,

  loginForm: null,
  code: null,
  loginError: null,

  modifySuccess: null,
  modifyError: null,

  doctorModify: null,
  doctorModifyError: null,

  modifyPatientClear: null,
  modifyPatientError: null,
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
      registerError: error,
    }),
    [LOGIN_SUCCESS]: (state, { payload: loginForm }) => ({
      ...state,
      loginForm,
      loginError: null,
    }),
    [LOGIN_CODE]: (state, { payload: code }) => ({
      ...state,
      code,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      loginError: error,
    }),
    [PATIENT_MODIFY_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      modifySuccess: success,
      modifyError: null,
    }),
    [PATIENT_MODIFY_FAILURE]: (state, { payload: error }) => ({
      ...state,
      modifyError: error,
    }),
    [DOCTOR_MODIFY_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      Doctormodify: success,
      DoctormodifyError: null,
    }),
    [DOCTOR_MODIFY_FAILURE]: (state, { payload: error }) => ({
      ...state,
      DoctormodifyError: error,
    }),
    [DOCTOR_MODIFY_PATIENT_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      modifyPatientClear: success,
      modifyPatientError: null,
    }),
    [DOCTOR_MODIFY_PATIENT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      modifyPatientError: error,
    }),
  },
  initialState,
);

export default auth;

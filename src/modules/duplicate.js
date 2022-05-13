import { createAction, handleActions } from 'redux-actions';

const DUPLICATE_CODE_SUCCESS = 'auth/DUPLICATE_CODE_SUCCESS';
const DUPLICATE_CODE_FAILURE = 'auth/DUPLICATE_CODE_FAILURE';
const DUPLICATE_USER_SUCCESS = 'auth/DUPLICATE_USER_SUCCESS';
const DUPLICATE_USER_FALIURE = 'auth/DUPLICATE_USER_FAILURE';
const DUPLICATE_PATIENT_SUCCESS = 'auth/DUPLICATE_PATIENT_SUCCESS';
const DUPLICATE_PATIENT_FAILURE = 'auth/DUPLICATE_PATIENT_FAILURE';
const DUPLICATE_DOCTOR_SUCCESS = 'auth/DUPLICATE_DOCTOR_SUCCESS';
const DUPLICATE_DOCTOR_FAILURE = 'auth/DUPLICATE_DOCTOR_FAILURE';

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
export const duplicatePatientSuccess = createAction(
  DUPLICATE_PATIENT_SUCCESS,
  (success) => success,
);
export const duplicatePatientFailure = createAction(
  DUPLICATE_PATIENT_FAILURE,
  (error) => error,
);
export const duplicateDoctorSuccess = createAction(
  DUPLICATE_DOCTOR_SUCCESS,
  (success) => success,
);
export const duplicateDoctorFailure = createAction(
  DUPLICATE_DOCTOR_FAILURE,
  (error) => error,
);

const initialState = {
  //의사코드 중복
  duplicateCode: null,
  duplicateCodeError: null,

  //아이디 중복
  duplicateUser: null,
  duplicateUserError: null,

  duplicatePatient: null,
  duplicatePatientError: null,

  duplicateDoctor: null,
  duplicateDoctorError: null,
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
    [DUPLICATE_PATIENT_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      duplicatePatient: success,
      duplicatePatientError: null,
    }),
    [DUPLICATE_PATIENT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      duplicatePatientError: error,
    }),
    [DUPLICATE_DOCTOR_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      duplicateDoctor: success,
      duplicateDoctorError: null,
    }),
    [DUPLICATE_DOCTOR_FAILURE]: (state, { payload: error }) => ({
      ...state,
      duplicateDoctorError: error,
    }),
  },
  initialState,
);

export default duplicate;

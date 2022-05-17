import { handleActions } from 'redux-actions';
import { createAction } from 'redux-actions';
import produce from 'immer';

const INITIALIZE_REGISTER = 'registerPatient/INITAILIZE_REGISTER';
const REGISTER_CHANGE = 'registerPatient/REGISTER_CHANGE';
const REGISTER_PATIENT_SUCCESS = 'registerPatient/REGISTER_PATIENT_SUCCESS';
const REGISTER_PATIENT_FAILURE = 'reigsterPatient/REGISTER_PATIENT_FAILURE';

export const initializeRegister = createAction(INITIALIZE_REGISTER);
export const registerChange = createAction(
  REGISTER_CHANGE,
  ({ form, key, value }) => ({ form, key, value }),
);
export const registerPatientSuccess = createAction(
  REGISTER_PATIENT_SUCCESS,
  (success) => success,
);
export const registerPatientFailure = createAction(
  REGISTER_PATIENT_FAILURE,
  (error) => error,
);

const initialState = {
  registerP: {
    code: '',
    name: '',
    birthDate: '',
    hospitalizationDate: '',
    diseaseName: '',
    hospitalRoom: '',
  },
  registerSuccess: null,
  registerFailure: null,
};

const registerPatient = handleActions(
  {
    [REGISTER_CHANGE]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [INITIALIZE_REGISTER]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    [REGISTER_PATIENT_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      registerSuccess: success,
      registerFailure: null,
    }),
    [REGISTER_PATIENT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      registerFailure: error,
    }),
  },
  initialState,
);

export default registerPatient;

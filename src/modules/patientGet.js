import { handleActions } from 'redux-actions';
import { createAction } from 'redux-actions';

const PATIENT_GET_SUCCESS = 'patientGet/PATIENT_GET_SUCCESS';
const PATIENT_GET_FAILURE = 'patientGet/PATIENT_GET_FAILURE';

export const patientGetSuccess = createAction(
  PATIENT_GET_SUCCESS,
  (success) => success,
);
export const patientGetFailure = createAction(
  PATIENT_GET_FAILURE,
  (error) => error,
);

const initialState = {
  patientGet: null,
  patientGetError: null,
};

const patientGet = handleActions(
  {
    [PATIENT_GET_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      patientGet: success,
      patientGetFailure: null,
    }),
    [PATIENT_GET_FAILURE]: (state, { payload: error }) => ({
      ...state,
      patientGetFailure: error,
    }),
  },
  initialState,
);

export default patientGet;

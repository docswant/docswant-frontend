import { handleActions } from 'redux-actions';
import { createAction } from 'redux-actions';

const PATIENT_LIST_SUCCESS = 'patientList/PATIENT_LIST_SUCCESS';
const PATIENT_LIST_FAILURE = 'patientList/PATIENT_LIST_FAILURE';

export const patientListSuccess = createAction(
  PATIENT_LIST_SUCCESS,
  (list) => list,
);
export const patientListFailure = createAction(
  PATIENT_LIST_FAILURE,
  (error) => error,
);

const initialState = {
  patientList: null,
  patientListError: null,
};

const patientList = handleActions(
  {
    [PATIENT_LIST_SUCCESS]: (state, { payload: list }) => ({
      ...state,
      patientList: list,
      patientListError: null,
    }),
    [PATIENT_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      patientListError: error,
    }),
  },
  initialState,
);
export default patientList;

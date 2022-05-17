import { handleActions } from 'redux-actions';
import { createAction } from 'redux-actions';

const PATIENT_LIST_SUCCESS = 'patientList/PATIENT_LIST_SUCCESS';
const PATIENT_LIST_FAILURE = 'patientList/PATIENT_LIST_FAILURE';
const PATIENT_DELETE_SUCCESS = 'patientList/PATIENT_DELETE_SUCCESS';
const PATIENT_DELETE_FAILURE = 'patientList/PATIENT_DELETE_FAILURE';

export const patientListSuccess = createAction(
  PATIENT_LIST_SUCCESS,
  (list) => list,
);
export const patientListFailure = createAction(
  PATIENT_LIST_FAILURE,
  (error) => error,
);
export const patientDeleteSuccess = createAction(
  PATIENT_DELETE_SUCCESS,
  (deletePatient) => deletePatient,
);
export const patientDeleteFailure = createAction(
  PATIENT_DELETE_FAILURE,
  (error) => error,
);

const initialState = {
  patientList: null,
  patientListError: null,
  patientDelete: null,
  patientDeleteError: null,
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
    [PATIENT_DELETE_SUCCESS]: (state, { payload: patientDelete }) => ({
      ...state,
      patientDelete,
      patientDeleteError: null,
    }),
    [PATIENT_DELETE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      patientDeleteError: error,
    }),
  },
  initialState,
);
export default patientList;

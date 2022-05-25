import { handleActions } from 'redux-actions';
import { createAction } from 'redux-actions';

const ROUNDING_SUCCESS = 'rounding/ROUNDING_SUCCESS';
const ROUNDING_FAILURE = 'rounding/ROUNDING_FAILURE';
const ROUNDING_CHANGE = 'rounding/ROUNDING_CHANGE';
const ROUNDING_ADD_SUCCESS = 'rounding/ROUNDING_ADD_SUCCESS';
const ROUNDING_ADD_FAILURE = 'rounding/ROUNDING_ADD_FAILURE';
const ROUNDING_DELETE_SUCCESS = 'rounding/ROUNDING_DELETE_SUCCESS';
const ROUNDING_DELETE_FAILURE = 'rounding/ROUNDING_DELETE_FAILURE';
const ROUNDING_UPDATE_SUCCESS = 'rounding/ROUNDING_UPDATE_SUCCESS';
const ROUNDING_UPDATE_FAILURE = 'rounding/ROUNDING_UPDATE_FAILURE';
const ROUNDING_STATE_UPDATE_SUCCESS = 'rounding/ROUNDING_STATE_UPDATE_SUCCESS';
const ROUNDING_STATE_UPDATE_FAILURE = 'rounding/ROUNDING_STATE_UPDATE_FAILURE';
export const roundingSuccess = createAction(
  ROUNDING_SUCCESS,
  (success) => success,
);
export const roundingFailure = createAction(ROUNDING_FAILURE, (error) => error);
export const roundingChange = createAction(
  ROUNDING_CHANGE,
  ({ key, value }) => ({ key, value }),
);
export const roundingAddSuccess = createAction(
  ROUNDING_ADD_SUCCESS,
  (success) => success,
);
export const roundingAddFailure = createAction(
  ROUNDING_ADD_FAILURE,
  (error) => error,
);
export const roundingDeleteSuccess = createAction(
  ROUNDING_DELETE_SUCCESS,
  (remove) => remove,
);
export const roundingDeleteFailure = createAction(
  ROUNDING_DELETE_FAILURE,
  (error) => error,
);
export const roundingUpdateSuccess = createAction(
  ROUNDING_UPDATE_SUCCESS,
  (update) => update,
);
export const roundingUpdateFailure = createAction(
  ROUNDING_UPDATE_FAILURE,
  (error) => error,
);
export const roundingStateUpdateSuccess = createAction(
  ROUNDING_STATE_UPDATE_SUCCESS,
  (roundingState) => roundingState,
);
export const roundingStateUpdateFailure = createAction(
  ROUNDING_STATE_UPDATE_FAILURE,
  (error) => error,
);

const initialState = {
  rounding: null,
  roundingError: null,
  patient: '',
  time: '',
  date: '',
  roundingAdd: null,
  roundingAddError: null,
  roundingDelete: null,
  roundingDeleteError: null,
  roundingUpdate: null,
  roundingUpdateError: null,
  roundingState: null,
  roundingStateError: null,
};

const rounding = handleActions(
  {
    [ROUNDING_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      rounding: success,
      roundingError: null,
    }),
    [ROUNDING_FAILURE]: (state, { payload: error }) => ({
      ...state,
      roundingError: error,
    }),
    [ROUNDING_CHANGE]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [ROUNDING_ADD_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      roundingAdd: success,
      roundingAddError: null,
    }),
    [ROUNDING_ADD_FAILURE]: (state, { payload: error }) => ({
      ...state,
      roundingAddError: error,
    }),
    [ROUNDING_DELETE_SUCCESS]: (state, { payload: remove }) => ({
      ...state,
      roundingDelete: remove,
      roundingDeleteError: null,
    }),
    [ROUNDING_DELETE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      roundingDeleteError: error,
    }),
    [ROUNDING_UPDATE_SUCCESS]: (state, { payload: update }) => ({
      ...state,
      roundingUpdate: update,
      roundingUpdateError: null,
    }),
    [ROUNDING_UPDATE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      roundingUpdateError: error,
    }),
    [ROUNDING_STATE_UPDATE_SUCCESS]: (state, { payload: roundingState }) => ({
      ...state,
      roundingState,
      roundingStateError: null,
    }),
    [ROUNDING_STATE_UPDATE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      roundingStateError: error,
    }),
  },
  initialState,
);

export default rounding;

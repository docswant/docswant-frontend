import { handleActions } from 'redux-actions';
import { createAction } from 'redux-actions';

const ROUNDING_SUCCESS = 'rounding/ROUNDING_SUCCESS';
const ROUNDING_FAILURE = 'rounding/ROUNDING_FAILURE';
const ROUNDING_CHANGE = 'rounding/ROUNDING_CHANGE';
const ROUNDING_ADD_SUCCESS = 'rounding/ROUNDING_ADD_SUCCESS';
const ROUNDING_ADD_FAILURE = 'rounding/ROUNDING_ADD_FAILURE';

export const roundingSuccess = createAction(
  ROUNDING_SUCCESS,
  success => success
);
export const roundingFailure = createAction(
  ROUNDING_FAILURE,
  error => error,
);
export const roundingChange = createAction(
  ROUNDING_CHANGE,
  ({key, value}) => ({key, value}),
);
export const roundingAddSuccess = createAction(
  ROUNDING_ADD_SUCCESS,
  success => success
);
export const roundingAddFailure = createAction(
  ROUNDING_ADD_FAILURE,
  error => error,
);

const initialState = {
  rounding : null,
  roundingError : null,
  patient: "",
  time: "",
  date: "",
  roundingAdd : null,
  roundingAddError : null,
};

const rounding = handleActions({
  [ROUNDING_SUCCESS]: (state, {payload:success}) => ({
    ...state,
    rounding : success,
    roundingError : null, 
  }),
  [ROUNDING_FAILURE]: (state, {payload:error}) => ({
    ...state,
    roundingError: error,
  }),
  [ROUNDING_CHANGE]: (state, {payload:{key, value}}) => ({
    ...state,
    [key] : value,
  }),
  [ROUNDING_ADD_SUCCESS]: (state, {payload:success}) => ({
    ...state,
    roundingAdd : success,
    roundingAddError : null,
  }),
  [ROUNDING_ADD_FAILURE]: (state, {payload:error}) => ({
    ...state,
    roundingAddError: error,
  }),
}, initialState,);

export default rounding;

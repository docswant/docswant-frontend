import { handleActions } from 'redux-actions';
import { createAction } from 'redux-actions';

const ROUNDING_CHANGE = 'rounding/ROUNDING_CHANGE';

export const roundingChange = createAction(ROUNDING_CHANGE, ({ key, value }) => ({
  key,
  value,
}));

const initialState = {
  roundingDate : "",
};

const rounding = handleActions({
  [ROUNDING_CHANGE] : (state, { payload: {key, value}}) => ({
    ...state,
    [key]: value,
  }),
}, initialState,);

export default rounding;
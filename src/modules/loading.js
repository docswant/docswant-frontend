import { handleActions } from 'redux-actions';
import { createAction } from 'redux-actions';

const LOADING_START = 'loading/LODING_START';
const LOADING_FINISH = 'loading/LODING_FINISH';

export const loadingStart = createAction(LOADING_START, (start) => start);
export const loadingFinish = createAction(LOADING_FINISH, (finish) => finish);

const initialState = {
  loading: null,
};

const loading = handleActions(
  {
    [LOADING_START]: (state, { payload: start }) => ({
      ...state,
      loading: start,
    }),
    [LOADING_FINISH]: (state, { payload: finish }) => ({
      ...state,
      loading: finish,
    }),
  },
  initialState,
);

export default loading;

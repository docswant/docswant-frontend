import { handleActions } from 'redux-actions';
import { createAction } from 'redux-actions';

const INQUIRY_SUCCESS = 'inquiry/INQUIRY_SUCCESS';
const INQUIRY_FAILURE = 'inquiry/INQUIRY_FAILURE';
const INQUIRY_ADD_SUCCESS = 'inquiry/INQUIRY_ADD_SUCCESS';
const INQUIRY_ADD_FAILURE = 'inquiry/INQUIRY_ADD_FAILURE';
const INQUIRY_CHANGE = 'inquiry/INQUIRY_CHANGE';
const INQUIRY_DELETE_SUCCESS = 'inquiry/INQUIRY_DELETE_SUCCESS';
const INQUIRY_DELETE_FAILURE = 'inquiry/INQUIRY_DELETE_FAILURE';
const INQUIRY_UPDATE_SUCCESS = 'inquiry/INQUIRY_UPDATE_SUCCESS';
const INQUIRY_UPDATE_FAILURE = 'inquiry/INQUIRY_UPDATE_FAULURE';
const INQUIRY_CONFIRM_SUCCESS = 'inquiry/INQUIRY_CONFIRM_SUCCESS';
const INQUIRY_CONFIRM_FAILURE = 'inquiry/INQUIRY_CONFIRM_FAULURE';

export const inquirySuccess = createAction(
  INQUIRY_SUCCESS,
  (success) => success,
);
export const inquiryFailure = createAction(INQUIRY_FAILURE, (error) => error);
export const inquiryAddSuccess = createAction(
  INQUIRY_ADD_SUCCESS,
  (success) => success,
);
export const inquiryAddFailure = createAction(
  INQUIRY_ADD_FAILURE,
  (error) => error,
);
export const inquiryChange = createAction(INQUIRY_CHANGE, ({ key, value }) => ({
  key,
  value,
}));
export const inquiryDeleteSuccess = createAction(
  INQUIRY_DELETE_SUCCESS,
  (success) => success,
);
export const inquiryDeleteFailure = createAction(
  INQUIRY_DELETE_FAILURE,
  (error) => error,
);
export const inquiryUpdateSuccess = createAction(
  INQUIRY_UPDATE_SUCCESS,
  (success) => success,
);
export const inquiryUpdateFailure = createAction(
  INQUIRY_UPDATE_FAILURE,
  (error) => error,
);
export const inquiryConfirmSuccess = createAction(
  INQUIRY_CONFIRM_SUCCESS,
  (success) => success,
);
export const inquiryConfirmFailure = createAction(
  INQUIRY_CONFIRM_FAILURE,
  (error) => error,
);

const initialState = {
  inquiry: null,
  inquiryError: null,
  inquiryAdd: null,
  inquiryAddError: null,
  title: '',
  content: '',
  inquiryDelete: null,
  inquiryDeleteError: null,
  inquiryUpdate: null,
  inquiryUpdateError: null,
  inquiryConfirm: null,
  inquiryConfirmError: null,
};

const inquiry = handleActions(
  {
    [INQUIRY_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      inquiry: success,
      inquiryError: null,
    }),
    [INQUIRY_FAILURE]: (state, { payload: error }) => ({
      ...state,
      inquiryError: error,
    }),
    [INQUIRY_ADD_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      inquiryAdd: success,
      inquiryAddError: null,
    }),
    [INQUIRY_ADD_FAILURE]: (state, { payload: error }) => ({
      ...state,
      inquiryAddError: error,
    }),
    [INQUIRY_CHANGE]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [INQUIRY_DELETE_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      inquiryDelete: success,
      inquiryDeleteError: null,
    }),
    [INQUIRY_DELETE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      inquiryDeleteError: error,
    }),
    [INQUIRY_UPDATE_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      inquiryUpdate: success,
      inquiryUpdateError: null,
    }),
    [INQUIRY_UPDATE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      inquiryUpdateError: error,
    }),
    [INQUIRY_CONFIRM_SUCCESS]: (state, { payload: success }) => ({
      ...state,
      inquiryConfirm: success,
      inquiryConfirmError: null,
    }),
    [INQUIRY_CONFIRM_FAILURE]: (state, { payload: error }) => ({
      ...state,
      inquiryConfirmError: error,
    }),
  },
  initialState,
);

export default inquiry;

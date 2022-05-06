import { combineReducers } from 'redux';
import auth from './auth';
import duplicate from './duplicate';
const rootReducer = combineReducers({
  auth,
  duplicate,
});

export default rootReducer;

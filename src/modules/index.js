import { combineReducers } from 'redux';
import auth from './auth';
import duplicate from './duplicate';
import user from './user';
const rootReducer = combineReducers({
  auth,
  duplicate,
  user,
});

export default rootReducer;

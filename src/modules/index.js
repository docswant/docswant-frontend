import { combineReducers } from 'redux';
import auth from './auth';
import duplicate from './duplicate';
import user from './user';
import registerPatient from './registerPatient';
import patientList from './patientList';
import patientGet from './patientGet';
import questionList from './questionList';
import loading from './loading';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  auth,
  duplicate,
  user,
  registerPatient,
  patientList,
  patientGet,
  questionList,
  loading,
});

export default persistReducer(persistConfig, rootReducer);

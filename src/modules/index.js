import { combineReducers } from 'redux';
import auth from './auth';
import duplicate from './duplicate';
import user from './user';
import registerPatient from './registerPatient';
import patientList from './patientList';
import patientGet from './patientGet';
import questionList from './questionList';
import loading from './loading';
import answer from './answer';
import checkAnswer from './checkAnswer';
import rounding from './rounding';
import inquiry from './inquiry';
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
  answer,
  checkAnswer,
  rounding,
  inquiry,
});

export default persistReducer(persistConfig, rootReducer);

import { combineReducers } from 'redux';
import auth from './auth';
import duplicate from './duplicate';
import user from './user';
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
});

export default persistReducer(persistConfig, rootReducer);

import { combineReducers } from 'redux';
import jobsReducer from './reducers';

const rootReducer = combineReducers({
  jobs: jobsReducer,
});

export default rootReducer;
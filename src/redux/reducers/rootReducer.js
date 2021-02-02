import { combineReducers } from 'redux';
import firstRailReducer from './firstRailReducer';
import secondRailReducer from './secondRailReducer';
import thirdRailReducer from './thirdRailReducer';

const rootReducer = combineReducers({
  firstRailReducer, secondRailReducer, 
  thirdRailReducer});

export default rootReducer;
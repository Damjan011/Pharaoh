import { combineReducers } from 'redux';
import firstRailReducer from './firstRailReducer';
import secondRailReducer from './secondRailReducer';
import thirdRailReducer from './thirdRailReducer';
import fourthRailReducer from './fourthRailReducer';
import fifthRailReducer from './fifthRailReducer';

const rootReducer = combineReducers({
  firstRailReducer, secondRailReducer, 
  thirdRailReducer, fourthRailReducer, fifthRailReducer
});

export default rootReducer;
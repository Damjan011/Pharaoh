import { combineReducers } from 'redux';
import firstRailReducer from './firstRailReducer';
import secondRailReducer from './secondRailReducer';
import thirdRailReducer from './thirdRailReducer';

import bottomReducer from './bottomReducer';

// const rootReducer = combineReducers({
//   firstRailReducer, secondRailReducer, 
//   thirdRailReducer});

const rootReducer = combineReducers({secondRailReducer});

// const rootReducer = bottomReducer;

export default rootReducer;
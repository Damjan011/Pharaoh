import mainReducer from './mainReducer';
import bottomReducer from './bottomReducer';
import topReducer from './topReducer';
import {combineReducers} from 'redux';

const secondRailReducer = combineReducers({
  mainReducer, bottomReducer, topReducer
})

export default secondRailReducer;
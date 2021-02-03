import mainReducer from './mainReducer';
import bottomReducer from './bottomReducer';
import topReducer from './topReducer';
import {combineReducers} from 'redux';

const secondRailReducer = combineReducers({
  mainSymbol: mainReducer, bottomSymbol: bottomReducer, topSymbol: topReducer
})

export default secondRailReducer;
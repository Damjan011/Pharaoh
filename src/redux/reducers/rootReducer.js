import {combineReducers} from 'redux';
import {railsReducer} from './railsReducer';

const rootReducer = combineReducers({
  rails: railsReducer,
})

export default rootReducer;
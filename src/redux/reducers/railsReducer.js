import {combineReducers} from 'redux';
import {railReducer} from './railReducer';

export const railsReducer = combineReducers({
    firstRail: railReducer,
    secondRail: railReducer,
    thirdRail: railReducer,
})
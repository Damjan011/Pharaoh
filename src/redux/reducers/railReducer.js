import {combineReducers} from 'redux';
import {symbolReducer} from './symbolReducer';

export const railReducer = combineReducers({
    topSymbol: symbolReducer,
    middleSymbol: symbolReducer,
    bottomSymbol: symbolReducer
})
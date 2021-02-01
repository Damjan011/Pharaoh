import { createStore } from 'redux';
import currentPositionReducer from './reducers/currentPositionReducer';

const store = createStore(currentPositionReducer);

export default store;
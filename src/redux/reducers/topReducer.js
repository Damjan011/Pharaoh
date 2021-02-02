import {
  TYPE_ANUBIS, TYPE_BASTET, TYPE_HORUS, TYPE_THOTH, TYPE_JACKAL,
  TYPE_SNAKE, TYPE_SCARAB, TYPE_CAT, TYPE_SARCOPHAGUS, TYPE_PYRAMID,
  TYPE_ANKH, TYPE_OBELISK
} from '../actionTypes.js';

const initialState = {
    name: '',
    value: ''
}

const topReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE_ANUBIS:
      return {
        ...state,
        name: 'anubis',
        value: 'high'
      };
    case TYPE_BASTET:
      return {
        ...state,
        name: 'bastet',
        value: 'high'
      };
    case TYPE_HORUS:
      return {
        ...state,
        name: 'horus',
        value: 'high'
      };
    case TYPE_THOTH:
      return {
        ...state,
        name: 'thoth',
        value: 'high'
      };
    case TYPE_SNAKE:
      return {
        ...state,
        name: 'snake',
        value: 'med'
      };
    case TYPE_JACKAL:
      return {
        ...state,
        name: 'jackal',
        value: 'med'
      };
    case TYPE_CAT:
      return {
        ...state,
        name: 'cat',
        value: 'med'
      };
    case TYPE_SCARAB:
      return {
        ...state,
        name: 'scarab',
        value: 'med'
      };
    case TYPE_ANKH:
      return {
        ...state,
        name: 'ankh',
        value: 'low'
      };
    case TYPE_PYRAMID:
      return {
        ...state,
        name: 'pyramid',
        value: 'low'
      };
    case TYPE_SARCOPHAGUS:
      return {
        ...state,
        name: 'sarcophagus',
        value: 'low'
      };
    case TYPE_OBELISK:
      return {
        ...state,
        name: 'obelisk',
        value: 'low'
      };
    default:
      return state;
  }
}

export default topReducer;
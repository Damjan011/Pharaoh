import {
  TYPE_ANUBIS, TYPE_BASTET, TYPE_HORUS, TYPE_THOTH, TYPE_JACKAL,
  TYPE_SNAKE, TYPE_SCARAB, TYPE_CAT, TYPE_SARCOPHAGUS, TYPE_PYRAMID,
  TYPE_ANKH, TYPE_OBELISK, TYPE_TOP_SYMBOL, TYPE_MAIN_SYMBOL
} from '../actionTypes.js';

const initialState = {
  topSymbol: {
    name: '',
    value: ''
  },
  mainSymbol: {
    name: '',
    value: ''
  },
  bottomSymbol: {
    name: '',
    value: ''
  }
}

const firstRailReducer = (state = initialState, action) => {
  switch(action.type) {
        case TYPE_ANUBIS:
          return {
            ...state,
            topSymbol: {
              name: 'anubis',
              value: 'high'
            }
          };
        case TYPE_BASTET:
          return {
            ...state,
            topSymbol: {
            name: 'bastet',
            value: 'high'
            }
          };
        case TYPE_HORUS:
          return {
            ...state,
            topSymbol: {
            name: 'horus',
            value: 'high'
            }
          };
        case TYPE_THOTH:
          return {
            ...state,
            topSymbol: {
            name: 'thoth',
            value: 'high'
            }
          };
        case TYPE_SNAKE:
          return {
            ...state,
            topSymbol: {
            name: 'snake',
            value: 'med'
            }
          };
        case TYPE_JACKAL:
          return {
            ...state,
            topSymbol: {
            name: 'jackal',
            value: 'med'
            }
          };
        case TYPE_CAT:
          return {
            ...state,
            topSymbol: {
            name: 'cat',
            value: 'med'
            }
          };
        case TYPE_SCARAB:
          return {
            ...state,
            topSymbol: {
            name: 'scarab',
            value: 'med'
            }
          };
        case TYPE_ANKH:
          return {
            ...state,
            topSymbol: {
            name: 'ankh',
            value: 'low'
            }
          };
        case TYPE_PYRAMID:
          return {
            ...state,
            topSymbol: {
            name: 'pyramid',
            value: 'low'
            }
          };
        case TYPE_SARCOPHAGUS:
          return {
            ...state,
            topSymbol: {
            name: 'sarcophagus',
            value: 'low'
            }
          };
        case TYPE_OBELISK:
          return {
            ...state,
            topSymbol: {
            name: 'obelisk',
            value: 'low'
            }
          };
        default:
          return state;
      }
    

}

// const firstRailReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case TYPE_ANUBIS:
//       return {
//         ...state,
//         name: 'anubis',
//         value: 'high'
//       };
//     case TYPE_BASTET:
//       return {
//         ...state,
//         name: 'bastet',
//         value: 'high'
//       };
//     case TYPE_HORUS:
//       return {
//         ...state,
//         name: 'horus',
//         value: 'high'
//       };
//     case TYPE_THOTH:
//       return {
//         ...state,
//         name: 'thoth',
//         value: 'high'
//       };
//     case TYPE_SNAKE:
//       return {
//         ...state,
//         name: 'snake',
//         value: 'med'
//       };
//     case TYPE_JACKAL:
//       return {
//         ...state,
//         name: 'jackal',
//         value: 'med'
//       };
//     case TYPE_CAT:
//       return {
//         ...state,
//         name: 'cat',
//         value: 'med'
//       };
//     case TYPE_SCARAB:
//       return {
//         ...state,
//         name: 'scarab',
//         value: 'med'
//       };
//     case TYPE_ANKH:
//       return {
//         ...state,
//         name: 'ankh',
//         value: 'low'
//       };
//     case TYPE_PYRAMID:
//       return {
//         ...state,
//         name: 'pyramid',
//         value: 'low'
//       };
//     case TYPE_SARCOPHAGUS:
//       return {
//         ...state,
//         name: 'sarcophagus',
//         value: 'low'
//       };
//     case TYPE_OBELISK:
//       return {
//         ...state,
//         name: 'obelisk',
//         value: 'low'
//       };
//     default:
//       return state;
//   }
// }

export default firstRailReducer;
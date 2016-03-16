/*
 * The reducer takes care of our data
 * Using actions, we can change our application state
 * To add a new action, add it to the switch statement in the homeReducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return assign({}, state, {
 *       stateVariable: action.var
 *   });
 *
 * To add a new reducer, add a file like this to the reducers folder, and
 * add it in the rootReducer.js.
 */

import Services from '../services/services';

const {
  CALCULATE: 'home/calculate',
  CALCULATE_ERROR: 'home/calculate/error',
  CALCULATE_SUCCESS: 'home/calculate/success',
  SET_VALUE_X: 'home/set_value/x',
  SET_VALUE_Y: 'home/set_value/y',
  SET_VALUE_ACTION: 'home/set_value/action',
  HISTORY_ADD: 'home/history/add',
  HISTORY_BACK: 'home/history/back',
  HISTORY_CLEAR: 'home/history/clear',
};

const initialState = {
  isFetching: false,
  error: null,
  data: {}
  history: [],
  factor: {
    x: null,
    y: null,
    action: null
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_VALUE_X:
      return {
        ...state,
        factors: {
          ...state.factors,
          x: action.payload
        }
      };
    case SET_VALUE_Y:
      return {
        ...state,
        factors: {
          ...state.factors,
          y: action.payload
        }
      };
    case SET_ACTION:
      return {
        ...state,
        factors: {
          ...state.factors,
          action: action.payload
        }
      };
    case HISTORY_ADD:
      return {
        ...state,
        history: [...state.history, action.payload]
      };
    case HISTORY_CLEAR:
      return {
        ...state,
        history: []
      };
    case HISTORY_BACK:
      return {
        ...state,
        history: [...state.history.splice(state.history.length-1)]
      }
    case CALCULATE:
      return {
        ...state,
        isFetching: true,
        error: null,
        data: null
      }
    case CALCULATE_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    case CALCULATE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      }
    default:
      return state;
  }
}

export function setX(value){
  return {
    type:SET_VALUE_X,
    payload: value
  };
}

export function setY(value){
  return {
    type:SET_VALUE_Y,
    payload: value
  };
}

export function setAction(value){
  return {
    type:SET_VALUE_ACTION,
    payload: value
  };
}

export function historyAdd(factors){
  return {
    type: HISTORY_ADD,
    payload: factors
  }
}
export function historyClear(){
  return {
    type: HISTORY_CLEAR
  }
}
export function historyBack(){
  return {
    type: HISTORY_BACK
  }
}

function calculateRequest(){
  return {
    type: CALCULATE_REQUEST
  };
}
function calculateError(err){
  return {
    type: CALCULATE_ERROR,
    payload: err
  };
}
function calculateSuccess(data){
  return {
    type: CALCULATE_SUCCESS,
    payload: data
  };
}

export function asyncCalculate(action, x, y) {
  return (dispatch) => {
    dispatch(calculateRequest());
    new Services()
      .calculate(action, x, y)
      .then((data)=>dispatch(calculateSuccess(data)))
      .catch((err)=>dispatch(calculateError(err)));
  };
}

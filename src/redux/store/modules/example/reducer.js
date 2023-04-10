import * as types from '../types';

const initialState = {
  buttonClicked: false,
};

export default (state, action) => {
  switch (action.type) {
    case types.BUTTON_CLICKED_REQUEST: {
      console.log('I am making request');
      return { ...state };
    }
    case types.BUTTON_CLICKED_SUCCESS: {
      return { ...state, buttonClicked: !state.buttonClicked };
    }
    case types.BUTTON_CLICKED_FAIL: {
      console.log('ERROR');
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

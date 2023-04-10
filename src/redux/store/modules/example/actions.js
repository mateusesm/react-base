import * as types from '../types';

export const clickButtonRequest = () => {
  return { type: types.BUTTON_CLICKED_REQUEST };
};

export const clickButtonSuccess = () => {
  return { type: types.BUTTON_CLICKED_SUCCESS };
};

export const clickButtonFail = () => {
  return { type: types.BUTTON_CLICKED_FAIL };
};

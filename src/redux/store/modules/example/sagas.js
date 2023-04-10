import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import * as actions from './actions';
import * as types from '../types';

const request = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });

function* exampleRequest() {
  try {
    yield call(request);
    yield put(actions.clickButtonSuccess());
  } catch (error) {
    toast.error(error);
    yield put(actions.clickButtonFail());
  }
}

export default all([takeLatest(types.BUTTON_CLICKED_REQUEST, exampleRequest)]);

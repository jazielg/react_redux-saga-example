import { takeEvery } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";

import { importUsers } from "./user";

export function* rootSaga() {
  yield takeEvery(actionTypes.IMPORT_USER, importUsers);
}

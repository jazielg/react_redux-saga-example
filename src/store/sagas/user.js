import {} from "redux-saga";
import axios from "axios";
import { put } from "redux-saga/effects";

export function* importUsers() {
  try {
    const response = yield axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    yield put({
      type: "SET_USER",
      users: response.data,
    });
  } catch (err) {
    console.log("ERROR_IMPORT_USERS", err);
  }
}

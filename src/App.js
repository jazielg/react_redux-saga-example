import React from "react";

// REDUX
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";

// SAGA
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./store/sagas";

// import store from "./store";
import courseReducer from "./store/reducers/course";
import userReducer from "./store/reducers/user";

import CourseList from "./components/CourseList";
import CourseListClass from "./components/CourseListClass";
import UserList from "./components/UserList";

const sagaMiddleware = createSagaMiddleware();

// Single Reducer
// const store = createStore(courseReducer);

// Single Reducer and saga
// const store = createStore(courseReducer, applyMiddleware(sagaMiddleware));

// Reducer Combine
const rootReducer = combineReducers({
  courses: courseReducer,
  users: userReducer,
});
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Run Saga
sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <CourseList />
      <CourseListClass />
      <UserList />
    </Provider>
  );
}

export default App;

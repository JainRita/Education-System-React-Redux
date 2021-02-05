// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";

// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers/reducer.js";

const store = createStore(reducer, applyMiddleware(thunk));
export default store;

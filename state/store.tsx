import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

export const store = createStore(reducers, {}, applyMiddleware(thunk));
// export const store = configureStore(reducers);

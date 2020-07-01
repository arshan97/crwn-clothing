import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import userReducer from "./root-reducer";

const middlewares = [logger];

const store = createStore(userReducer, applyMiddleware(...middlewares));

export default store;

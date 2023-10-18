import reducer from "./reducer";
import thunk from "redux-thunk";
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";

const store = configureStore( {reducer:reducer}, applyMiddleware(thunk));

export default store;
import { combineReducers } from "redux";

import userReducer from "./userReducer";
import reposReducer from "./reposReducer";

export default combineReducers({
    user: userReducer,
    repos: reposReducer
})
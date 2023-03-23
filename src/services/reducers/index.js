import counterReducer from "./counter";
import users from "./users";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter:counterReducer,
    users
});

export default allReducers;
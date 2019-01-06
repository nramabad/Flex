// src/reducers/root_reducer.js

import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from "./errors_reducer";
import jobs from "./jobs_reducer";

const RootReducer = combineReducers({
    errors,
    session,
    jobs
});

export default RootReducer;
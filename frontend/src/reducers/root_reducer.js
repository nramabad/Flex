// src/reducers/root_reducer.js

import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from "./errors_reducer";
import jobs from "./jobs_reducer";
import resumes from "./resumes_reducer";

const RootReducer = combineReducers({
    errors,
    session,
    jobs,
    resumes
});

export default RootReducer;
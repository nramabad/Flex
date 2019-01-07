// src/reducers/resumes_reducer.js

import {
  RECEIVE_RESUMES,
  RECEIVE_USER_RESUMES,
  RECEIVE_NEW_RESUME
} from "../actions/resume_actions";

const ResumesReducer = (state = {}, action) => {

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESUMES:
    case RECEIVE_USER_RESUMES:
        return action.resumes.data;
    case RECEIVE_NEW_RESUME: 
        let newState = Object.assign({}, state, action.resumes.data);
        return newState;
    default:
        return state;
  }
};

export default ResumesReducer;

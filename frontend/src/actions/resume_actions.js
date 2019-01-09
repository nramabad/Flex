// src/actions/resume_actions.js

import { getResumes, getUserResumes, writeResume } from "../util/resume_api_util";

export const RECEIVE_RESUMES = "RECEIVE_RESUMES";
export const RECEIVE_USER_RESUMES = "RECEIVE_USER_RESUMES";
export const RECEIVE_NEW_RESUME = "RECEIVE_NEW_RESUME";
export const RECEIVE_RESUME_ERRORS = "RECEIVE_RESUME_ERRORS";

export const receiveResumes = resumes => ({
  type: RECEIVE_RESUMES,
  resumes
});

export const receiveUserResumes = resumes => ({
  type: RECEIVE_USER_RESUMES,
  resumes
});


export const receiveNewResume = resume => {
    return {
        type: RECEIVE_NEW_RESUME,
        resume
    }
}

export const receiveErrors = errors => ({
    type: RECEIVE_RESUME_ERRORS,
    errors
});

export const fetchResumes = () => dispatch =>
  getResumes()
    .then(resumes => dispatch(receiveResumes(resumes)))
    .catch(err => console.log(err));

export const fetchUserResumes = id => dispatch =>
  getUserResumes(id)
    .then(resumes => dispatch(receiveUserResumes(resumes)))
    .catch(err => console.log(err));

export const composeResume = data => dispatch => {
    return (
        writeResume(data)
            .then((resume) => dispatch(receiveNewResume(resume)))
            .catch(err => {dispatch(receiveErrors(err.response.data))})
    )
};

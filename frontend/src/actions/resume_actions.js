// src/actions/resume_actions.js

import { getResumes, getUserResumes, writeResume } from "../util/resume_api_util";

export const RECEIVE_RESUMES = "RECEIVE_RESUMES";
export const RECEIVE_USER_RESUMES = "RECEIVE_USER_RESUMES";

export const receiveResumes = resumes => ({
  type: RECEIVE_RESUMES,
  resumes
});

export const receiveUserResumes = resumes => ({
  type: RECEIVE_USER_RESUMES,
  resumes
});

export const fetchResumes = () => dispatch =>
  getResumes()
    .then(resumes => dispatch(receiveResumes(resumes)))
    .catch(err => console.log(err));

export const fetchUserResumes = id => dispatch =>
  getUserResumes(id)
    .then(resumes => dispatch(receiveUserResumes(resumes)))
    .catch(err => console.log(err));
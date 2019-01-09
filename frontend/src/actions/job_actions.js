// src/actions/session_actions.js

import * as APIUtil from '../util/job_api_util';

export const RECEIVE_JOBS = "RECEIVE_JOBS";

export const receiveJobs = jobs => ({
  type: RECEIVE_JOBS,
  jobs
});

export const fetchJobs = () => dispatch => (
  APIUtil.getJobs()
    .then(jobs => dispatch(receiveJobs(jobs)))
);



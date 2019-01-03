import * as JobUtil from "../util/jobs_api_util";

export const RECEIVE_JOBS = "RECEIVE_JOBS";
export const RECEIVE_JOB = "RECEIVE_JOB";

export const receiveJobs = jobs => {
    return {
        type: RECEIVE_JOBS,
        jobs
    };
};

export const receiveJob = job => {
    return {
        type: RECEIVE_JOB,
        job
    };
};

export const fetchJobs = () => dispatch => {
    return JobUtil.getJobs()
      .then(jobs => dispatch(receiveJobs(jobs)))
      .catch(err => console.log(err));
};

export const fetchJob = (id) => dispatch => {
    return JobUtil.getJob(id)
      .then(job => dispatch(receiveJob(job)))
      .catch(err => console.log(err));
};
import { RECEIVE_JOBS, RECEIVE_JOB } from "../actions/job_actions";

const jobsReducer = (state = { jobs: {}, job: {} }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_JOBS:
            newState.jobs = action.jobs.data;
            return newState;
        case RECEIVE_JOB:
            newState.job = action.job.data;
            return newState;
        default:
            return state;
    }
};

export default jobsReducer;
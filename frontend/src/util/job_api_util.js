import axios from 'axios';

export const getJobs = () => {
  return axios.get('/api/jobs/');
};

window.axios = axios;

// axios.get('/api/jobs/').then(jobs => dispatch(receiveJobs(jobs)))
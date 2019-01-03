import axios from "axios";

export const getJobs = () => {
    return axios.get("https://jobs.github.com/positions.json?location=sf");
};

export const getJob = (id) => {
    return axios.get(`https://jobs.github.com/positions/${id}.json`);
};



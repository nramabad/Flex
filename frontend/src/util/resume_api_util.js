import axios from "axios";

export const getResumes = () => {
  return axios.get("/api/resumes");
};

export const getUserResumes = id => {
  return axios.get(`/api/resumes/user/${id}`);
};

export const writeResume = data => {
  return axios.post("/api/resumes/", data);
};

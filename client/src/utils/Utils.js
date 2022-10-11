import axios from "axios";

// function to change tabs titles dinamically
export const TabTitle = (newTitle) => {
  return (document.title = newTitle);
};

//API URL
const API_URL = "http://localhost:5000";
const API_URL_EMPLOYEES = `${API_URL}/employees`;




//API functions calls

//Get
export const fetchEmployees = () => {
  return axios.get(API_URL_EMPLOYEES);
};

//Post
export const PostEmployees = () => {
  return axios.post(API_URL_EMPLOYEES);
};

//Delete
export const deleteEmployee = (id) => {
  return axios.delete(`${API_URL_EMPLOYEES}/Employee/${id}`);
};

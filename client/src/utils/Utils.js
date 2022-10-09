import axios from "axios";

// function to change tabs titles dinamically
export const TabTitle = (newTitle) => {
  return (document.title = newTitle);
};

//API URL
const API_URL = "http://localhost:8080";
const API_URL_EMPLOYEES = `${API_URL}/employees`;



//API functions calls
export const fetchEmployees = () => {
  return axios.get(API_URL_EMPLOYEES);
};
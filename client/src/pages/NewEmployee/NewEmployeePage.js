import React from 'react';
import {TabTitle} from "../../utils/Utils";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import errorImg from "../../assets/icons/error-24px.svg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../pages/NewEmployee/NewEmployeePage.scss";

function NewEmployeePage() {
   //function to change tab title dynamically
   TabTitle("Add New");
 //useNavigate to set up backward navigation
  const navigate = useNavigate();
    // Set State to manipulate the form values
    const [name, setName] = useState("");
    const [code, setCode] = useState("");
    const [city, setCity] = useState("");
    const [profession, setProfession] = useState("");
    const [color, setColor] = useState("");
    const [branch, setBranch] = useState("");
    const [assigned, setAssigned] = useState("");
      //create state generate success message
  const [success, setSuccess] = useState(false);
  const [isError, setIsError] = useState("");

  //handle change to control the form elements
  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeCode = (event) => {

    setCode(event.target.value);
  };

  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  const handleChangeProfession = (event) => {
    setProfession(event.target.value);
  };

  const handleChangeColor = (event) => {
    setColor(event.target.value);
  };

  const handleChangeBranch = (event) => {
    setBranch(event.target.value);
  };

  const handleChangeAssigned = (event) => {
    setAssigned(event.target.value);
  };
 

    //created new employee object to send back to the backend
    const NewEmployee = {
      name: name,
      code: code,
      profession: profession,
      color: color,
      city: city,
      branch: branch,
      assigned : assigned
    };

  //reset form inputs function
  const resetForm = () => {
    setName("");
    setCode("");
    setProfession("");
    setColor("");
    setCity("");
    setBranch("");
    setAssigned("");
  };

     //function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
    .post("http://localhost:8080/employees", NewEmployee)
    .then((response) => {
      setSuccess(true);
    })
    .catch((error) => {
      console.log(error);
      setIsError(true);
    });

    resetForm();
};

  return (
    <div className="employee-form">
    <header className="employee-form__header">
      <img
        className="employee-form__back"
        src={backArrow}
        alt="arrow to navigate back"
        onClick={() => navigate(-1)}
      />
      <h1 className="employee-form__title"> Add New Employee</h1>
    </header>
    <form  onSubmit={handleSubmit} className="employee-form__form">
      <div className="employee-form__section employee-form__section--left">
        <label className="employee-form__label">
          Employee Name
          <input
          className="employee-form__input"
            type="text"
            placeholder="Employee Name"
            value={name}
            onChange={handleChangeName}
          />
        </label>
        <label className="employee-form__label">
        Employee Code
          <input
            className="employee-form__input"
            type="text"
            placeholder="Employee Code"
            value={code}
            onChange={handleChangeCode}
          />
        </label>
        <label className="employee-form__label">
          Employee Profession
          <input
          className="employee-form__input"
            type="text"
            placeholder="City"
            value={profession}
            onChange={handleChangeProfession}
          />
        </label>
        <label className="employee-form__label">
        Employee Color
          <input
          className="employee-form__input"
            type="text"
            placeholder="Country"
            value={color}
            onChange={handleChangeColor}
          />
        </label>
      </div>
      <div className="employee-form__section">
        <label className="employee-form__label">
          Employee City
          <input
          className="employee-form__input"
            type="text"
            placeholder="Contact Name"
            value={city}
            onChange={handleChangeCity}
          />
        </label>
        <label className="employee-form__label">
        Employee Branch
          <input
          className="employee-form__input"
            type="text"
            placeholder="Employee Branch"
            value={branch}
            onChange={handleChangeBranch}
          />
        </label>
        <label className="employee-form__label">
        Employee Status
          <input
          className="employee-form__input"
            type="text"
            placeholder="Phone Number"
            value={assigned}
            onChange={handleChangeAssigned}
          />
        </label>
      </div>
      <footer className="employee-form__footer">
        <Link
          to="/"
          className="employee-form__button button button--cancel"
        >
          Cancel
        </Link>
        <button
          type="submit"
          className="employee-form__button button button--primary"
        >
          + Add Employee
        </button>
      </footer>
    </form>
  </div>
  )
}

export default NewEmployeePage;
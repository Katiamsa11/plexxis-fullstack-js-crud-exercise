import React from "react";
import { TabTitle } from "../../utils/Utils";
import "../EmployeeForm/EmployeeForm.scss";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import error from "../../assets/icons/error-24px.svg";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function EditEmployeePage() {
  //function to change tab title dynamically
  TabTitle("Edit Employee");
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

  //States to generate error messages
  const [nameError, setNameError] = useState(false);
  const [codeError, setCodeError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [professionError, setProfessionError] = useState(false);
  const [colorError, setColorError] = useState(false);
  const [branchError, setBranchError] = useState(false);
  const [assignedError, setAssignedError] = useState(false);

  //create state generate success message
  const [success, setSuccess] = useState(false);
  const [isError, setIsError] = useState("");

  //useParams to get the id of the selected employee
  const { id } = useParams();

  //handle change to control the form elements
  const handleChangeName = (event) => {
    if (nameError) {
      setNameError(false);
    }
    setIsError("");

    setName(event.target.value);
  };

  const handleChangeCode = (event) => {
    if (codeError) {
      setCodeError(false);
    }
    setIsError("");

    setCode(event.target.value);
  };

  const handleChangeCity = (event) => {
    if (cityError) {
      setCityError(false);
    }
    setIsError("");

    setCity(event.target.value);
  };

  const handleChangeProfession = (event) => {
    if (professionError) {
      setProfessionError(false);
    }
    setIsError("");

    setProfession(event.target.value);
  };

  const handleChangeColor = (event) => {
    if (colorError) {
      setColorError(false);
    }
    setIsError("");

    setColor(event.target.value);
  };

  const handleChangeBranch = (event) => {
    if (branchError) {
      setBranchError(false);
    }
    setIsError("");

    setBranch(event.target.value);
  };

  const handleChangeAssigned = (event) => {
    if (assignedError) {
      setAssignedError(false);
    }
    setIsError("");

    setAssigned(event.target.value);
  };

  // created updated employee object to send back to the backend
  const updatedEmployee = {
    name: name,
    code: code,
    profession: profession,
    city: city,
    color: color,
    branch: branch,
    assigned: assigned,
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
    //form validation
    if (!name) {
      setNameError(true);
    }
    if (!code) {
      setCodeError(true);
    }
    if (!profession) {
      setProfessionError(true);
    }
    if (!color) {
      setColorError(true);
    }
    if (!city) {
      setCityError(true);
    }
    if (!branch) {
      setBranchError(true);
    }
    if (!assigned) {
      setAssignedError(true);
    }
    if (
      !name ||
      !code ||
      !profession ||
      !color ||
      !city ||
      !branch ||
      !assigned
    ) {
      return;
    }

    axios
      .put("http://localhost:5000/employees/employee/" + id, updatedEmployee)
      .then(() => {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
      })
      .catch((error) => {
        setIsError(error.response.data.error);
        if (error.response.data.error.length === 0) {
          setIsError("Something went wrong. Try again!");
        }
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
        <h1 className="employee-form__title">Edit Employee</h1>
      </header>
      <form onSubmit={handleSubmit} className="employee-form__form">
        <div className="employee-form__section employee-form__section--left">
          <label className="employee-form__label">
            Employee Name
            <input
              className={`employee-form__input ${
                nameError ? "employee-form__input--error" : ""
              }`}
              type="text"
              placeholder="Employee Name"
              value={name}
              onChange={handleChangeName}
            />
            {nameError && (
              <p className="error">
                <img src={error} alt="error icon" className="error__icon" />
                This field is required
              </p>
            )}
          </label>
          <label className="employee-form__label">
            Employee Code
            <input
              className={`employee-form__input ${
                codeError ? "employee-form__input--error" : ""
              }`}
              type="text"
              placeholder="Employee Code"
              value={code}
              onChange={handleChangeCode}
            />
            {codeError && (
              <p className="error">
                <img src={error} alt="error icon" className="error__icon" />
                This field is required
              </p>
            )}
          </label>
          <label className="employee-form__label">
            Employee Profession
            <input
              className={`employee-form__input ${
                professionError ? "employee-form__input--error" : ""
              }`}
              type="text"
              placeholder="Employee Profession"
              value={profession}
              onChange={handleChangeProfession}
            />
            {professionError && (
              <p className="error">
                <img src={error} alt="error icon" className="error__icon" />
                This field is required
              </p>
            )}
          </label>
          <label className="employee-form__label">
            Employee Color
            <input
              className={`employee-form__input ${
                colorError ? "employee-form__input--error" : ""
              }`}
              type="text"
              placeholder="Employee Color"
              value={color}
              onChange={handleChangeColor}
            />
            {colorError && (
              <p className="error">
                <img src={error} alt="error icon" className="error__icon" />
                This field is required
              </p>
            )}
          </label>
        </div>
        <div className="employee-form__section">
          <label className="employee-form__label">
            Employee City
            <input
              className={`employee-form__input ${
                cityError ? "employee-form__input--error" : ""
              }`}
              type="text"
              placeholder="Employee City"
              value={city}
              onChange={handleChangeCity}
            />
            {cityError && (
              <p className="error">
                <img src={error} alt="error icon" className="error__icon" />
                This field is required
              </p>
            )}
          </label>
          <label className="employee-form__label">
            Employee Branch
            <input
              className={`employee-form__input ${
                branchError ? "employee-form__input--error" : ""
              }`}
              type="text"
              placeholder="Employee Branch"
              value={branch}
              onChange={handleChangeBranch}
            />
            {branchError && (
              <p className="error">
                <img src={error} alt="error icon" className="error__icon" />
                This field is required
              </p>
            )}
          </label>
          <label className="employee-form__label">
            Employee Status
            <select
              className={`employee-form__input ${
                assignedError ? "employee-form__input--error" : ""
              }`}
              type="select"
              placeholder="status"
              value={assigned}
              onChange={handleChangeAssigned}
            >
              <option value=""></option>
              <option value="Assigned">Assigned</option>
              <option value="Unassigned">Unassigned</option>
            </select>
            {assignedError && (
              <p className="error">
                <img src={error} alt="error icon" className="error__icon" />
                This field is required
              </p>
            )}
          </label>
        </div>
        <footer className="employee-form__footer">
          <p className="employee-form__error">{isError}</p>
          {success && (
            <p className="employee-form__error employee-form__error--success">
              Employee Successfully Updated
            </p>
          )}
          <Link to="/" className=" employee-form__button">
            Cancel
          </Link>
          <button type="submit" className="employee-form__button button">
            + Edit Employee
          </button>
        </footer>
      </form>
    </div>
  );
}

export default EditEmployeePage;

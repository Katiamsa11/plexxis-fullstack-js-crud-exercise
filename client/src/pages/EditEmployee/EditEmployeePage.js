// import React from 'react';
// import {TabTitle} from "../../utils/Utils";
// import backArrow from "../../assets/icons/arrow_back-24px.svg";
// // import errorImg from "../../assets/icons/error-24px.svg";
// // import axios from "axios";
// // import { Link, useParams, useNavigate } from "react-router-dom";
// // import { useEffect, useState } from "react";

// function EditEmployeePage() {
//      //function to change tab title dynamically
//      TabTitle("Edit Employee");
//      //useNavigate to set up backward navigation
//       const navigate = useNavigate();
//         // Set State to manipulate the form values
//         const [name, setName] = useState("");
//         const [code, setCode] = useState("");
//         const [city, setCity] = useState("");
//         const [profession, setProfession] = useState("");
//         const [color, setColor] = useState("");
//         const [branch, setBranch] = useState("");
//         const [assigned, setAssigned] = useState("");
//           //create state generate success message
//       const [success, setSuccess] = useState(false);
//       const [isError, setIsError] = useState("");

//      //useParams to get the id of the selected warehouse
//   // const { id } = useParams();

//       //handle change to control the form elements
//       const handleChangeName = (event) => {
//         setName(event.target.value);
//       };
    
//       const handleChangeCode = (event) => {
    
//         setCode(event.target.value);
//       };
    
//       const handleChangeCity = (event) => {
//         setCity(event.target.value);
//       };
    
//       const handleChangeProfession = (event) => {
//         setProfession(event.target.value);
//       };
    
//       const handleChangeColor = (event) => {
//         setColor(event.target.value);
//       };
    
//       const handleChangeBranch = (event) => {
//         setBranch(event.target.value);
//       };
    
//       const handleChangeAssigned = (event) => {
//         setAssigned(event.target.value);
//       };

//         //created new warehouse object to send back to the backend
//   // const updatedEmployee = {
//   //   name: name,
//   //   code: code,
//   //   profession: profession,
//   //   city: city,
//   //     color: color,
//   //     branch: branch,
//   //     assigned: assigned,

//   // };

//   //     //function to handle form submission
//   // const handleSubmit = (event) => {
//   //   event.preventDefault();

//   //   axios
//   //     .put("http://localhost:8080/employees/employee/" + id , updatedEmployee)
//   //     .then(() => {
//   //       setSuccess(true);
//   //       setTimeout(() => {
//   //         setSuccess(false);
//   //       }, 2000);
//   //     })
//   //     .catch((error) => {
//   //       setIsError(error.response.data.error);
//   //       if (error.response.data.error.length === 0) {
//   //         setIsError("Something went wrong. Try again!");
//   //       }
//   //     });
//   // };



//   return (
//     <div className="employee-form">
//     <header className="employee-form__header">
//       <img
//         className="employee-form__back"
//         src={backArrow}
//         alt="arrow to navigate back"
//         onClick={() => navigate(-1)}
//       />
//       <h1 className="employee-form__title"> Add New Employee</h1>
//     </header>
//     <form  onSubmit={handleSubmit} className="employee-form__form">
//       <div className="employee-form__section employee-form__section--left">
//         <label className="employee-form__label">
//           Employee Name
//           <input
//           className="employee-form__input"
//             type="text"
//             placeholder="Employee Name"
//             value={name}
//             onChange={handleChangeName}
//           />
//         </label>
//         <label className="employee-form__label">
//         Employee Code
//           <input
//             className="employee-form__input"
//             type="text"
//             placeholder="Employee Code"
//             value={code}
//             onChange={handleChangeCode}
//           />
//         </label>
//         <label className="employee-form__label">
//           Employee Profession
//           <input
//           className="employee-form__input"
//             type="text"
//             placeholder="City"
//             value={profession}
//             onChange={handleChangeProfession}
//           />
//         </label>
//         <label className="employee-form__label">
//         Employee Color
//           <input
//           className="employee-form__input"
//             type="text"
//             placeholder="Country"
//             value={color}
//             onChange={handleChangeColor}
//           />
//         </label>
//       </div>
//       <div className="employee-form__section">
//         <label className="employee-form__label">
//           Employee City
//           <input
//           className="employee-form__input"
//             type="text"
//             placeholder="Contact Name"
//             value={city}
//             onChange={handleChangeCity}
//           />
//         </label>
//         <label className="employee-form__label">
//         Employee Branch
//           <input
//           className="employee-form__input"
//             type="text"
//             placeholder="Employee Branch"
//             value={branch}
//             onChange={handleChangeBranch}
//           />
//         </label>
//         <label className="employee-form__label">
//         Employee Status
//           <input
//           className="employee-form__input"
//             type="text"
//             placeholder="Phone Number"
//             value={assigned}
//             onChange={handleChangeAssigned}
//           />
//         </label>
//       </div>
//       <footer className="employee-form__footer">
//         <Link
//           to="/"
//           className="employee-form__button button button--cancel"
//         >
//           Cancel
//         </Link>
//         <button
//           type="submit"
//           className="employee-form__button button button--primary"
//         >
//           + Add Employee
//         </button>
//       </footer>
//     </form>
//   </div>
//   )
// }

// export default EditEmployeePage;
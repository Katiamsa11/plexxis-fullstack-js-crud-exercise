import React, { useMemo, useState, useEffect } from "react";
import Table from "../../components/Table/Table";
import LoadingPage from "../../components/Loading/LoadingPage";
import imageDelete from "../../assets/icons/delete.svg";
import imageEdit from "../../assets/icons/edit.svg";
import { fetchEmployees, TabTitle, deleteEmployee } from "../../utils/Utils";
import { Link } from "react-router-dom";
import "../EmployeesPage/EmployeesPage.scss";

function EmployeesPage() {
  //function to change tab title dynamically
  TabTitle("Employee Page");
  // data state to store the employees API data. Its initial value is an empty array
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  // state to reload component after delete
  const [reload, setReload] = useState(1);
  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    fetchEmployees()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
      });
  }, [reload]);

  //delete bookings
  const handleDelete = (id) => {
    deleteEmployee(id)
      .then((response) => {
        setReload(reload + 1);
      })
      .catch((error) => {
        console.log(error);
        setIsError("Something Went Wrong! Please Try Again.");
      });
  };

  const columns = useMemo(
    () => [
      {
        Header: "Employees",
        columns: [
          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "Color",
            accessor: "color",
            Cell: ({ cell: { value } }) => {
              return (
                <div className="color" style={{ background: value }}></div>
              );
            },
          },
          {
            Header: "Profession",
            accessor: "profession",
          },
          {
            Header: "Code",
            accessor: "code",
          },
          {
            Header: "City",
            accessor: "city",
          },
          {
            Header: "Branch",
            accessor: "branch",
          },
          {
            Header: "Status",
            accessor: "assigned",
            Cell: ({ cell: { value } }) => {
              const assignment = value.toString();
              return (
                <div
                  className="badge"
                  style={{
                    background: assignment === "true" ? "#567E9B" : "#AEAFB3",
                  }}
                >
                  {assignment === "true" ? "Assigned" : "Unassigned"}
                </div>
              );
            },
          },
          {
            Header: "",
            accessor: (originalRow) => (
              <div>
                <img
                  src={imageDelete}
                  alt="delete icon"
                  onClick={() => handleDelete(originalRow.id)}
                />
                <Link to={`/employee/edit/${originalRow.id}`}>
                  <img src={imageEdit} alt="edit icon" />
                </Link>
              </div>
            ),
            id: "id",
          },
        ],
      },
    ],
    []
  );

  if (data.length === 0) {
    return <LoadingPage />;
  }

  if (isError) {
    return <h1>....There was an unexpected Error. Refresh page!</h1>;
  }

  return (
    <div className="employees">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default EmployeesPage;

import React, { useMemo, useState, useEffect } from "react";
import Table from "../components/Table/Table";
import { fetchEmployees, TabTitle } from "../utils/Utils";



function EmployeesPage() {
  //function to change tab title dynamically 
  TabTitle("Employee Page");
   // data state to store the employees API data. Its initial value is an empty array
   const [data, setData] = useState([]);
   const [isError, setIsError] = useState(false);
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
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Employees",
        columns: [
          {
            Header: "Name",
            accessor: "name"
          },
          {
            Header: "Code",
            accessor: "code"
          },
          {
            Header: "Profession",
            accessor: "profession"
          },
          {
            Header: "Color",
            accessor: "color"
          },
          {
            Header: "City",
            accessor: "city"
          },
          {
            Header: "Branch",
            accessor: "branch"
          },
          {
            Header: "Assigned",
            accessor: "assigned"
          }
        ]
      }
    ],
    []
  );

  return (
    <div className="App">
    <Table columns={columns} data={data} />
    </div>
  );
  
}

export default EmployeesPage;
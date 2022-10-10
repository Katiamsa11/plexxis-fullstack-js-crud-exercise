import React, { useState } from "react";
import "./Table.scss";
import { useTable, useFilters, useSortBy } from "react-table";
import { Link } from "react-router-dom";

function Table({ columns, data }) {
  // Create a state
  const [filterInput, setFilterInput] = useState("");
  // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups,
    rows, // rows for the table based on the data passed
    prepareRow,
    setFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters, // Adding the useFilters Hook to the table
    useSortBy // Adding sortBy hook to the table
  );

  // Update the state when input changes
  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilter("name", value); // Update the employee name filter. so the table will filter and show only the rows which have a matching value
    setFilterInput(value);
  };

  return (
    <section className="table">
      <div className="table__wrapper">
        <input
          value={filterInput}
          onChange={handleFilterChange}
          placeholder={"Search name"}
        />
        <Link to="/employees/add-new" className="table__link">
          <button className="table__button">create new employee</button>
        </Link>
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? "sort-desc"
                        : "sort-asc"
                      : ""
                  }
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default Table;

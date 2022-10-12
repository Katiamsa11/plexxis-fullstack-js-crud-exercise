import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderPage from "./components/Header/HeaderPage";
import EmployeesPage from "./pages/EmployeesPage/EmployeesPage";
import NewEmployeePage from "./pages/EmployeeForm/NewEmployeePage";
import EditEmployeePage from "./pages/EmployeeForm/EditEmployeePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderPage />
        <Routes>
          <Route path="/" element={<EmployeesPage />} />
          <Route path="/employees/add-new" element={<NewEmployeePage />} />
          <Route path="/employee/edit/:id" element={<EditEmployeePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

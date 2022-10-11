import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderPage from "./components/Header/HeaderPage";
import EmployeesPage from './pages/EmployeesPage/EmployeesPage';
import NewEmployeePage from "./pages/NewEmployee/NewEmployeePage";



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <HeaderPage />
    <Routes>
      <Route path="/" element={<EmployeesPage />} />
      <Route path="/employees/add-new" element={<NewEmployeePage />}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;

import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderPage from "./components/Header/HeaderPage";
import EmployeesPage from './pages/EmployeesPage';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <HeaderPage />
    <Routes>
      <Route path="/" element={<EmployeesPage />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;

import NavBar from "./components/AppBar";
import Login from "./pages/Login";
import DataGridDemo from "./components/DeviceList";
import Home from "./pages/Home";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { Outlet } from 'react-router-dom';


export default function App() {
  const NavBarLayout = () => (
    <>
      <NavBar />
      <Outlet />
    </>
  );


  return (
    <Router>
      <Routes>
        <Route element={<NavBarLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/devicelist" element={<DataGridDemo />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

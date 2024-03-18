import React, { Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";

import DashboardOrganization from "./pages-admin/DashboardOrganization/DashboardOrganization";
import SidebarAdmin from "./components/SidebarAdmin/SidebarAdmin";
import Employees from "./pages-admin/Employees/Employees";
import Departments from "./pages-admin/Departments/Departments";
import DashboardEmployee from "./pages-employee/DashboardEmployee/DashboardEmployee";

import SidebarEmployee from "./components/SidebarEmployee/SidebarEmployee";
import Profile from "./pages-employee/Profile/Profile";
import Projects from "./pages-employee/Projects/Projects";
import Home from "./Home/Home";
import OrgEmployee from "./pages-admin/OrgEmployee/OrgEmployee";
import Login from "./pages-admin/Login/Login";
import AdminRegister from "./pages-admin/AdminRegister/AdminRegister";
import EmployeeRegister from "./pages-employee/EmployeeRegister/EmployeeRegister";

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const showSidebar = [
    "/dashboard-employee",
    "/profile",
    "/projects",
    "/dashboard-admin",
    "/employees",
    "/departments",
    "/orgemployee",
  ].includes(pathname);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      navigate("/dashboard-admin");
    }
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="page">
        {showSidebar && (
          <div className="sidebar">
            {pathname.startsWith("/dashboard-admin") ||
            pathname.startsWith("/employees") ||
            pathname.startsWith("/departments") ||
            pathname.startsWith("/orgemployee") ? (
              <SidebarAdmin />
            ) : (
              <SidebarEmployee />
            )}
          </div>
        )}
        <div className="contents">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<AdminRegister />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard-admin"
              element={<DashboardOrganization />}
            />
            <Route path="/employees" element={<Employees />} />
            <Route path="/departments" element={<Departments />} />
            <Route
              path="/register/:organizationId"
              element={<EmployeeRegister />}
            />
            <Route path="/dashboard-employee" element={<DashboardEmployee />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/orgemployee" element={<OrgEmployee />} />
          </Routes>
        </div>
      </div>
    </Suspense>
  );
}

export default App;

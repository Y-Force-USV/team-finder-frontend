import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import OrganizationAccount from "./pages-admin/OrganizationAccount/OrganizationAccount";
import SignInAdmin from "./pages-admin/SignInAdmin/SignInAdmin";
import DashboardOrganization from "./pages-admin/DashboardOrganization/DashboardOrganization";
import SidebarAdmin from "./components/SidebarAdmin/SidebarAdmin";
import Employees from "./pages-admin/Employees/Employees";
import Departments from "./pages-admin/Departments/Departments";
import DashboardEmployee from "./pages-employee/DashboardEmployee/DashboardEmployee";
import EmployeeAccount from "./pages-employee/EmployeeAccount/EmployeeAccount";
import SignInEmployee from "./pages-employee/SignInEmployee/SignInEmployee";
import SidebarEmployee from "./components/SidebarEmployee/SidebarEmployee";
import Profile from "./pages-employee/Profile/Profile";
import Projects from "./pages-employee/Projects/Projects";
import Modal from "./components/Modal/Modal";
import Home from "./Home/Home";
import OrgEmployee from "./pages-admin/OrgEmployee/OrgEmployee";

function App() {
  const { pathname } = useLocation();

  const showSidebar = [
    "/dashboard-employee",
    "/profile",
    "/projects",
    "/dashboard-admin",
    "/employees",
    "/departments",
    "/orgemployee",
  ].includes(pathname);

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
            <Route path="/signup-admin" element={<OrganizationAccount />} />
            <Route path="/signin-admin" element={<SignInAdmin />} />
            <Route
              path="/dashboard-admin"
              element={<DashboardOrganization />}
            />
            <Route path="/employees" element={<Employees />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/signup-employee" element={<EmployeeAccount />} />
            <Route path="/signin-employee" element={<SignInEmployee />} />
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

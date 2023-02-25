import DashNavbar from "@/components/DashNavbar/DashNavbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Sidebar></Sidebar>
      <div>
        <DashNavbar></DashNavbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;

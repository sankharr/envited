// packages
import React from "react";
import { Outlet } from "react-router-dom";

// components

const MainLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default MainLayout;

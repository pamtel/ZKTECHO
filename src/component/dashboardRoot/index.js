import PropTypes from "prop-types";
import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { ContainerWrapper } from "../../style";

const propTypes = {
  children: PropTypes.any.isRequired,
};

const DashboardRoot = ({ children }) => {
  return (
    <ContainerWrapper>
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <main className="main-content">
        <div className="header-container">
          <Navbar />
        </div>
          {children}
      </main>
    </ContainerWrapper>
  );
};
DashboardRoot.propTypes = propTypes;

export default DashboardRoot;

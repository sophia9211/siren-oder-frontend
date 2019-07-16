import React from "react";
import "./AdminHeader.scss";
import logo from "../../../Style/img/sLogo.png";
import title from "../../../Style/img/tLogo.png";

const AdminHeader = ({ children }) => {
  return (
    <header className="root_header_admin">
      <div className="header_logo">
        <img src={logo} />
      </div>
      <div className="title_logo">
        <img src={title} />
        <span className="title_logo_name">admin</span>
      </div>
      {children}
    </header>
  );
};

export default AdminHeader;

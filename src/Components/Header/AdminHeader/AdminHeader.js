import React from "react";
import "./AdminHeader.scss";
import logo from "Style/img/STBS.png";

const AdminHeader = ({ children, imgClassName, logoTitleName }) => {
  return (
    <header className="root_header_admin">
      <div className="header_logo">
        <img className={imgClassName} src={logo} />
      </div>
      <div className="title_logo">
        <span className={logoTitleName}>admin</span>
      </div>
      {children}
    </header>
  );
};

export default AdminHeader;

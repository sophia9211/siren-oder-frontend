import React from "react";
import "./AdminHeader.scss";

const AdminHeader = ({ children, logoSrc, titleSrc }) => {
  return (
    <header className="root_header_admin">
      <div className="header_logo">
        <img src={logoSrc} />
      </div>
      <div className="title_logo">
        <img src={titleSrc} />
        <span className="title_logo_name">admin</span>
      </div>
      {children}
    </header>
  );
};

export default AdminHeader;

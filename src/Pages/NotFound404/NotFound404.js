import React from "react";
import "./NotFound404.scss";
import { withRouter } from "react-router-dom";
import AdminHeader from "Components/Header/AdminHeader";
const NotFound404 = ({ history }) => {
  const handleClick = () => {
    history.push("/");
  };
  return (
    <div className="root_not_found">
      <AdminHeader logoTitleName="title_logo_name" />
      <div className="not_found"></div>
      <div className="go_to_back_btn" onClick={handleClick}></div>
    </div>
  );
};

export default withRouter(NotFound404);

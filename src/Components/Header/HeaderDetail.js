import React from "react";
import "./HeaderDetail.scss";
import { Link } from "react-router-dom";

const HeaderDetail = ({ link, src_right, alt, children }) => {
  return (
    <div className="header_detail">
      <Link to={link} className="header_detail_back">
        <img
          src="https://image.flaticon.com/icons/svg/60/60651.svg"
          alt="뒤로가기"
        />
      </Link>
      <div className="header_detail_text">{children}</div>
      {/* <div header_detail_right>
        <img src={src_right} alt={alt} />
      </div> */}
    </div>
  );
};

export default HeaderDetail;

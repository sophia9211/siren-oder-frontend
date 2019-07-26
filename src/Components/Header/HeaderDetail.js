import React, { Component } from "react";
import "./HeaderDetail.scss";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class HeaderDetail extends Component {
  prevPage = () => {
    this.props.history.goBack();
  };
  render() {
    // console.log(this.props.history);
    const { children } = this.props;
    return (
      <div className="header_detail">
        <Link onClick={this.prevPage} to="" className="header_detail_back">
          <img
            src="https://image.flaticon.com/icons/svg/60/60651.svg"
            alt="뒤로가기"
          />
        </Link>
        <div className="header_detail_text">{children}</div>
      </div>
    );
  }
}

export default withRouter(HeaderDetail);

import React, { Component } from "react";
import { CHECK_IMG } from "Config/Config.js";
import "./Inputbox.scss";

class inputbox extends Component {
  render() {
    const { className, name, type, placeholder, change } = this.props;
    return (
      <div className={className}>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={change}
        />
        {/* <div className="hide_img">
          <img src={CHECK_IMG} alt="체크 이미지" />
        </div> */}
      </div>
    );
  }
}

export default inputbox;

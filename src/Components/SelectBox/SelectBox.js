import React, { Component } from "react";
import "./SelectBox.scss";

class SelectBox extends Component {
  state = {
    isClicked: false
  };

  handleClick = () => {
    const { isClicked } = this.state;
    this.setState({
      isClicked: !isClicked
    });
  };
  render() {
    const { isClicked } = this.state;
    const { location1, location2, location3 } = this.props;
    return (
      <div className="root_selectbox">
        <select
          className={!isClicked ? "non_clickSelected" : "clickSelected"}
          onClick={this.handleClick}
        >
          <option selected>{location1}</option>
          <option>{location2}</option>
          <option>{location3}</option>
        </select>
      </div>
    );
  }
}

export default SelectBox;
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
      <div class="root_selectbox">
        <select
          id={isClicked ? "select" : "clickSelected"}
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

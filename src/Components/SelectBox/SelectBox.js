import React, { Component } from "react";
import "./SelectBox.scss";

class SelectBox extends Component {
  state = {
    isClicked: false,
    listAmount: []
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
          <option value="0">{location1}</option>
          <option value="1">{location2}</option>
          <option value="2">{location3}</option>
        </select>
      </div>
    );
  }
}

export default SelectBox;

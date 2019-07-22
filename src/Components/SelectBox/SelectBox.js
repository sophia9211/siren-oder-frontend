import React from "react";
import "./SelectBox.scss";

const SelectBox = ({
  handleSelectedChange,
  selectName,
  location1,
  location2,
  location3
}) => {
  return (
    <div className="root_selectbox">
      <select
        name={selectName}
        className="clickSelected"
        onChange={handleSelectedChange}
      >
        <option value={location1}>{location1}</option>
        <option value={location2}>{location2}</option>
        <option value={location3}>{location3}</option>
      </select>
    </div>
  );
};

export default SelectBox;

import React from "react";
import "./SelectBox.scss";

const SelectBox = ({ handleSelectedChange, selectName, locationList }) => {
  return (
    <div className="root_selectbox">
      <select
        name={selectName}
        className="clickSelected"
        onChange={handleSelectedChange}
      >
        <option>선택</option>
        {locationList &&
          locationList.map((item, index) => {
            return (
              <option key={item + index} value={item.id}>
                {item.name}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default SelectBox;

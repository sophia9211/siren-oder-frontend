import React from "react";
import "./StoreModal.scss";

const StoreModal = ({ onClick, name, address }) => {
  return (
    <div className="store_modal">
      <div className="store_modal_wrapper">
        <p>{name}으로 정하시겠습니까?</p>
        <div>{/* <img /> */}</div>
        <p>{name}</p>
        <p>{address}</p>
        <p>사이렌 오더 운영시간 : 07:00 ~ 22:30</p>
        <p>*변경 후에는 해당 매장의 재고 정보를 표시합니다.</p>
        <div>
          <button onClick={onClick}></button>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default StoreModal;

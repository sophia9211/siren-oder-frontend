import React, { Component } from "react";
import "./StoreModal.scss";
import { withRouter } from "react-router-dom";

class StoreModal extends Component {
  setStore = () => {
    const store = JSON.parse(localStorage.getItem("store"));
    const data = {
      id: 1,
      name: "강남점",
      address: "서울시 강남구 대치동 대치상가"
    };
    // this.props.history.push({
    //   pathname: "/detailmenu"
    // });
    if (store) {
      localStorage.removeItem("store");
      localStorage.setItem("store", JSON.stringify(data));
      // this.props.history.push({
      //   pathname: "/detailmenu"
      // });
    } else {
      localStorage.setItem("store", JSON.stringify(data));
      // this.props.history.push({
      //   pathname: "/detailmenu"
      // });
    }
  };

  render() {
    const { name, address, onClick } = this.props;
    return (
      <div className="store_modal">
        <div className="store_modal_wrapper">
          <p>{name}으로 정하시겠습니까?</p>
          <div>{/* <img /> */}</div>
          <p>{name}</p>
          <p>{address}</p>
          <p>사이렌 오더 운영시간 : 07:00 ~ 22:30</p>
          <p>* 변경 후에는 해당 매장의 재고 정보를 표시합니다.</p>
          <div>
            <button onClick={onClick}>아니오</button>
            <button onClick={this.setStore}>예</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(StoreModal);

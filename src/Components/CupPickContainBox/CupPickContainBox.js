import React from "react";
import "./CupPickContainBox.scss";
import SizeSelectBox from "Components/SizeSelectBox";

class CupPickContainBox extends React.Component {
  state = {
    cupType: "",
    alertText: "환경보호를 위해 매장 내에서는 머그컵을 이용해주세요."
  };

  mugCup = () => {
    this.setState(
      {
        cupType: "mugcup",

        alertText: "환경보호에 동참해주셔서 감사합니다."
      },
      () => {
        this.props.onCreate(this.state.cupType);
      }
    );
  };

  personalCup = () => {
    alert(`주문 전송 후, 음료를 담을 수 있는 사이지의 개인 컵(텀블러 등)을
        '음료 받는 곳'에 전달해 주세요.
        
        개인 컵이 전달되지 않거나 
        주문한 음료의 용량보다 작을 경우
        음료를 제조 할수 없습니다.`);
    this.setState(
      {
        cupType: "personalcup"
      },
      () => {
        this.props.onCreate(this.state.cupType);
      }
    );
  };

  oneCup = () => {
    this.setState(
      {
        cupType: "onecup",
        alertText: "컵 선택이 완료되었습니다."
      },
      () => {
        this.props.onCreate(this.state.cupType);
      }
    );
  };

  render() {
    return (
      <div className="root_cup_pick_box" style={this.props.style}>
        <div className="cup_pick_contain_box">
          <p className="cup_pick_text">컵 선택</p>
          <p className="cup_pick_alert_text">{this.state.alertText}</p>
        </div>
        <div className="cup_pick_btn_contain_box">
          <div
            className="cup_pick_btn_box border_left_none"
            onClick={this.mugCup}
            style={{
              backgroundColor: `${
                this.state.cupType === "mugcup" ? "#333333" : "white"
              }`,
              color: `${this.state.cupType === "mugcup" ? "white" : "#333333"}`
            }}
          >
            머그컵
          </div>
          <div
            className="cup_pick_btn_box "
            onClick={this.personalCup}
            style={{
              backgroundColor: `${
                this.state.cupType === "personalcup" ? "#333333" : "white"
              }`,
              color: `${
                this.state.cupType === "personalcup" ? "white" : "#333333"
              }`
            }}
          >
            개인 컵
          </div>
          <div
            className="cup_pick_btn_box border_right_radius"
            onClick={this.oneCup}
            style={{
              backgroundColor: `${
                this.state.cupType === "onecup" ? "#333333" : "white"
              }`,
              color: `${this.state.cupType === "onecup" ? "white" : "#333333"}`
            }}
          >
            1회용 컵
          </div>
        </div>
      </div>
    );
  }
}

export default CupPickContainBox;

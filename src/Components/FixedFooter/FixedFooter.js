import React from "react";
import "./FixedFooter.scss";

const FixedFooter = props => {
  return (
    <div className="fixed_footer_box">
      <div className="footer_text_box">
        <span>* 매장 설정 후,</span>
        <span className="yellow">&nbsp;주문가능 수량</span>
        <span>이 표시됩니다.</span>
        <button className="shop_footer_btn">설정</button>
      </div>
    </div>
  );
};

export default FixedFooter;

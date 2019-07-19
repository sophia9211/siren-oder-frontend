import React, { Component } from "react";
import ReactDOM from "react-dom";
import Modal from "react-responsive-modal";
import { DatePicker } from "@y0c/react-datepicker";
import "@y0c/react-datepicker/assets/styles/calendar.scss";
import "moment/locale/ko";
import MainLayout from "Layouts/MainLayout";
import MenuTicket from "Components/MenuTicket";
import "../Main/Main.scss";
import "./History.scss";

class History extends Component {
  state = {
    show: false
  };

  showModal = () => {
    console.log(11);
    this.setState({
      show: true
    });
  };

  closeModal = () => {
    this.setState({
      show: false
    });
  };

  render() {
    const { show } = this.state;
    return (
      <MainLayout>
        <div className="history_search" id="history_search_modal">
          <div onClick={this.showModal}>
            <span>주문상태(전체)</span>
            <span>||</span>
          </div>
          <Modal open={show} onClose={this.closeModal} center>
            <div>
              <label>
                <input type="checkbox" />
                전체
              </label>
              <label>
                <input type="checkbox" />
                결제완료
              </label>
              <label>
                <input type="checkbox" />
                준비완료
              </label>
              <label>
                <input type="checkbox" />
                결제취소
              </label>
            </div>
          </Modal>
        </div>
        <div className="history_date">
          <div style={{ height: "400px" }}>
            {/* <RangeDatePicker portal startText="Start" endText="End" /> */}
          </div>
        </div>
        <div className="history_list">
          <div>
            <MenuTicket
              menuName="돌체 콜드 브루"
              engName="Dolce Cold Brew"
              price="4,100원"
              imgSrc="http://image.istarbucks.co.kr/upload/store/skuimg/2019/04/[9200000002081]_20190409153909859.jpg"
            />
            <MenuTicket
              menuName="제주 말차샷 크림 프라푸치노"
              engName="Jeju Matcha Shot Cream Frappuccino"
              price="6,300원"
              imgSrc="http://image.istarbucks.co.kr/upload/store/skuimg/2017/06/[9200000000680]_20170623144915127.jpg"
            />
            <MenuTicket
              menuName="블랙 티 레모네이드 피지오"
              engName="Black Tea Lemonade Starbucks Fizzio™"
              price="4,800원"
              imgSrc="http://image.istarbucks.co.kr/upload/store/skuimg/2016/09/[107025]_20160905095924513.jpg"
            />
            <MenuTicket
              menuName="아이스 시그니처 초콜릿"
              engName="Iced Signature Chocolate"
              price="5,600원"
              imgSrc="http://image.istarbucks.co.kr/upload/store/skuimg/2015/07/[110621]_20150723005650154.jpg"
            />
          </div>
        </div>
      </MainLayout>
    );
  }
}
// render(<History />, document.getElementById("history_search_modal"));
export default History;

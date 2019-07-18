import React, { Component } from "react";
import ReactDOM from "react-dom";
import Modal from "react-responsive-modal";
import MainLayout from "Layouts/MainLayout";
import MenuTicket from "Components/MenuTicket";
import "../Main/Main.scss";
import "./History.scss";

class History extends Component {
  state = {
    open: false
  };

  showModal = () => {
    console.log(11);
    this.setState({
      open: true
    });
  };

  closeModal = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const { open } = this.state.open;
    return (
      <MainLayout>
        <div className="history_search" id="history_search_modal">
          <button onClick={this.showModal}>
            <span>주문상태(전체)</span>
            <span>||</span>
          </button>
          <Modal open={open} onClose={this.closeModal} center>
            11111
          </Modal>
        </div>
        <div className="history_date"></div>
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

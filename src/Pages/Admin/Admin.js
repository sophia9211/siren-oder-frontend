import React, { Component } from "react";
import "./Admin.scss";
import MenuCard from "Components/MenuCard";
import ameri from "Style/testImg/americano.jpg";
import logo from "Style/img/sLogo.png";
import title from "Style/img/tLogo.png";
import AdminHeader from "Components/Header/AdminHeader";
import OrderListCard from "Components/OrderListCard";
import AdminFooter from "Components/FixedFooter/AdminFooter";
import MonthPriceChart from "Components/Chart/MonthPriceChart/MonthPriceChart";
import SalesInforamtion from "Components/SalesInformation/SalesInformation";
import DaySalesChart from "Components/Chart/DaySalesChart/DaySalesChart";
import MonthSalesChart from "Components/Chart/MonthSalesChart/MonthSalesChart";
import RealTimeOrderChart from "Components/Chart/RealTimeOrderChart/RealTimeOrderChart";
import TimeOrderAmountChart from "Components/Chart/TimeOrderAmountChart/TimeOrderAmountChart";
import { REALTIMEPRICE } from "testData/mockGraph";
import { DAY_SALES_PRICE } from "testData/mockGraph";
import { MONTH_SALES_PRICE } from "testData/mockGraph";
import { ORDERAMOUNT } from "testData/mockGraph";

class Admin extends Component {
  state = {
    realtimeValue: REALTIMEPRICE,
    daySalesPrice: DAY_SALES_PRICE,
    monthSalesPrice: MONTH_SALES_PRICE,
    orderAmount: ORDERAMOUNT
  };

  componentDidMount() {
    let itemList = document.getElementsByClassName("wrap_order_list")[0];
    console.log(itemList);
    itemList.addEventListener("scroll", this.handleScroll);

    // 그래프 정보 받아와야함.
    console.log(this.state.daySalesPrice);
    console.log(this.state.orderAmount);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleReadyClick = e => {
    console.log("클릭");
  };

  handleFinishClick = () => {
    console.log("로그아웃");
  };

  handleScroll = () => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;

    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    if (scrollHeight - innerHeight - scrollTop < 100) {
      console.log("끝");
    }
  };

  render() {
    console.log(this.state.realtimeValue);
    return (
      <>
        <AdminHeader logoSrc={logo} titleSrc={title}>
          <div className="wrap_admin_user_info">
            <span className="admin_user_info">지점명</span>
            <span className="admin_user_info">선릉역</span>
            <span className="admin_user_info">직책명</span>
            <span className="admin_user_info">매니져</span>
            <span className="admin_user_info">관리자명</span>
            <span className="admin_user_info">아이유</span>
          </div>
          <button className="admin_login_button" onClick={this.handleLogIn}>
            로그아웃
          </button>
        </AdminHeader>

        <section className="root_body_admin">
          <div className="order_list_title">주문목록</div>
          <div className="wrap_list_praph">
            <section className="wrap_order_list">
              <OrderListCard
                orderNum="1"
                menuImg={ameri}
                orderItem="아메리카노 1잔"
                orderUser="레오"
                handleReadyClick={this.handleReadyClick}
                handleFinishClick={this.handleFinishClick}
              />
              <OrderListCard
                orderNum="2"
                menuImg={ameri}
                orderItem="아메리카노 1잔"
                orderUser="레오"
                handleReadyClick={this.handleReadyClick}
                handleFinishClick={this.handleFinishClick}
              />
              <OrderListCard
                orderNum="3"
                menuImg={ameri}
                orderItem="아메리카노 1잔"
                orderUser="레오"
                handleReadyClick={this.handleReadyClick}
                handleFinishClick={this.handleFinishClick}
                REALTIMEPRICE
              />
              <OrderListCard
                orderNum="4"
                menuImg={ameri}
                orderItem="아메리카노 1잔"
                orderUser="레오"
                handleReadyClick={this.handleReadyClick}
                handleFinishClick={this.handleFinishClick}
              />
              <OrderListCard
                orderNum="21"
                menuImg={ameri}
                orderItem="아메리카노 1잔"
                orderUser="레오"
                handleReadyClick={this.handleReadyClick}
                handleFinishClick={this.handleFinishClick}
              />
              <OrderListCard
                orderNum="1"
                menuImg={ameri}
                orderItem="아메리카노 1잔"
                orderUser="레오"
                handleReadyClick={this.handleReadyClick}
                handleFinishClick={this.handleFinishClick}
              />
              <OrderListCard
                orderNum="1"
                menuImg={ameri}
                orderItem="아메리카노 1잔"
                orderUser="레오"
                handleReadyClick={this.handleReadyClick}
                handleFinishClick={this.handleFinishClick}
              />
              <OrderListCard
                orderNum="1"
                menuImg={ameri}
                orderItem="아메리카노 1잔"
                orderUser="레오"
                handleReadyClick={this.handleReadyClick}
                handleFinishClick={this.handleFinishClick}
              />
            </section>
            <section className="wrap_order_list_graph">
              <div className="wrap_day_month_sales_charts">
                <SalesInforamtion
                  canvasName="sales_canvas_day"
                  visualPrice={this.state.daySalesPrice["day_price_percent"]}
                  visualTitle="금일 판매금액"
                  visualTotalPrice={
                    this.state.daySalesPrice["day_price"] + "원"
                  }
                >
                  <DaySalesChart
                    totalPrice={
                      100 - this.state.daySalesPrice["day_price_percent"]
                    }
                    todayPrice={this.state.daySalesPrice["day_price_percent"]}
                  />
                </SalesInforamtion>

                <SalesInforamtion
                  visualPrice={
                    this.state.monthSalesPrice["month_price_percent"]
                  }
                  visualTitle="월간 누적판매금액"
                  visualTotalPrice={
                    this.state.monthSalesPrice["month_price"] + "원"
                  }
                >
                  <MonthSalesChart
                    totalMonthPrice={
                      100 - this.state.monthSalesPrice["month_price_percent"]
                    }
                    monthPrice={
                      this.state.monthSalesPrice["month_price_percent"]
                    }
                  />
                </SalesInforamtion>
              </div>
              <div className="wrap_realtime_timeoder">
                <div className="wrap_realtime_month">
                  <RealTimeOrderChart value={this.state.realtimeValue} />
                </div>
                <div className="wrap_realtime_month">
                  <TimeOrderAmountChart amount={this.state.orderAmount} />
                </div>
              </div>
            </section>
          </div>
        </section>
        {/* <AdminFooter
          nextOrder="카라멜 마끼야또 1잔"
          monthPrice="150,000원"
          todayPrice="50,000원"
        /> */}
      </>
    );
  }
}

export default Admin;

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
import PopularItemChart from "Components/Chart/PopularItemChart/PopularItemChart";
import { connect } from "react-redux";
import { unAuth } from "Actions/AuthAction.js";
import { REALTIMEPRICE } from "testData/mockGraph";
import { DAY_SALES_PRICE } from "testData/mockGraph";
import { MONTH_SALES_PRICE } from "testData/mockGraph";
import { ORDERAMOUNT } from "testData/mockGraph";
import { POPULAR_ITEM } from "testData/mockGraph";
import { MONTH_PRICE } from "testData/mockGraph";
import { getKoreaDateYMD, getKoreaDateYMDTime } from "Utils/date.js";
import { DJKLSAJFF } from "Config/Config.js";

class Admin extends Component {
  state = {
    isClickedLogout: false,
    realtimeValue: REALTIMEPRICE,
    daySalesPrice: DAY_SALES_PRICE,
    monthSalesPrice: MONTH_SALES_PRICE,
    orderAmount: ORDERAMOUNT,
    popularItem: POPULAR_ITEM,
    monthPrice: MONTH_PRICE
  };

  handleReadyClick = e => {
    console.log("클릭");
  };

  handleLogout = () => {
    localStorage.removeItem(DJKLSAJFF);
    alert("정상적으로 로그아웃 하였습니다.");
    this.props.history.push("/admin/login");
    this.props.onUnAuth();
  };

  render() {
    console.log(this.state.isUserLogin);
    return (
      <>
        <AdminHeader
          logoSrc={logo}
          titleSrc={title}
          logoTitleName="title_logo_name_main"
        >
          <div className="wrap_admin_user_info">
            <span className="admin_user_info">지점명</span>
            <span className="admin_user_info">선릉역</span>
            <span className="admin_user_info">직책명</span>
            <span className="admin_user_info">매니져</span>
            <span className="admin_user_info">관리자명</span>
            <span className="admin_user_info">아이유</span>
          </div>
          <button className="admin_login_button" onClick={this.handleLogout}>
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

                <SalesInforamtion>
                  <div className="wrap_popular_legend_op">
                    <PopularItemChart itemList={this.state.popularItem} />
                    <div className="wrap_legends">
                      <div className="wrap_legend">
                        <div
                          className="legend_size"
                          style={{ backgroundColor: "rgba(253, 194, 64)" }}
                        ></div>
                        <span className="legend_font">
                          {this.state.popularItem.name[0]}
                        </span>
                      </div>
                      <div className="wrap_legend">
                        <div
                          className="legend_size"
                          style={{ backgroundColor: "rgba(90, 202, 184)" }}
                        ></div>
                        <span className="legend_font">
                          {this.state.popularItem.name[1]}
                        </span>
                      </div>
                      <div className="wrap_legend">
                        <div
                          className="legend_size"
                          style={{ backgroundColor: "rgba(211, 103, 104)" }}
                        ></div>
                        <span className="legend_font">
                          {this.state.popularItem.name[2]}
                        </span>
                      </div>
                      <div className="wrap_legend">
                        <div
                          className="legend_size"
                          style={{ backgroundColor: "rgba(176, 165, 202)" }}
                        ></div>
                        <span className="legend_font">
                          {this.state.popularItem.name[3]}
                        </span>
                      </div>
                      <div className="wrap_legend">
                        <div
                          className="legend_size"
                          style={{ backgroundColor: "rgba(13, 123, 213)" }}
                        ></div>
                        <span className="legend_font">
                          {this.state.popularItem.name[4]}
                        </span>
                      </div>
                    </div>
                  </div>
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
              <div className="wrap_per_month_price">
                <MonthPriceChart monthPrice={this.state.monthPrice} />
              </div>
            </section>
          </div>
        </section>
      </>
    );
  }
}

//키값은 props에서 확인.
const mapStateToProps = state => {
  return {
    isUserLogin: state.auth.isUserLogin //여기서 auth는 reducer에서 선언한  state 값.
  };
};
//위에꺼와 별개값
const mapDispatchToProps = dispatch => {
  return {
    onUnAuth: () => dispatch(unAuth()) //dispatcher 실행함수
  };
};
//이내용을 컴포넌트화로 보내면 지금처럼 라우터부분에 보내면됨. 변수로 처리할꺼면 라우터부분에 변수가 들어가야함
Admin = connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);

export default Admin;

import React from "react";
import "./DetailMenu.scss";
import MainLayout from "Layouts/MainLayout";
import DetailMenuTiket from "Components/DetailMenuTiket";
import CupPickContainBox from "../../Components/CupPickContainBox/CupPickContainBox";

class DetailMenu extends React.Component {
  state = {
    price: 4100,
    count: 1
  };

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  countPlusClick = e => {
    this.setState({
      count: this.state.count + 1
    });
  };
  countMinusClick = e => {
    if (this.state.count > 1) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <MainLayout>
        <DetailMenuTiket
          menuName="돌체 콜드 브루"
          engName="Dolce Cold Brew"
          price={this.numberWithCommas(this.state.price * this.state.count)}
          imgSrc="http://image.istarbucks.co.kr/upload/store/skuimg/2019/04/[9200000002081]_20190409153909859.jpg"
          count={this.state.count}
          plusClick={this.countPlusClick}
          minusClick={this.countMinusClick}
        />
        <CupPickContainBox />
      </MainLayout>
    );
  }
}

export default DetailMenu;

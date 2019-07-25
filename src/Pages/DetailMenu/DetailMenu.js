import React from "react";
import "./DetailMenu.scss";
import MainLayout from "Layouts/MainLayout";
import DetailMenuTiket from "Components/DetailMenuTiket";
import CupPickContainBox from "Components/CupPickContainBox/CupPickContainBox";
import SizeSelectBox from "Components/SizeSelectBox";
import numberWithCommas from "Util/numberWithCommas";
import API_URL_MENU from "../../Config/Config";

const menuPrice = {
  short_price: 3000,
  tall_price: 4100,
  grande_price: 5000,
  venti_price: 5800
};

class DetailMenu extends React.Component {
  state = {
    name: "",
    engName: "",
    price: menuPrice.short_price,
    count: 1,
    id: this.props.location.state.id,
    menu: this.props.location.state.menu
  };
  componentDidMount() {
    fetch(
      "http://10.58.0.25:8000/product" + `/${this.state.menu}/${this.state.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    // .then(products => products.json())
    // .then(products => {
    //   this.setState({
    //     name: products.name,
    //     engName: poducts.engName
    //   });
    //   console.log(products);
    // });
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
  handleCreate = data => {
    if (data === "short") {
      this.setState({
        price: menuPrice.short_price
      });
    } else if (data === "tall") {
      this.setState({
        price: menuPrice.tall_price
      });
    } else if (data === "grande") {
      this.setState({
        price: menuPrice.grande_price
      });
    } else if (data === "venti") {
      this.setState({
        price: menuPrice.venti_price
      });
    }
  };

  render() {
    console.log(this.state);
    return (
      <MainLayout>
        <DetailMenuTiket
          menuName="돌체 콜드 브루"
          engName="Dolce Cold Brew"
          price={numberWithCommas(this.state.price * this.state.count)}
          imgSrc="http://image.istarbucks.co.kr/upload/store/skuimg/2019/04/[9200000002081]_20190409153909859.jpg"
          count={this.state.count}
          plusClick={this.countPlusClick}
          minusClick={this.countMinusClick}
        />
        <div className="detail_sub_box">
          <CupPickContainBox />

          <SizeSelectBox
            item={[
              { value: "short", id: 0 },
              { value: "tall", id: 1 },
              { value: "grande", id: 2 },
              { value: "venti", id: 3 }
            ]}
            onCreate={this.handleCreate}
          />
          <div className="menu_order_box">
            <div className="menu_order_btn">주문하기</div>
            <div className="menu_shopping_cart_">담기</div>
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default DetailMenu;

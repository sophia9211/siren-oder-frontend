import React from "react";
import "./DetailMenu.scss";
import MainLayout from "Layouts/MainLayout";
import DetailMenuTiket from "Components/DetailMenuTiket";
import CupPickContainBox from "Components/CupPickContainBox/CupPickContainBox";
import SizeSelectBox from "Components/SizeSelectBox";
import numberWithCommas from "Util/numberWithCommas";
import API_URL_MENU from "../../Config/Config";
import fillterPrice from "Util/fillterPrice";
import { throwStatement } from "@babel/types";

class DetailMenu extends React.Component {
  state = {
    condition: "",
    data: {},
    name: "",
    english_name: "",
    price: 0,
    count: 1,
    cup_type: "",
    size: "",
    id: this.props.location.state.id,
    menu: this.props.location.state.menu,
    img_url: this.props.location.state.img_url
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
    )
      .then(products => products.json())
      .then(products => {
        console.log("111");
        this.setState(
          {
            data: products.menu[0],
            name: products.menu[0].name,
            english_name: products.menu[0].english_name,
            price: fillterPrice(products.menu[0]),
            condition: products.menu[0].condition
          },
          () => {
            this.props.history.push({
              state: {
                data: products.menu[0]
              }
            });
          }
        );
        console.log(products);
      });
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
        price: this.state.data.short_price,
        size: data
      });
    } else if (data === "tall") {
      this.setState({
        price: this.state.data.tall_price,
        size: data
      });
    } else if (data === "grande") {
      this.setState({
        price: this.state.data.grande_price,
        size: data
      });
    } else if (data === "venti") {
      this.setState({
        price: this.state.data.venti_price,
        size: data
      });
    }
  };

  cupValueCheck = data => {
    this.setState({
      cup_type: data
    });
  };
  // fillterRender = data => {
  //   let newData = [];
  //   if (data.short_price < 0) {
  //     newData.push("short");
  //     console.log(newData);
  //   } else if (data.tall_price < 0) {
  //     console.log(newData);
  //     newData.push("tall");
  //   } else if (data.grande_price < 0) {
  //     console.log(newData);
  //     newData.push("grande");
  //   } else if (data.venti_price < 0) {
  //     newData.push("venti");
  //     console.log(newData);
  //   }
  //   console.log(newData);
  //   return newData;
  // };

  orderClick = () => {
    const getToken = localStorage.getItem("data");
    const Data = {
      id: this.state.id,
      name: this.state.name,
      english_name: this.state.english_name,
      price: this.state.price,
      count: this.state.count,
      img_url: this.state.img_url,
      cup_type: this.state.cup_type,
      size: this.state.size

      // size: size,
      // cup_type: cup_type
    };
    if (!getToken) {
      const totalData = [Data];
      window.localStorage.setItem("data", JSON.stringify(totalData));
    }
    if (getToken) {
      let addData = JSON.parse(localStorage.getItem("data"));
      addData.push(Data);
      window.localStorage.setItem("data", JSON.stringify(addData));
    }
  };

  render() {
    console.log("원래 데이터", this.state.data);
    return (
      <MainLayout>
        <DetailMenuTiket
          menuName={this.state.name}
          engName={this.state.english_name}
          price={numberWithCommas(this.state.price * this.state.count)}
          imgSrc={this.state.img_url}
          count={this.state.count}
          plusClick={this.countPlusClick}
          minusClick={this.countMinusClick}
          text={this.state.condition}
        />
        <div className="detail_sub_box">
          <CupPickContainBox
            style={
              this.state.menu !== "drink"
                ? { display: "none" }
                : { display: "block" }
            }
            onCreate={this.cupValueCheck}
          />

          <SizeSelectBox
            item={[
              { value: "short", id: 0 },
              { value: "tall", id: 1 },
              { value: "grande", id: 2 },
              { value: "venti", id: 3 }
            ]}
            data={this.state.data}
            onCreate={this.handleCreate}
            style={
              this.state.menu !== "drink"
                ? { display: "none" }
                : { display: "block" }
            }
          />
          <div className="menu_order_box">
            <div className="menu_order_btn" onClick={this.orderClick}>
              주문하기
            </div>

            <div className="menu_shopping_cart_" onClick={this.orderClick}>
              담기
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default DetailMenu;

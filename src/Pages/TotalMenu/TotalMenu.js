import React from "react";
import "./TotalMenu.scss";
import MainLayout from "Layouts/MainLayout";
import CategoryButton from "Components/CategoryButton";
import MenuTicket from "Components/MenuTicket";
import FixedFooter from "Components/FixedFooter";
import { Router, Route } from "react-router-dom";
import numberWithCommas from "Util/numberWithCommas";
import API_URL_MENU from "../../Config/Config";

class TotalMenu extends React.Component {
  state = {
    id: 1,
    products: [],
    myData: [],
    detailMenu: [],
    menu: "drink",
    id: 0
  };

  componentDidMount() {
    fetch("http://10.58.0.25:8000/product", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(products => products.json())
      .then(products => {
        console.log(products);
        this.setState({
          products: products.products,
          myData: products.products[0].menu,
          detailMenu: products.products[0].menu[0].drink
        });
      });
  }

  handleClick = a => {
    if (a === 1) {
      this.setState({
        menu: "drink"
      });
    }
    if (a === 2) {
      this.setState({
        menu: "food"
      });
    }
    if (a === 3) {
      this.setState({
        menu: "stuff"
      });
    }
    if (a === 4) {
      this.setState({
        detailMenu: this.state.products[3].cake,
        menu: "cake"
      });
    }

    this.setState(
      {
        id: a.toString(),
        myData: this.state.products[a - 1].menu
      },
      () => {
        console.log(this.state.menu);
      }
    );
  };

  detailClick = a => {
    const fillter = obj => {
      if (obj.drink.length !== 0) {
        return obj.drink;
      } else if (obj.foods.length !== 0) {
        return obj.foods;
      } else if (obj.stuff.length !== 0) {
        return obj.stuff;
      }
    };

    for (let i = 0; i < this.state.myData.length; i++) {
      if (this.state.myData[i].id === a) {
        this.setState({
          detailMenu: fillter(this.state.myData[i])
        });
      }
    }
  };

  fillterPrice = obj => {
    if (obj.price) {
      return obj.price;
    }
    if (obj.oz_price !== 0) {
      return obj.oz_price;
    } else if (obj.short_price !== 0) {
      return obj.short_price;
    } else if (obj.tall_price !== 0) {
      return obj.tall_price;
    } else if (obj.venti_price !== 0) {
      return obj.venti_price;
    }
  };

  pageChangeClick = e => {
    this.setState(
      {
        id: e
      },
      () => {
        this.props.history.push({
          pathname: "./detailmenu",
          state: {
            id: this.state.id,
            menu: this.state.menu
          }
        });
      }
    );
  };

  render() {
    return (
      <MainLayout>
        <div className="total_menu_category_box">
          {this.state.products.map((el, idx) => {
            return (
              <CategoryButton
                className="total_menu_category_btn"
                hoverClass="total_mene_btn_hover_bar"
                onClick={e => {
                  this.handleClick(el.id);
                }}
              >
                {el.name}
              </CategoryButton>
            );
          })}
        </div>
        <div className="total_menu_category_box">
          {this.state.myData.map((el, idx) => {
            return (
              <CategoryButton
                className="menu_category_btn"
                hoverBox="mene_btn_hover_box"
                onClick={e => {
                  this.detailClick(el.id);
                }}
              >
                {el.name}
              </CategoryButton>
            );
          })}
        </div>
        <div>
          {this.state.detailMenu.map((el, idx) => {
            return (
              <MenuTicket
                menuName={el.name}
                engName={el.english_name}
                price={numberWithCommas(this.fillterPrice(el)) + "원"}
                imgSrc={el.img_url}
                onClick={() => {
                  this.pageChangeClick(el.id);
                }}
              >
                {el.name}
              </MenuTicket>
            );
          })}
        </div>
        <FixedFooter />
      </MainLayout>
    );
  }
}

export default TotalMenu;

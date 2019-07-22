import React from "react";
import "./TotalMenu.scss";
import MainLayout from "Layouts/MainLayout";
import CategoryButton from "Components/CategoryButton";
import MenuTicket from "Components/MenuTicket";
import { Link } from "react-router-dom";

const sampleData = [
  {
    categoryName: "음료",
    categoryId: 1,
    subCategorys: [
      {
        subCategoryName: "콜드브루",
        subCategoryId: 1
      },
      {
        subCategoryName: "에스프레소",
        subCategoryId: 2
      },
      {
        subCategoryName: "리저브",
        subCategoryId: 3
      },
      {
        subCategoryName: "에스프레소",
        subCategoryId: 4
      },
      {
        subCategoryName: "야이야이",
        subCategoryId: 5
      },
      {
        subCategoryName: "에스프레소",
        subCategoryId: 6
      }
    ]
  },
  {
    categoryName: "푸드",
    categoryId: 2,
    subCategorys: [
      {
        subCategoryName: "케익",
        subCategoryId: 1
      },
      {
        subCategoryName: "쿠키",
        subCategoryId: 2
      }
    ]
  }
];

const myData = {};
sampleData.map((el, idx) => {
  // console.log(el);

  myData[el.categoryId] = el.subCategorys;
  // console.log(myData);
});

class TotalMenu extends React.Component {
  state = {
    id: 0
  };

  componentDidMount() {
    this.setState({ id: 1 });
  }

  handleClick = a => {
    this.setState({ id: a.toString() });
    // console.log(a);
  };

  render() {
    // console.log(myData);
    // console.log(this.state.id);

    return (
      <MainLayout>
        <div className="total_menu_category_box">
          {sampleData.map((el, idx) => {
            return (
              <CategoryButton
                className="total_menu_category_btn"
                hoverClass="total_mene_btn_hover_bar"
                onClick={e => {
                  this.handleClick(el.categoryId);
                }}
              >
                {el.categoryName}
              </CategoryButton>
            );
          })}
        </div>
        <div className="total_menu_category_box">
          {myData[this.state.id] &&
            Array.isArray(myData[this.state.id]) &&
            myData[this.state.id].map((el, idx) => {
              return (
                <CategoryButton
                  className="menu_category_btn"
                  hoverBox="mene_btn_hover_box"
                >
                  {el.subCategoryName}
                </CategoryButton>
              );
            })}
        </div>
        <div>
          <Link to="./DetailMenu">
            <MenuTicket
              menuName="돌체 콜드 브루"
              engName="Dolce Cold Brew"
              price="4,100원"
              imgSrc="http://image.istarbucks.co.kr/upload/store/skuimg/2019/04/[9200000002081]_20190409153909859.jpg"
            />
          </Link>
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
      </MainLayout>
    );
  }
}

export default TotalMenu;

import React from "react";
import "./TotalMenu.scss";
import MainLayout from "Layouts/MainLayout";
import CategoryButton from "Components/CategoryButton";
import MenuTicket from "Components/MenuTicket";

class TotalMenu extends React.Component {
  render() {
    return (
      <MainLayout>
        <div className="total_menu_category_box">
          <CategoryButton
            className="total_menu_category_btn"
            hoverClass="total_mene_btn_hover_bar"
          >
            음료
          </CategoryButton>
          <CategoryButton className="total_menu_category_btn">
            푸드
          </CategoryButton>
          <CategoryButton className="total_menu_category_btn">
            상품
          </CategoryButton>
          <CategoryButton className="total_menu_category_btn">
            홀케이크 예약
          </CategoryButton>
        </div>
        <div className="total_menu_category_box">
          <CategoryButton
            className="menu_category_btn"
            hoverBox="mene_btn_hover_box"
          >
            NEW
          </CategoryButton>
          <CategoryButton
            className="menu_category_btn"
            hoverBox="mene_btn_hover_box"
          >
            추천
          </CategoryButton>
          <CategoryButton
            className="menu_category_btn"
            hoverBox="mene_btn_hover_box"
          >
            콜드 브루
          </CategoryButton>
          <CategoryButton
            className="menu_category_btn"
            hoverBox="mene_btn_hover_box"
          >
            리저브
          </CategoryButton>
        </div>
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
      </MainLayout>
    );
  }
}

export default TotalMenu;

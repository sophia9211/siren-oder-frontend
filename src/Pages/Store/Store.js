import React, { Component } from "react";
import "./Store.scss";
import { ICON } from "Config/Config.js";
import "./Overlay";
import HeaderDetail from "Components/Header/HeaderDetail";
import SelectBox from "Components/SelectBox";
import { ADDRESS } from "Config/Config";
// import Overlay from "./Overlay";
import { arrayExpression } from "@babel/types";
import { get } from "utils/api";
import { API_URLSEC } from "../../Config/Config";

class Store extends Component {
  state = {
    cityInfo: [],
    gunguInfo: "",
    locationInfo: "",
    lists: [1, 2, 3]
  };

  componentDidMount = async () => {
    this.getCity();

    var mapContainer = document.getElementById("map"), // 지도의 중심좌표
      mapOption = {
        center: new window.kakao.maps.LatLng(37.500701, 127.050667), // 지도의 중심좌표
        level: 5 // 지도의 확대 레벨
      };
    var map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    var positions = [
      {
        content: "<div>카카오</div>",
        latlng: new window.kakao.maps.LatLng(37.500901, 127.050467)
      },
      {
        content: "<div>생태연못</div>",
        latlng: new window.kakao.maps.LatLng(37.504301, 127.050267)
      },
      {
        content: "<div>텃밭</div>",
        latlng: new window.kakao.maps.LatLng(37.500601, 127.058067)
      },
      {
        content: "<div>근린공원</div>",
        latlng: new window.kakao.maps.LatLng(37.497001, 127.050167)
      }
    ];

    // 커스텀 오버레이에 표시할 컨텐츠 입니다
    // 커스텀 오버레이는 아래와 같이 사용자가 자유롭게 컨텐츠를 구성하고 이벤트를 제어할 수 있기 때문에
    // 별도의 이벤트 메소드를 제공하지 않습니다
    var content =
      '<div class="wrap">' +
      '    <div class="info">' +
      '        <div class="title">' +
      "            카카오 스페이스닷원" +
      '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      "        </div>" +
      '        <div class="body">' +
      '            <div class="img">' +
      '                <img src="http://cfile181.uf.daum.net/image/250649365602043421936D" width="73" height="70">' +
      "           </div>" +
      '            <div class="desc">' +
      '                <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>' +
      '                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>' +
      '                <div><a href="http://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>' +
      "            </div>" +
      "        </div>" +
      "    </div>" +
      "</div>";

    // 지도에 마커를 표시합니다
    for (var i = 0; i < positions.length; i++) {
      var marker = new window.kakao.maps.Marker({
        map: map,
        position: positions[i].latlng,
        clickable: true
      });
      // 마커 위에 커스텀오버레이를 표시합니다
      // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
      // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
      window.kakao.maps.event.addListener(marker, "click", function() {
        console.log(positions[i]);
        window.overlay = new window.kakao.maps.CustomOverlay({
          content: content,
          map: map,
          position: positions[i].latlng.getPosition()
        });
        window.overlay.setMap(map);
        console.log(1);
      });
    }
    //커스텀 오버레이를 닫기 위해 호출되는 함수입니다
    window.closeOverlay = function() {
      window.overlay.setMap(null);
    };
  };

  componentDidUpdate = async (previousProps, previousState) => {
    const { cityNum, gunguNum } = this.state;

    if (cityNum && previousState.cityNum !== this.state.cityNum) {
      let getData = await fetch(ADDRESS + "store/gungu/" + cityNum);
      let gungu = await getData.json();

      this.setState({
        gunguInfo: gungu
      });
    }

    if (gunguNum && previousState.gunguNum !== this.state.gunguNum) {
      let getData = await fetch(ADDRESS + "store/shop/" + gunguNum);
      let getLocation = await getData.json();
      this.setState({
        locationInfo: getLocation
      });
    }
  };

  getCity = async () => {
    let getData = await fetch(ADDRESS + "store/sido");
    let getCity = await getData.json();
    this.setState({
      cityInfo: getCity
    });
  };

  handleSelectedChange = e => {
    const selectValue = e.target.value;
    const name = e.target.name;
    console.log(name, selectValue);
    this.setState({
      [name]: selectValue
    });
  };

  render() {
    return (
      <div className="store">
        <HeaderDetail>매장 검색</HeaderDetail>
        <div className="select_wraper">
          <SelectBox
            selectName="cityNum"
            locationList={this.state.cityInfo}
            handleSelectedChange={this.handleSelectedChange}
          />
          <SelectBox
            selectName="gunguNum"
            locationList={this.state.gunguInfo}
            handleSelectedChange={this.handleSelectedChange}
          />
          <SelectBox
            selectName="where_position"
            locationList={this.state.locationInfo}
            handleSelectedChange={this.handleSelectedChange}
          />
        </div>
        <button className="select_btn" onClick={this.searchStore}>
          검색
        </button>
        <div id="map"></div>
        <ul>
          {/* {this.state.lists.map(el => {
            return (
              <li>
                <div>
                  <div className="store_img">
                    <img src={img} alt="매장이미지" />
                  </div>
                  <div className="store_flex">
                    <h4>{name}</h4>
                    <p>{address}</p>
                    <p>{location}</p>
                  </div>
                </div>
              </li>
            );
          })} */}
        </ul>
      </div>
    );
  }
}
export default Store;

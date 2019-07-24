import React, { Component } from "react";
import "./Store.scss";
import HeaderDetail from "Components/Header/HeaderDetail";
import SelectBox from "Components/SelectBox";
import StorePortal from "Components/StorePortal";
import StoreModal from "Components/StorePortal/StoreModal";
import { ADDRESS, ICON } from "Config/Config";

class Store extends Component {
  state = {
    cityInfo: [],
    gunguInfo: "",
    locationInfo: "",
    modal: false
  };

  componentDidMount = async () => {
    this.getCity();

    var mapContainer = document.getElementById("map"), // 지도의 중심좌표
      mapOption = {
        center: new window.kakao.maps.LatLng(37.500701, 127.050667), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
      };
    var map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
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

  getMap = () => {
    var positions = this.state.resultStore.map(ele => {
      return {
        info: ele,
        latlng: new window.kakao.maps.LatLng(ele.lat, ele.lng)
      };
    });
    var imageSrc = ICON,
      // 마커이미지의 주소입니다
      imageSize = new window.window.kakao.maps.Size(30, 30),
      // 마커이미지의 크기입니다
      imageOption = {
        offset: new window.window.kakao.maps.Point(27, 69)
      }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage = new window.kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );

    var mapContainer = document.getElementById("map"), // 지도의 중심좌표
      mapOption = {
        center: new window.kakao.maps.LatLng(
          positions[0].latlng.Ha,
          positions[0].latlng.Ga
        ), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
      };
    var map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 커스텀 오버레이에 표시할 컨텐츠 입니다
    // 커스텀 오버레이는 아래와 같이 사용자가 자유롭게 컨텐츠를 구성하고 이벤트를 제어할 수 있기 때문에
    // 별도의 이벤트 메소드를 제공하지 않습니다

    // 지도에 마커를 표시합니다
    for (var i = 0; i < positions.length; i++) {
      const markerInfo = positions[i].info;

      let marker = new window.kakao.maps.Marker({
        map: map,
        position: positions[i].latlng,
        image: markerImage,
        clickable: true
      });

      window.kakao.maps.event.addListener(marker, "click", function() {
        var overlay = new window.kakao.maps.CustomOverlay({
          content:
            '<div class="wrap">' +
            '    <div class="info">' +
            '        <div class="title">' +
            markerInfo.name +
            '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
            "        </div>" +
            '        <div class="body">' +
            '            <div class="img">' +
            '                <img src="http://cfile181.uf.daum.net/image/250649365602043421936D" width="73" height="70">' +
            "           </div>" +
            '            <div class="desc">' +
            '                <div class="ellipsis">' +
            markerInfo.address +
            "</div>" +
            '                <div class="jibun ellipsis">Fax : ' +
            markerInfo.fax_number +
            "</div>" +
            "                <div>Tel : " +
            markerInfo.telephone +
            "</div>" +
            "            </div>" +
            "        </div>" +
            "    </div>" +
            "</div>",
          map: map,
          position: marker.getPosition()
        });
        overlay.setMap(map);
        window.closeOverlay = function() {
          overlay.setMap(null);
        };
      });
    }

    // 마커 위에 커스텀오버레이를 표시합니다
    // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
    // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다

    //커스텀 오버레이를 닫기 위해 호출되는 함수입니다
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
    // console.log(name, selectValue);
    this.setState({
      [name]: selectValue
    });
  };

  searchStore = () => {
    const { locationInfo, where_position } = this.state;
    if (!locationInfo) {
      alert("구/군까지 선택바랍니다.");
    } else if (!where_position) {
      this.setState(
        {
          resultStore: locationInfo
        },
        () => {
          this.getMap();
        }
      );
    } else {
      locationInfo.forEach(ele => {
        if (ele.id === Number(where_position)) {
          this.setState(
            {
              resultStore: [ele]
            },
            () => {
              this.getMap();
            }
          );
        }
      });
    }
  };
  getDistance = array => {
    var lat1 = array[0][0];
    var lng1 = array[0][1];
    var lat2 = array[1][0];
    var lng2 = array[1][1];

    function deg2rad(deg) {
      return deg * (Math.PI / 180);
    }
    var r = 6371; //지구의 반지름(km)
    var dLat = deg2rad(lat2 - lat1);
    var dLon = deg2rad(lng2 - lng1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = r * c; // Distance in km
    if (d < 1) {
      return Math.round(d * 1000) + "m";
    }
    return d.toFixed(1) + "km";
  };

  handleOpenModal = ele => {
    this.setState({
      modal: true,
      modalInfo: ele
    });
  };
  handleCloseModal = () => {
    this.setState({
      modal: false
    });
  };

  render() {
    return (
      <div className="store">
        <HeaderDetail link="/">매장 검색</HeaderDetail>
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
        <ul className="lists_wraper">
          {this.state.resultStore &&
            this.state.resultStore.map(ele => {
              return (
                <li
                  key={ele.id}
                  className="store_lists"
                  onClick={() => this.handleOpenModal(ele)}
                >
                  <div className="store_container">
                    <div className="store_img">
                      {/* <img src={ele.} alt="매장이미지" /> */}
                    </div>
                    <div className="store_flex">
                      <h4>{ele.name}</h4>
                      <p>{ele.address}</p>
                      <p className="location">
                        {this.getDistance([
                          [37.500701, 127.050667],
                          [ele.lat, ele.lng]
                        ])}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          {/* <li onClick={this.handleOpenModal}>123</li>
          {this.state.modal && (
            <StorePortal>
              <StoreModal
                onClick={this.handleCloseModal}
                // name={ele.name}
                // address={ele.address}
                // img={ele.img}
              />
            </StorePortal>
          )} */}
        </ul>
        {this.state.modal && (
          <StorePortal>
            <StoreModal
              onClick={this.handleCloseModal}
              name={this.state.modalInfo.name}
              address={this.state.modalInfo.address}
              // img={ele.img}
            />
          </StorePortal>
        )}
      </div>
    );
  }
}
export default Store;

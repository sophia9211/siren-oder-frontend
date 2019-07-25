import React from "react";
import "./DetailMenuTiket.scss";
import ModalPortal from "Components/MenuModal/ModalPortal";
import MenuModal from "Components/MenuModal/MenuModal";

class DetailMenuTiket extends React.Component {
  state = {
    modal: false
  };

  handleOpenModal = () => {
    this.setState({
      modal: true
    });
  };
  handleCloseModal = () => {
    this.setState({
      modal: false
    });
  };

  render() {
    return (
      <div className={"detail_tiket_contain_box"}>
        <div
          style={{
            backgroundImage: `url("${this.props.imgSrc}")`
          }}
          className="img_detail_tiket"
        >
          <img className="img_detail_none" src={this.props.imgSrc} />
          <span
            className="img_size_up_btn"
            onClick={this.handleOpenModal}
          ></span>
          {this.state.modal && (
            <ModalPortal>
              <MenuModal
                onClick={this.handleCloseModal}
                imgSrc={this.props.imgSrc}
                menuName={this.props.menuName}
                engName={this.props.engName}
                detailText={this.props.text}
              />
            </ModalPortal>
          )}
        </div>
        <div className="detail_tiket_name_box">
          <div className="detail_tiket_name">{this.props.menuName}</div>
          <div className="detail_tiket_eng_name">{this.props.engName}</div>
          <div className="detail_tiket_price">{this.props.price}원</div>
          <div className="count_contain_box">
            <div className="menu_count_btn" onClick={this.props.minusClick}>
              -
            </div>
            <div className="menu_count">{this.props.count}</div>
            <div className="menu_count_btn" onClick={this.props.plusClick}>
              +
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailMenuTiket;

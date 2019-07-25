import React from "react";
import "./SizeSelectBox.scss";

class SizeSelectBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item || [],
      showItems: false,
      selectedItem: this.props.item && this.props.item[0],
      value: ""
    };
  }

  dropDown = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems
    }));
  }; // prevState 이거 조금 이해 안됨 물어보기 선언 안되었는데 setState 인자로 뭐를 받는지 궁금.

  selectedItem = item =>
    this.setState(
      {
        selectedItem: item,
        showItems: false,
        value: item.value
      },
      () => {
        this.props.onCreate(this.state.value);
      }
    );

  render() {
    return (
      <form>
        <div className="select_box_box">
          <div className="select_box_container" onClick={this.dropDown}>
            <div className="selected_item">
              {!this.state.selectedItem
                ? "size"
                : this.state.selectedItem.value}
            </div>
            <div
              className={`${
                this.state.showItems
                  ? "select_box_arrow_up"
                  : "select_box_arrow_down"
              }`}
            />
          </div>
          <div
            style={{ display: this.state.showItems ? "block" : "none" }}
            className="select_box_item_div"
          >
            {this.state.item.map(item => (
              <div
                key={item.id}
                onClick={() => this.selectedItem(item)}
                className={
                  this.state.selectedItem === item ? "selected" : "selected"
                }
              >
                {item.value}
              </div>
            ))}
          </div>
        </div>
      </form>
    );
  }
}
export default SizeSelectBox;

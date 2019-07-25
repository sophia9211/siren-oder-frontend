import React, { Component } from "react";
import "./Checkbox.scss";

class Checkbox extends Component {
  render() {
    const { className, agree, check, children } = this.props;
    return (
      <div className={className}>
        <label onChange={agree}>
          <input type="checkbox" checked={check} onChange={agree} />
          {/*input checked 사용하는데 onChange 없으니 에러 생김...*/}
          {children}
        </label>
      </div>
    );
  }
}

export default Checkbox;

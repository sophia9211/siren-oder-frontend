import React, { Component } from "react";
import "./Signup.scss";
import { Link } from "react-router-dom";

class Signup extends Component {
  state = {
    check_all: false,
    check_fir: false,
    check_sec: false,
    check_thir: false
  };

  clickCheckAll = e => {
    this.setState({
      check_all: !this.state.check_all,
      check_fir: !this.state.check_fir,
      check_sec: !this.state.check_sec,
      check_thir: !this.state.check_thir
    });
  };

  clickCheckFir = () => {
    this.setState(
      {
        check_fir: !this.state.check_fir
      },
      () => {
        if (
          this.state.check_fir &&
          this.state.check_sec &&
          this.state.check_thir
        ) {
          this.setState({
            check_all: !this.state.check_all
          });
        }
      }
    );
    if (this.state.check_all) {
      this.setState({
        check_all: !this.state.check_all
      });
    }
  };

  clickCheckSec = () => {
    this.setState(
      {
        check_sec: !this.state.check_sec
      },
      () => {
        if (
          this.state.check_fir &&
          this.state.check_sec &&
          this.state.check_thir
        ) {
          this.setState({
            check_all: !this.state.check_all
          });
        }
      }
    );
    if (this.state.check_all) {
      this.setState({
        check_all: !this.state.check_all
      });
    }
  };

  clickCheckThir = () => {
    this.setState(
      {
        check_thir: !this.state.check_thir
      },
      () => {
        if (
          this.state.check_fir &&
          this.state.check_sec &&
          this.state.check_thir
        ) {
          this.setState({
            check_all: !this.state.check_all
          });
        }
      }
    );
    if (this.state.check_all) {
      this.setState({
        check_all: !this.state.check_all
      });
    }
  };

  render() {
    return (
      <div className="signup_container">
        <div className="signup_container_main">
          <Link to="/login" className="signup_close_btn">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAPFBMVEX///8AAAD19fWIiIjY2NhPT08aGho0NDTh4eFfX1/c3NwjIyPx8fH6+voUFBSGhoZubm7MzMw7OztkZGTV3mutAAAC8UlEQVR4nO3aa1LbQBBFYWREcLCUF/vfa9wOIX5opBlNp6bv1PkWoNLl/AHUT08AAAAAAAAAAAAAAAAAAAAAAABA9w6tX+A/m799933g4WX2fWCd6TQMz54PPHwZTpPnA+vM532uCw+v5+edwjScLvscF577mSgN5499bgsv/YYwDafPfU4LP/pFaThf7XNZ+NkvRsPpZp/Dwqt+ERrOd/uqF970a9/wvl/1wrt+rRsu7ata+NDvsrDdr4Hj0r6KhQv9zA/Pdy7ju3Cx3zC8+L5zmaPjwkS/r97vXMavYcR+xqthzH7Gp2HUfsajYdx+pr5h5H6mtmHsfqauYfR+pqZh/H5mf0OFfmZvQ41+Zl9DlX5mT0Odfqa8oVI/U9pQq58pa6jWz5Q01Otn8hsq9jO5DTX7mbyGqv1MTkPdfma7oXI/s9VQu59Zb6jez6w11O9n0g176GdSDfvoZxINl/fJ9TOJhp30M4mGnfQzmQ1F+5mshrL9TEZD4X5ms6F0P7PRULyfWW0o38+sNOygn0k27KKf+bm877X1e3k5/EoUdL2Cbifx90M3CxN//3WzcKVfFwtX+3WwcKOf/MLNfuILM/pJL8zqJ7wws5/swux+ogsT/d7fOlmY/v+19yV7G2v/v/a8825l/fuDfsOt7w/qDbe/H2k3zPl+pNww7/ufbsPc73+qDfO/32o2LPl+q9iw7Pu7XsPS7+9qDcvvJ7Qa7rmfUGq47/5Fp+He+xeVhvvvlzQa1twvKTSsuz+L37D2/ix6w/r7wdgNPe4HIzf0uf+M29Dr/jNqQ7/73ZgNPe93Izb0vb+O13Byvr8O13D5Q0rF/dJyw9HvjUstLay6P1tq+Ob1tns8Lqy8P3ts2HTf48Lq+8H7ho333S90uB8cY+27Xehy/3mMte96odP95xhr37+Fbve7x1j7/i50vN8dY+37s9D1/voYa58tdL6/HmPtO//IW78AAAAAAAAAAAAAAAAAAAAAAAAAAMDHb7VkGT+momKYAAAAAElFTkSuQmCC" />
          </Link>
          <div className="signup_logo">
            <img src="http://img.khan.co.kr/news/2017/09/20/l_2017092001002683700218211.jpg" />
          </div>
          <div className="signup_text">
            <p>
              고객님 <br /> 환영합니다!
            </p>
          </div>
          <div className="signup_checkbox">
            <div className="check_all">
              <label onChange={this.clickCheckAll}>
                <input type="checkbox" checked={this.state.check_all} />
                약관 전체동의
              </label>
            </div>

            <div>
              <label onChange={this.clickCheckFir}>
                <input type="checkbox" checked={this.state.check_fir} />
                이용약관 동의(필수)
              </label>
            </div>

            <div>
              <label onChange={this.clickCheckSec}>
                <input type="checkbox" checked={this.state.check_sec} />
                개인정보 수집 및 이용동의(필수)
              </label>
            </div>

            <div>
              <label onChange={this.clickCheckThir}>
                <input type="checkbox" checked={this.state.check_thir} />
                E-mail 및 SMS 광고성 정보 수신동의(선택)
              </label>
            </div>
          </div>
          <div className="signup_btn">
            <Link to="/signup/second">다음</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;

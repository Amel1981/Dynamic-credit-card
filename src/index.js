import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
/****************************************/
function Valid_number(number) {
  var number = number.substring(0, 19).replace(/\D/gi, "");
  var tab_number = [];
  for (var i = 0; i < number.length; i += 4) {
    tab_number.push(number.slice(i, i + 4));
  }
  return tab_number.join(" ");
}
/****************************************/
function Valid_Name(name) {
  var name = name.substring(0, 18).replace(/[^A-Z]/gi, "");
  var tab_name = [];
  for (var i = 0; i < name.length; i += 6) {
    tab_name.push(name.toUpperCase().slice(i, i + 6));
  }
  return tab_name.join(" ");
}
/****************************************/
function Valid_Date(date) {
  var date = date.substring(0, 5).replace(/\D/gi, "");
  var tab_dt = [];
  for (var i = 0; i < date.length; i += 2) {
    tab_dt.push(date.slice(i, i + 2));
  }
  return tab_dt.join("/");
}
/***************************************************/
class DynamicCreditCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CrdtCardNumber: "0000 0000 0000 0000 ",
      CrdtCardName: "Your name ",
      Dte: "00/00"
    };
    this.handleValid_number = this.handleValid_number.bind(this);
    this.handleValid_Name = this.handleValid_Name.bind(this);
    this.handleValid_Date = this.handleValid_Date.bind(this);
  }

  handleValid_number(event) {
    this.setState({ CrdtCardNumber: Valid_number(event.target.value) });
  }
  handleValid_Name(event) {
    this.setState({ CrdtCardName: Valid_Name(event.target.value) });
  }
  handleValid_Date(event) {
    this.setState({ Dte: Valid_Date(event.target.value) });
  }

  render() {
    return (
      <div>
        <h2 sstyle="text-align:center;">
          || Welcome to your private space credit card ||
        </h2>
        <div className="Creditcard">
          <div className="MainCard">
            <div className="title-crdt-crd">
              <h1>Credit Card</h1>
            </div>
            <div className="chips">
              <img
                src="https://www.thebeneficial.com/portals/beneficialbankwebsite/images/chip.png"
                className="chips-img"
              />
            </div>
            <div className="numbervisacard">
              <span className="span-number">{this.state.CrdtCardNumber}</span>
            </div>
            <div className="dateofvalidate">
              <div className="thru">
                Valid <br /> THRU
              </div>
              <div className="date">{this.state.Dte}</div>
            </div>
            <div className="mainvisacard" />
            <div className="textvisacard">
              <p>
                5422
                <br />
                <span>{this.state.CrdtCardName}</span>
              </p>
            </div>
            <div className="visacard">
              <img
                src="https://i.ebayimg.com/images/g/oLoAAOxyzHxRKY87/s-l300.jpg"
                className="mastercard"
              />
            </div>
          </div>
          <div className="FormCard">
            <div className="form-validate">
              <div className="labelpart">
                <label className="label-name">Name: </label>
                <input
                  type="text"
                  className="number-card"
                  value={this.state.CrdtCardName}
                  onChange={this.handleValid_Name}
                />
              </div>
              <div className="labelpart">
                <label className="label-name">Card-number: </label>
                <input
                  type="text"
                  className="name-card"
                  value={this.state.CrdtCardNumber}
                  onChange={this.handleValid_number}
                />
              </div>
              <div className="labelpart">
                <label className="label-name">Date: </label>
                <input
                  type="text"
                  className="date-card"
                  value={this.state.Dte}
                  onChange={this.handleValid_Date}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<DynamicCreditCard />, document.body);

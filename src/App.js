import "./App.css";
import React, { Component } from "react";
import PersonalInfo from "./personalInfo";

class App extends Component {
  constructor() {
    super();

    this.state = {
      personalInfo: { name: "", email: "", phone: "" },
      personalInfoSubmitted: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitPersonalInfo = this.onSubmitPersonalInfo.bind(this);
  }

  handleChange(e) {
    this.setState({
      personalInfo: {
        ...this.state.personalInfo,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.personalInfo)
  }

  onSubmitPersonalInfo(e) {
    e.preventDefault();
    this.setState({
      personalInfoSubmitted: true,
    });
  }

  render() {
    let nameInfo;
    if (this.state.personalInfoSubmitted) {
      nameInfo = (
        <div className="personalInfo">
          <p className="name">{this.state.personalInfo.name}</p>
          <p className="email">{this.state.personalInfo.email}</p>
          <p className="phone">{this.state.personalInfo.phone}</p>
        </div>
      );
    }
    return (
      <div className="App">
        <div className="form">
          <PersonalInfo
            onChangeHandler={this.handleChange}
            onButtonClicked={this.onSubmitPersonalInfo}
          />
        </div>
        <div className="Resume">{nameInfo}</div>
      </div>
    );
  }
}
export default App;

import React, { Component } from "react";

class PersonalInfo extends Component {
  render() {
    return (
      <div className="personalInfoForm">
        <form>
          <div className="input">
            <label htmlFor="name">Your name:</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={this.props.onChangeHandler}
            />
          </div>
          <div className="input">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={this.props.onChangeHandler}
            />
          </div>
          <div className="input">
            <label htmlFor="phone">Phone number:</label>
            <input
              type="number"
              name="phone"
              id="phone"
              onChange={this.props.onChangeHandler}
            />
          </div>
          <div className="input">
            <label htmlFor="phone">Description:</label>
            <input
              type="text"
              name="description"
              id="description"
              onChange={this.props.onChangeHandler}
            />
          </div>
          <button onClick={this.props.onButtonClicked}>Submit</button>
        </form>
      </div>
    );
  }
}
export default PersonalInfo;

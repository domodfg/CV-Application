import "./App.css";
import React, { Component } from "react";
import PersonalInfo from "./components/personalInfo.js";
import EducationForm from "./components/educationForm.js";
import {
  DisplayEducation,
  DisplayEducationForm,
} from "./components/displayEducation.js";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      personalInfo: { name: "", email: "", phone: "" },
      personalInfoSubmitted: "",
      education: [],
    };
    this.handleEduChange = this.handleEduChange.bind(this);
    this.handlePersonal = this.handlePersonal.bind(this);
    this.onSubmitPersonalInfo = this.onSubmitPersonalInfo.bind(this);
    this.addEduForm = this.addEduForm.bind(this);
    this.onDeleteEduForm = this.onDeleteEduForm.bind(this);
  }

  handlePersonal(e) {
    this.setState({
      ...this.state,
      personalInfo: {
        ...this.state.personalInfo,
        [e.target.name]: e.target.value,
      },
    });
  }

  onSubmitPersonalInfo(e) {
    e.preventDefault();
    this.setState({
      ...this.state,
      personalInfoSubmitted: true,
    });
  }

  handleEduChange(e) {
    const targeted = e.target.name;
    const index = this.state.education.findIndex(
      (element) => element.id === e.target.getAttribute("data")
    );
    let education = [...this.state.education];
    let edited = { ...education[index] };
    edited.info[targeted] = e.target.value;
    education[index] = edited;

    this.setState({
      ...this.state,
      education: education,
    });
  }

  onDeleteEduForm(e) {
    this.setState({
      ...this.state,
      education: this.state.education.filter((obj) => obj.id !== e.target.id),
    });
  }

  addEduForm(e) {
    const uniqueID = uniqid();
    this.setState({
      ...this.state,
      education: this.state.education.concat({
        id: uniqueID,
        form: (
          <EducationForm
            onChangeHandler={this.handleEduChange}
            onDelete={this.onDeleteEduForm}
            key={uniqueID}
            id={uniqueID}
          />
        ),
        info: {
          schoolName: "",
          titleOfStudy: "",
          dateOfStudy: "",
        },
      }),
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
            onChangeHandler={this.handlePersonal}
            onButtonClicked={this.onSubmitPersonalInfo}
          />
          <DisplayEducationForm
            educationForm={this.state.education}
          />
          <button onClick={this.addEduForm}>Add education</button>
        </div>
        <div className="Resume">
          {nameInfo}
          <DisplayEducation education={this.state.education} />
        </div>
      </div>
    );
  }
}
export default App;

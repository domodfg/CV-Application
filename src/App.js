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
      educationForm: [],
      educationInfo: {
        schoolName: "",
        titleOfStudy: "",
        dateOfStudy: "",
        id: uniqid(),
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitPersonalInfo = this.onSubmitPersonalInfo.bind(this);
    this.onSubmitEduInfo = this.onSubmitEduInfo.bind(this);
    this.addEduForm = this.addEduForm.bind(this);
    this.onDeleteEduForm = this.onDeleteEduForm.bind(this);
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      personalInfo: {
        ...this.state.personalInfo,
        [e.target.name]: e.target.value,
      },
      educationInfo: {
        ...this.state.educationInfo,
        [e.target.name]: e.target.value,
        id: this.state.educationInfo.id,
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

  onSubmitEduInfo(e) {
    e.preventDefault();
    if (
      this.state.educationInfo.schoolName !== "" &&
      this.state.educationInfo.titleOfStudy !== "" &&
      this.state.educationInfo.dateOfStudy !== ""
    ) {
      this.setState({
        ...this.state,
        education: this.state.education.concat(this.state.educationInfo),
        educationInfo: {
          schoolName: "",
          titleOfStudy: "",
          dateOfStudy: "",
          id: uniqid(),
        },
      });
    }
  }

  onDeleteEduForm(e) {
    this.setState({
      ...this.state,
      educationForm: this.state.educationForm.filter(function (form, index) {
        return index != e.target.id;
      }),
    });
  }

  addEduForm(e) {
    this.setState({
      ...this.state,
      educationForm: this.state.educationForm.concat(
        <EducationForm
          onChangeHandler={this.handleChange}
          onButtonClicked={this.onSubmitEduInfo}
          educationInfo={this.props.educationInfo}
          onDelete={this.onDeleteEduForm}
          key={uniqid()}
        />
      ),
    });
    console.log(this.state.educationForm);
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
          <DisplayEducationForm
            educationForm={this.state.educationForm}
            onChangeHandler={this.handleChange}
            onButtonClicked={this.onSubmitEduInfo}
            educationInfo={this.state.educationInfo}
            onDelete={this.onDeleteEduForm}
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

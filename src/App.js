import "./App.css";
import React, { Component } from "react";
import PersonalInfo from "./components/personalInfo.js";
import EducationForm from "./components/educationForm.js";
import WorkForm from "./components/workForm.js";
import {
  DisplayEducation,
  DisplayEducationForm,
} from "./components/displayEducation.js";
import { DisplayWork, DisplayWorkForm } from "./components/DisplayWork.js";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      personalInfo: { name: "", email: "", phone: "", description: "" },
      personalInfoSubmitted: "",
      education: [],
      work: [],
    };
    this.handleEduChange = this.handleEduChange.bind(this);
    this.handlePersonal = this.handlePersonal.bind(this);
    this.handleWorkChange = this.handleWorkChange.bind(this);
    this.onSubmitPersonalInfo = this.onSubmitPersonalInfo.bind(this);
    this.addEduForm = this.addEduForm.bind(this);
    this.onDeleteEduForm = this.onDeleteEduForm.bind(this);
    this.addWorkForm = this.addWorkForm.bind(this);
    this.onDeleteWorkForm = this.onDeleteWorkForm.bind(this);
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

  handleWorkChange(e) {
    const targeted = e.target.name;
    const index = this.state.work.findIndex(
      (element) => element.id === e.target.getAttribute("data")
    );
    let work = [...this.state.work];
    let edited = { ...work[index] };
    edited.info[targeted] = e.target.value;
    work[index] = edited;

    this.setState({
      ...this.state,
      work: work,
    });
  }

  onDeleteWorkForm(e) {
    this.setState({
      ...this.state,
      work: this.state.work.filter((obj) => obj.id !== e.target.id),
    });
  }

  addWorkForm(e) {
    const uniqueID = uniqid();
    this.setState({
      ...this.state,
      work: this.state.work.concat({
        id: uniqueID,
        form: (
          <WorkForm
            onChangeHandler={this.handleWorkChange}
            onDelete={this.onDeleteWorkForm}
            key={uniqueID}
            id={uniqueID}
          />
        ),
        info: {
          company: "",
          position: "",
          task: "",
          date: "",
        },
      }),
    });
  }

  render() {
    let nameInfo = <div className="personalInfo"></div>;
    if (this.state.personalInfoSubmitted) {
      nameInfo = (
        <div className="personalInfo">
          <div className="contact">
            <p className="name">{this.state.personalInfo.name}</p>
            <p className="email">{this.state.personalInfo.email}</p>
            <p className="phone">{this.state.personalInfo.phone}</p>
          </div>
          <p className="description">{this.state.personalInfo.description}</p>
        </div>
      );
    }
    return (
      <div className="App">
        <h1>CV generator</h1>
        <div className="form">
          <PersonalInfo
            onChangeHandler={this.handlePersonal}
            onButtonClicked={this.onSubmitPersonalInfo}
          />
          <DisplayEducationForm educationForm={this.state.education} />
          <button onClick={this.addEduForm}>Add education</button>
          <DisplayWorkForm workForm={this.state.work} />
          <button onClick={this.addWorkForm}>Add work experience</button>
        </div>
        <div className="Resume">
          {nameInfo}
          <DisplayEducation education={this.state.education} />
          <DisplayWork work={this.state.work} />
        </div>
      </div>
    );
  }
}
export default App;

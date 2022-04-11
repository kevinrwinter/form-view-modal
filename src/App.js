import React, { Component } from "react";

import Form from "./components/Form";
import View from "./components/View";
import Modal from "./components/Modal";

class App extends Component {
  // Names must match props.firstname in View.js
  state = {
    inputData: {
      firstname: "",
      lastname: "",
      phone: "",
      role: "",
      message: "",
    },
    showPopup: false,
  };

  inputHandler = (e) => {
    this.setState({
      inputData: { ...this.state.inputData, [e.target.name]: e.target.value },
    });
  };

  popupHandler = (e) => {
    e.preventDefault();
    this.setState({ showPopup: !this.state.showPopup });
  };

  closeHandler = () => {
    window.location.reload();
  };

  //
  render() {
    return (
      <div className="App">
        <Form change={this.inputHandler} submit={this.popupHandler} />
        <View
          // firstname={this.state.inputData.firstname}
          // lastname={this.state.inputData.lastname}
          // phone={this.state.inputData.phone}
          // role={this.state.inputData.role}
          // message={this.state.inputData.message}

          {...this.state.inputData}
        />

        {this.state.showPopup && <Modal close={this.closeHandler} {...this.state.inputData} />}
      </div>
    );
  }
}

export default App;

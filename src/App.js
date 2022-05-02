import React, { Component } from "react";
import axios from "axios";

import Form from "./components/Form";
import View from "./components/View";
import Modal from "./components/Modal";
import NotesList from "./components/NotesList";

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
    data: [],
  };

  componentDidMount() {
    axios.get("http://localhost:3010/notes").then((res) => this.setState({ data: res.data }));
  }

  inputHandler = (e) => {
    this.setState({
      inputData: { ...this.state.inputData, [e.target.name]: e.target.value },
    });
  };

  submitHandler = () => {
    axios
      .post("http://localhost:3010/notes", this.state.inputData)
      .then((res) => console.log("res", res))
      .catch((error) => console.log("", error));

    // this.setState({ showPopup: false });
    // window.location.reload();
    this.closeHandler();
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
    console.log(this.state.data);
    return (
      <>
        <div className="input-area">
          <Form change={this.inputHandler} submit={this.popupHandler} />
          <View
            // firstname={this.state.inputData.firstname}
            // lastname={this.state.inputData.lastname}
            // phone={this.state.inputData.phone}
            // role={this.state.inputData.role}
            // message={this.state.inputData.message}

            {...this.state.inputData}
          />
        </div>

        <NotesList data={this.state.data} />

        {this.state.showPopup && (
          <Modal close={this.closeHandler} {...this.state.inputData} submit={this.submitHandler} />
        )}
      </>
    );
  }
}

export default App;

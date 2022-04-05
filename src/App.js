import React, { Component } from "react";

import Form from "./components/Form";
import View from "./components/View";
import Modal from "./components/Modal";

class App extends Component {
  state = {
    firstname: "firstname",
    lastname: "lastname",
    phone: "phone",
    role: "role",
    message: "message",
  };

  inputHandler = (e) => {
    console.log("Something");
    console.log(e.target.value);
  };

  render() {
    return (
      <main>
        <Form />
        <View />
        <Modal />
      </main>
    );
  }
}

export default App;

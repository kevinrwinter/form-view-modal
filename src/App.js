import React, { useState, useEffect } from "react";
import axios from "axios";

import Form from "./components/Form";
import View from "./components/View";
import Modal from "./components/Modal";
import NotesList from "./components/NotesList";
import EditOverlay from "./components/EditOverlay";

const App = () => {
  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    role: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const [data, setData] = useState([]);

  const [updatePopup, setUpdatePopup] = useState(false);

  const [currentNote, setCurrentNote] = useState({});

  // const [change, inputUpdateHandler] = useState()

  useEffect(() => {
    axios.get("http://localhost:3010/notes").then((res) => setData(res.data));
  }, []);

  const inputHandler = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const popupHandler = (e) => {
    e.preventDefault();
    setShowPopup(!showPopup);
  };

  const submitHandler = () => {
    axios
      .post("http://localhost:3010/notes", inputData)
      .then((res) => {
        closeHandler();
      })
      .catch((error) => console.log(error));
  };

  const closeHandler = () => {
    window.location.reload();
  };

  const deleteHandler = (id) => {
    // console.log("delete: ", id);
    axios.delete(`http://localhost:3010/notes/${id}`).then((res) => {
      const notes = data.filter((item) => item.id !== id);
      setData(notes);
    });
  };

  const updateHandler = (item) => {
    // console.log("edit: ", item);
    setUpdatePopup(true);
    setCurrentNote(item);
  };

  const inputUpdateHandler = (event) => {
    setCurrentNote({
      ...currentNote,
      [event.target.name]: event.target.value,
    });
  };

  // ?????
  const updatePutHandler = (id) => {
    axios.put(`http://localhost:3010/notes/${id}`, currentNote).then((res) => console.log(res));
  };

  return (
    <>
      <div className="input-area">
        {updatePopup && (
          <EditOverlay {...currentNote} change={inputUpdateHandler} submit={() => updatePutHandler(currentNote.id)} />
        )}

        <Form change={inputHandler} submit={popupHandler} />
        <View {...inputData} />
      </div>

      {showPopup && <Modal close={closeHandler} {...inputData} submit={submitHandler} />}

      <NotesList data={data} delete={deleteHandler} edit={updateHandler} />
    </>
  );
};

export default App;

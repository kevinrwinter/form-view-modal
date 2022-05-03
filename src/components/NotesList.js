import React from "react";

const NotesList = (props) => {
  return (
    <div className="notes-list">
      <ol>
        {props.data.map((note) => (
          <li key={note.id}>
            <span>{note.firstName}</span> | <span>{note.lastName}</span> | <span>{note.phone}</span> |{" "}
            <span>{note.role}</span> | <span>{note.message}</span>
            <span className="icon-control">
              <i className="fa-solid fa-pen-to-square" onClick={() => props.edit(note)}></i>
            </span>
            <span className="icon-control">
              <i className="fa-solid fa-trash-can" onClick={() => props.delete(note.id)}></i>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default NotesList;

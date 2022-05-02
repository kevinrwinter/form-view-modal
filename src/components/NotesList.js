import React from "react";

const NotesList = (props) => {
  return (
    <div className="notes-list">
      <ol>
        {props.data.map((note) => (
          <li key={note.id}>
            <span>{note.firstName}</span> | <span>{note.lastName}</span> | <span>{note.phone}</span> |{" "}
            <span>{note.role}</span> | <span>{note.message}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default NotesList;

// import React from "react";

function View({ firstName, lastName, phone, role, message }) {
  return (
    <div className="notebook-container">
      {/* <h2>This is your input: </h2> */}
      <div className="notebook">
        <div className="view-block">
          <div className="margin"></div>
          <p>
            Firstname: <span>{firstName}</span>
          </p>
        </div>
        <div className="view-block">
          <div className="margin"></div>
          <p>
            Lastname: <span>{lastName}</span>
          </p>
        </div>
        <div className="view-block">
          <div className="margin"></div>
          <p>
            Phone: <span>{phone}</span>
          </p>
        </div>
        <div className="view-block">
          <div className="margin"></div>
          <p>
            Role: <span>{role}</span>
          </p>
        </div>
        <div className="view-block">
          <div className="margin"></div>
          <p>
            Message: <span>{message}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default View;

// import React from "react";

function View(props) {
  return (
    <div className="notebook-container">
      {/* <h2>This is your input: </h2> */}
      <div className="notebook">
        <div className="view-block">
          <div className="margin"></div>
          <p>
            Firstname: <span>{props.firstname}</span>
          </p>
        </div>
        <div className="view-block">
          <div className="margin"></div>
          <p>
            Lastname: <span>{props.lastname}</span>
          </p>
        </div>
        <div className="view-block">
          <div className="margin"></div>
          <p>
            Phone: <span>{props.phone}</span>
          </p>
        </div>
        <div className="view-block">
          <div className="margin"></div>
          <p>
            Role: <span>{props.role}</span>
          </p>
        </div>
        <div className="view-block">
          <div className="margin"></div>
          <p>
            Message: <span>{props.message}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default View;

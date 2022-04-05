import React from "react";

function View(props) {
  return (
    <div>
      <h2>This is your input: </h2>
      <div className="notebook">
        <div className="view-block">
          <div className="margin"></div>
          <p>
            Firstname: <span></span>
          </p>
        </div>
        <div className="view-block">
          <div className="margin"></div>
          <p>
            Lastname: <span></span>
          </p>
        </div>
        <div className="view-block">
          <div className="margin"></div>
          <p>
            Phone: <span></span>
          </p>
        </div>
        <div className="view-block">
          <div className="margin"></div>
          <p>
            Role: <span></span>
          </p>
        </div>
        <div className="view-block">
          <div className="margin"></div>
          <p>
            Message: <span></span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default View;

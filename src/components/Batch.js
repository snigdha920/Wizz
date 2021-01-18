import React, { useState } from "react";

function Batch(props) {
  return (
    <div className="batch">
      <p>
        <span className="batch-subject">{props.subject}</span>
      </p>
      <div className="batch-details">
        <h5 className="title-left">{props.name}</h5>
        <p className="title-right">Grade: {props.grade}</p>
        <p className="batch-dates">
          <i className="fa fa-calendar"></i>{" "}
          {props.days.map((day, index) => {
            if (index === props.days.length - 1) {
              return day;
            } else return day + ", ";
          })}
        </p>
      </div>
    </div>
  );
}
export default Batch;

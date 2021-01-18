import React, { useState } from "react";

function Assignment(props) {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="assignment">
      <h5 className="title-left">{props.name}</h5>
      <p className="title-right">
        Submitted: <span className="marks">{props.marks}</span>
      </p>
      <p style={{ color: " #40c8e0" }}>{props.subject}</p>
      <p>{readMore ? props.details : props.details.slice(0, 47) + "..."}</p>
      <p className="read-more" onClick={() => setReadMore(!readMore)}>
        Read {readMore ? "Less" : "More"}
      </p>
      <p className="assignment-due-date">{props.dueDate}</p>
    </div>
  );
}
export default Assignment;

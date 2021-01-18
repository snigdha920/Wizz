import React from "react";
import Assignment from "./Assignment";
import assignmentDetails from "./assignmentDetails";

function Assignments() {
  return (
    <div>
      <div className="subheader">
        <h5>
          Assignments{" "}
          <span style={{ color: "#696969", fontSize: "small" }}>
            Recently Submitted
          </span>
        </h5>
      </div>
      {assignmentDetails.map((assignment) => (
        <Assignment
          key={assignment.id}
          name={assignment.name}
          subject={assignment.subject}
          marks={assignment.marks}
          dueDate={assignment.dueDate}
          details={assignment.details}
        />
      ))}
    </div>
  );
}
export default Assignments;

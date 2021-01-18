import React, { useState } from "react";
import batchDetails from "./batchDetails";
import Batch from "./Batch";

function Batches() {
  const [viewAll, setViewAll] = useState(false);
  return (
    <div>
      <div className="subheader">
        <h5 className="title-left">All Batches</h5>
        <p className="title-right">
          Create Batch{" "}
          <i
            className="fa fa-plus-square"
            onClick={() => console.log("Clicked create Batch.")}
          ></i>
        </p>
      </div>
      {viewAll
        ? batchDetails.map((batch) => (
            <Batch
              key={batch.id}
              name={batch.name}
              subject={batch.subject}
              grade={batch.grade}
              days={batch.days}
            />
          ))
        : batchDetails
            .slice(0, Math.min(3, batchDetails.length))
            .map((batch) => (
              <Batch
                key={batch.id}
                name={batch.name}
                subject={batch.subject}
                grade={batch.grade}
                days={batch.days}
              />
            ))}
      <p
        className="view-all"
        onClick={() => {
          setViewAll(!viewAll);
        }}
      >
        View {viewAll ? "Less" : "All"}
      </p>
    </div>
  );
}

export default Batches;

import React from "react";
import Heading from "./Heading";
import UpcomingClasses from "./UpcomingClasses";
import Batches from "./Batches";
import Assignments from "./Assignments";

function Main(props) {
//   console.log(props.location.state);
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-6 col-sm-12 dashboard">
          <Heading
            name={props.givenName}
            imageUrl={props.imageUrl}
          />
          <p>Are you ready to create Batch & Assignments?</p>
          <UpcomingClasses />
          <Batches />
          <Assignments />
        </div>
      </div>
    </div>
  );
}

export default Main;

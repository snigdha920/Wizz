// Heading for the main page
import React from "react";

function Heading(props) {
  return (
    <div className="heading">
      <h1><i className="fa fa-bars" aria-hidden="true"></i> Hi, {props.name} <img src={props.imageUrl} className="profile-img"/></h1>
    </div>
  );
}
export default Heading;

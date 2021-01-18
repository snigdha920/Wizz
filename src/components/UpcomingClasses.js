import React from "react";
import upcomingClasses from "./upcoming-classes.png";

function UpcomingClasses() {
  return (
    <div>
      <h5>Upcoming Classes</h5>
      <img src={upcomingClasses} className="no-upcoming-classes" />
    </div>
  );
}
export default UpcomingClasses;
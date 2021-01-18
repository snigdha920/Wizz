import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return <div>
  <p>Welcome.</p>
  <Link to="/authenticate">Log In or Sign Up</Link>
  </div>;
}

export default Home;
import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import GoogleLogin from "react-google-login";
import wizzLogo from "../wizz.png";

function Authenticate(props) {
  const {isLoggedIn, setIsLoggedIn,error, setError, profileObject, setProfileObject} = props;
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [logIn, setLogIn] = useState(props.isLoggedIn);
  // const [error, setError] = useState(null);
  // const [profileObject, setProfileObject] = useState(null);

  // useEffect(() => {
  //   console.log(isLoggedIn);
  // }, [isLoggedIn]);
  useEffect(() => {
    if (profileObject !== null) {
      // console.log(profileObject);
      setIsLoggedIn(true);
    }
  }, [profileObject]);

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-4 col-sm-12">
          <div className="logo">
            <img src={wizzLogo} className="logo-img"></img>
          </div>
          <div className="sign-in">
            <h1 className="sign-in-title">Sign in</h1>
            <p>Sign in using your Google Account.</p>
            <GoogleLogin
              clientId="49371901320-8a2u0ldp967umqi44phevv8uts1br3rq.apps.googleusercontent.com"
              buttonText="Sign In"
              onSuccess={(response) => {
                setProfileObject(response.profileObj);
              }}
              onFailure={(response) => {
                setError(response.error);
                // console.log("there is an error " + JSON.stringify(response));
              }}
              cookiePolicy={"single_host_origin"}
            />

            {isLoggedIn ? (
              <Redirect
                to={{ pathname: "/main", state: { ...profileObject } }}
              />
            ) : error ? (
              alert(error)
            ) : null}
          </div>
          <div className="sign-up">
            <h5>Don't have an Account?</h5>
            <GoogleLogin
              clientId="49371901320-8a2u0ldp967umqi44phevv8uts1br3rq.apps.googleusercontent.com"
              buttonText="Sign Up"
              onSuccess={(response) => {
                setProfileObject(response.profileObj);
              }}
              onFailure={(response) => {
                setError(response.error);
                // console.log("there is an error " + JSON.stringify(response));
              }}
              cookiePolicy={"single_host_origin"}
            />

            {isLoggedIn ? (
              <Redirect
                to={{ pathname: "/main", state: { ...profileObject } }}
              />
            ) : error ? (
              alert(error)
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authenticate;


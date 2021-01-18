import React, { useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Authenticate from "./Authenticate";
import Main from "./Main";
import Home from "./Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  const [profileObject, setProfileObject] = useState(null);
  return (
    <Switch>
      {/* <Route exact path="/" component={Home} /> */}
      <Route
        path="/"
        render={() =>
          isLoggedIn ? (
            <Main {...profileObject} />
          ) : (
            <Authenticate
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              error={error}
              setError={setError}
              profileObject={profileObject}
              setProfileObject={setProfileObject}
            />
          )
        }
      />
      {/* <Route path="/main" render={(props) => <Main {...props} />} /> */}
    </Switch>
  );
}
export default App;

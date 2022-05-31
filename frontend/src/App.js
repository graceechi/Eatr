import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import * as sessionActions from "./store/session";

import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return isLoaded && (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <SplashPage />
          </Route>
          {/* <Route path="/users/:id">
            <UserPage />
          </Route>
          <Route path="/photos/:id">
            <SinglePhotoPage />
          </Route>
          <Route path="/faves">
            <FavePage />
          </Route>
          <Route>
            <PageNotFound />
          </Route> */}
        </Switch>
      )}

    </>
  );
}

export default App;

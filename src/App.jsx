import React, { Suspense } from "react";
import ReactGA from "react-ga";
import { Switch, Route, Redirect } from "react-router-dom";
import { Grommet, Box, ResponsiveContext } from "grommet";
import "./App.css";

import AppBar from "./components/AppBar";
import routes from "./constants/routes";
import theme from "./theme";
import config from "./configs/env.config";

import { usePage } from "./contexts/PageContext";

ReactGA.initialize(config.google.trackingCode);

function App() {
  const page = usePage();

  return (
    <Grommet theme={theme} full={page === "/"}>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill={page === "/"} className="container">
            <Suspense fallback={<p>Loading...</p>}>
              <AppBar size={size} />
              <Switch>
                {routes.map(({ ...rest }, index) => (
                  <Route key={index} size={size} {...rest} />
                ))}
                <Redirect to="/404" />
              </Switch>
            </Suspense>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;

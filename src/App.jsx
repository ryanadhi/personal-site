import React, { Suspense } from "react";
import "./App.css";
import { Grommet, Box, Text, ResponsiveContext, Heading } from "grommet";
import AppBar from "./components/AppBar";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "./constants/routes";

import theme from "./theme";

function App() {
  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill className="container">
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

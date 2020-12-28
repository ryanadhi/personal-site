import React, { Suspense, useEffect } from "react";
import "./App.css";
import { Grommet, Box, Text, ResponsiveContext, Heading } from "grommet";
import AppBar from "./components/AppBar";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import routes from "./constants/routes";
import { PageProvider } from "./contexts/PageContext";

import { usePage, usePageUpdate } from "./contexts/PageContext";
import theme from "./theme";

function App() {
  const page = usePage();
  const setPage = usePageUpdate();
  console.log("setPage", setPage);
  console.log("page", page);
  return (
    <PageProvider>
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
    </PageProvider>
  );
}

export default App;

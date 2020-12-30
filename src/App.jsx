import React, { Suspense, useEffect, useState, useContext } from "react";
import ReactGA from "react-ga";
import "./App.css";
import { Grommet, Box, Text, ResponsiveContext, Heading } from "grommet";
import AppBar from "./components/AppBar";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import routes from "./constants/routes";
import theme from "./theme";
import config from "./configs/env.config";

export const PageContext = React.createContext();
export const PageUpdateContext = React.createContext();

export function usePage() {
  return useContext(PageContext);
}

export function usePageUpdate() {
  return useContext(PageUpdateContext);
}

ReactGA.initialize(config.google.trackingCode);

function App() {
  const [page, setPage] = useState("/");

  function changePage(currentPage) {
    setPage(currentPage);
  }

  return (
    <PageContext.Provider value={page}>
      <PageUpdateContext.Provider value={changePage}>
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
      </PageUpdateContext.Provider>
    </PageContext.Provider>
  );
}

export default App;

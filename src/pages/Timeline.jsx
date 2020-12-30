/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Box, ResponsiveContext } from "grommet";
import { withRouter } from "react-router-dom";
import ReactGA from "react-ga";
import { usePageUpdate } from "../contexts/PageContext";

import TimelineComponent from "../components/Timeline";

function Timeline(props) {
  const setPage = usePageUpdate();

  useEffect(() => {
    setPage("/timeline");
  }, []);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box fill justify="center" align="center">
          <TimelineComponent size={size} />
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
}

export default withRouter(Timeline);

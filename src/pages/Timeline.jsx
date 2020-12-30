/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Box, ResponsiveContext } from "grommet";

import { usePageUpdate } from "../App";

import TimelineComponent from "../components/Timeline";

export default function Timeline(props) {
  const setPage = usePageUpdate();

  useEffect(() => {
    setPage("/timeline");
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

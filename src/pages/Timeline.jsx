import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardFooter,
  Text,
  ResponsiveContext,
  Heading,
  Paragraph,
  Anchor,
  Diagram,
  Stack,
} from "grommet";

import { usePage, usePageUpdate } from "../App";

import TimelineComponent from "../components/Timeline";

import timeline from "../constants/timeline";

export default function Timeline(props) {
  const page = usePage();
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

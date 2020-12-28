import React from "react";
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

import TimelineComponent from "../components/Timeline";

import timeline from "../constants/timeline";

export default function Timeline(props) {
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box fill justify="center" align="center">
          <h1>Timeline</h1>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
}

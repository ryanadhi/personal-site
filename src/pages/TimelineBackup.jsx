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

import timeline from "../constants/timeline";

export default function Timeline(props) {
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box fill justify="center" align="center">
          <Stack guidingChild={1}>
            <Diagram
              connections={[
                {
                  fromTarget: "1",
                  toTarget: "2",
                  thickness: "xsmall",
                  color: "accent-1",
                },
                {
                  fromTarget: "2",
                  toTarget: "3",
                  thickness: "xsmall",
                  color: "accent-1",
                  // type: "rectilinear",
                },
              ]}
            />
            <Box>
              <Box direction={size === "small" ? "column" : "row"} gap="large">
                <Card
                  id="1"
                  elevation="large"
                  background="dark-1"
                  border={{ color: "brand", size: "medium" }}
                  round={{ size: "medium" }}
                  justify="center"
                  align="center"
                  width="small"
                  style={{ position: "relative" }}
                  overflow="visible"
                >
                  <Text>{timeline[0].company}</Text>
                </Card>
                <Card
                  id="2"
                  elevation="large"
                  background="dark-1"
                  border={{ color: "brand", size: "medium" }}
                  round={{ size: "medium" }}
                  justify="center"
                  align="center"
                  width="small"
                  style={{ position: "relative" }}
                  overflow="visible"
                />
                <Card
                  id="3"
                  elevation="large"
                  background="dark-1"
                  border={{ color: "brand", size: "medium" }}
                  round={{ size: "medium" }}
                  justify="center"
                  align="center"
                  width="small"
                  style={{ position: "relative" }}
                  overflow="visible"
                />
              </Box>
            </Box>
          </Stack>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
}

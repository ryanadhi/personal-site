import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardFooter,
  Text,
  ResponsiveContext,
} from "grommet";

const src =
  "http://s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80";

export default function Home() {
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box fill justify="center" align="center">
          <Card
            elevation="large"
            background="light-1"
            pad={{
              vertical: size === "small" ? "48px" : "64px",
              horizontal: "medium",
            }}
            border={{ color: "brand" }}
            round={{ size: "medium" }}
            justify="center"
            align="center"
            width={size === "small" ? "medium" : "large"}
            style={{ position: "relative" }}
            overflow="visible"
          >
            <Avatar
              src={src}
              style={{
                position: "absolute",
                top: size === "small" ? "-36px" : "-48px",
              }}
              size={size === "small" ? "large" : "xlarge"}
            />
            <CardBody>
              <Text>Card</Text>
            </CardBody>
            <CardFooter pad={{ horizontal: "medium", vertical: "small" }}>
              <Text size="xsmall">Card</Text>
            </CardFooter>
          </Card>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
}

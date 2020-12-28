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
} from "grommet";
import photo from "../assets/photo.jpg";
import bio from "../constants/bio";
import { usePage, usePageUpdate } from "../App";
import SocialLink from "../components/SocialLink";

export default function Home() {
  const page = usePage();
  const setPage = usePageUpdate();

  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box fill justify="center" align="center">
          <Card
            elevation="large"
            background="dark-1"
            pad={{
              top: size === "small" ? "36px" : "48px",
            }}
            border={{ color: "brand", size: "medium" }}
            round={{ size: "medium" }}
            justify="center"
            align="center"
            width={size === "small" ? "medium" : "large"}
            style={{ position: "relative" }}
            overflow="visible"
          >
            <Avatar
              src={photo}
              style={{
                position: "absolute",
                top: size === "small" ? "-36px" : "-48px",
              }}
              size={size === "small" ? "large" : "xlarge"}
            />
            <CardBody>
              <Box
                pad={{
                  vertical: "medium",
                  horizontal: size === "small" ? "medium" : "large",
                }}
                justify="center"
                align="center"
                fill="horizontal"
              >
                <Text color="accent-1">{bio.greeting}</Text>
                <Heading level="2" style={{ letterSpacing: ".2em" }}>
                  {bio.name.toUpperCase()}
                </Heading>
                <Text style={{ textAlign: "justify" }} color="accent-1">
                  {bio.about}
                </Text>
              </Box>
            </CardBody>
            <CardFooter fill="horizontal" justify="center">
              <Box pad={{ vertical: "medium" }}>
                <SocialLink />
              </Box>
            </CardFooter>
          </Card>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
}

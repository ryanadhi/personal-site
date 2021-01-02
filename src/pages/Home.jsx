/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
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
import ReactGA from "react-ga";
import { withRouter } from "react-router-dom";
import photo from "../assets/photo.jpg";
import bio from "../constants/bio";
import { usePageUpdate } from "../contexts/PageContext";
import SocialLink from "../components/SocialLink";
import isMobileLandscape from "../helpers/isMobileLandscape";

function Home() {
  const setPage = usePageUpdate();
  const [isLandscape, setIsLandscape] = useState(isMobileLandscape());

  useEffect(() => {
    setPage("/");
  }, []);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    setIsLandscape(isMobileLandscape());
  }, [
    window.matchMedia("(orientation: landscape)"),
    window.navigator.userAgent,
  ]);

  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box
          fill
          justify="center"
          align="center"
          animation={{ type: "zoomIn", duration: 4000 }}
        >
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
            width={size === "small" ? "90%" : "large"}
            style={{ position: "relative" }}
            overflow="visible"
          >
            <Avatar
              src={photo}
              style={{
                position: "absolute",
                top:
                  size === "small" ? "-36px" : isLandscape ? "-36px" : "-48px",
              }}
              size={
                size === "small" ? "large" : isLandscape ? "large" : "xlarge"
              }
            />
            <CardBody>
              <Box
                pad={{
                  vertical: isLandscape ? "small" : "medium",
                  horizontal:
                    size === "small"
                      ? "medium"
                      : isLandscape
                      ? "medium"
                      : "large",
                }}
                justify="center"
                align="center"
                fill="horizontal"
              >
                <Text
                  color="accent-1"
                  size={
                    size === "small"
                      ? "small"
                      : isLandscape
                      ? "small"
                      : "medium"
                  }
                >
                  {bio.greeting}
                </Text>
                <Heading
                  level={size === "small" ? "3" : isLandscape ? "4" : "2"}
                  style={{ letterSpacing: ".2em" }}
                >
                  {bio.name.toUpperCase()}
                </Heading>
                <Text
                  style={{ textAlign: "justify" }}
                  color="accent-1"
                  size={
                    size === "small"
                      ? "small"
                      : isLandscape
                      ? "small"
                      : "medium"
                  }
                >
                  {bio.about}
                </Text>
              </Box>
            </CardBody>
            <CardFooter fill="horizontal" justify="center">
              <Box pad={{ vertical: isLandscape ? "small" : "medium" }}>
                <SocialLink />
              </Box>
            </CardFooter>
          </Card>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
}

export default withRouter(Home);

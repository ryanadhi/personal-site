import React from "react";
import { Box, Header, Nav, Menu, Text } from "grommet";
import { Menu as MenuIcon } from "grommet-icons";

import { useHistory } from "react-router-dom";
import { usePage, usePageUpdate } from "../contexts/PageContext";
import pages from "../constants/pages";
import SocialLink from "../components/SocialLink";
import useEventTracker from "../hooks/useEventTracker";

export default function AppBar(props) {
  const { size } = props;
  const history = useHistory();
  const page = usePage();
  const setPage = usePageUpdate();
  const eventTracker = useEventTracker("Move page");

  const changePage = (moveTo, label) => {
    eventTracker(moveTo, label);
    setPage(moveTo);
    history.push(moveTo);
  };

  return (
    <Header pad="medium">
      <Box direction="row" align="center" gap="small">
        {page !== "/" && <SocialLink />}
      </Box>
      {size === "small" ? (
        <Menu
          icon={<MenuIcon color="light-1" />}
          items={pages.map((page) => {
            return {
              label: page.label,
              onClick: () => {
                changePage(page.path, page.label);
              },
            };
          })}
        />
      ) : (
        <Nav direction="row">
          <Box direction="row" align="center" gap="small">
            {pages.map((route, index) => (
              <Box
                key={index}
                round={{ size: "xsmall" }}
                hoverIndicator
                elevation="small"
                pad="xsmall"
                background={page === route.path ? "dark-3" : "none"}
                onClick={() => changePage(route.path, route.label)}
                style={{ cursor: "pointer" }}
              >
                <Text color="light-1" style={{ fontWeight: "400" }}>
                  {route.label}
                </Text>
              </Box>
            ))}
          </Box>
        </Nav>
      )}
    </Header>
  );
}

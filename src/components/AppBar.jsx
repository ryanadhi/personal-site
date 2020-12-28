import React from "react";
import { Box, Header, Nav, Menu, Text } from "grommet";
import { Menu as MenuIcon } from "grommet-icons";

import { useHistory } from "react-router-dom";
import { usePage, usePageUpdate } from "../contexts/PageContext";
import pages from "../constants/pages";
import SocialLink from "../components/SocialLink";

export default function AppBar(props) {
  const { size } = props;
  const history = useHistory();
  const page = usePage();
  const setPage = usePageUpdate();

  const changePage = (moveTo) => {
    setPage(moveTo);
    history.push(moveTo);
  };
  console.log("appbar page", page);

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
                changePage(page.path);
              },
            };
          })}
        />
      ) : (
        <Nav direction="row">
          {pages.map((route, index) => (
            <Box
              key={index}
              round={{ size: "xsmall" }}
              hoverIndicator
              elevation="small"
              pad="xsmall"
              background={page === route.path ? "dark-3" : "none"}
              onClick={() => changePage(route.path)}
              style={{ cursor: "pointer" }}
            >
              <Text color="light-1" weight="400">
                {route.label}
              </Text>
            </Box>
          ))}
        </Nav>
      )}
    </Header>
  );
}

import React from "react";
import { Box, Header, Nav, Menu, Text } from "grommet";
import { useHistory } from "react-router-dom";
import AnchorLink from "./AnchorLink";
import { Menu as MenuIcon } from "grommet-icons";

export default function AppBar(props) {
  const { size } = props;
  const history = useHistory();
  return (
    <Header pad="medium">
      <Box direction="row" align="center" gap="small"></Box>
      {size === "small" ? (
        <Menu
          // label={<Text>Menu</Text>}
          icon={<MenuIcon color="light-1" />}
          items={[
            {
              label: "Home",
              onClick: () => {
                history.push("/");
              },
            },
            {
              label: "Timeline",
              onClick: () => {
                history.push("/timeline");
              },
            },
            {
              label: "Projects",
              onClick: () => {
                history.push("/projects");
              },
            },
            {
              label: "Technologies",
              onClick: () => {
                history.push("/technologies");
              },
            },
          ]}
        />
      ) : (
        <Nav direction="row">
          <AnchorLink to="/" color="light-1" weight="200">
            Home
          </AnchorLink>
          <AnchorLink to="/timeline" color="light-1" weight="200">
            Timeline
          </AnchorLink>
          <AnchorLink to="/projects" color="light-1" weight="200">
            Projects
          </AnchorLink>
          <AnchorLink to="/technologies" color="light-1" weight="200">
            Technologies
          </AnchorLink>
        </Nav>
      )}
    </Header>
  );
}

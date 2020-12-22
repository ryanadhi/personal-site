import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";
import { css } from "styled-components";
import { FormUp, FormDown, Menu } from "grommet-icons";

const theme = deepMerge(grommet, {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
  menu: {
    icons: {
      up: undefined,
    },
  },
  avatar: {
    extend: `border: 2px solid white;
    box-shadow: 2px 2px 15px 1px white;`,
  },
  // card: {
  //   footer: {
  //     pad: { horizontal: "medium", vertical: "small" },
  //     background: "#FFFFFF27",
  //   },
  // },
});

export default theme;

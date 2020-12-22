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
});

export default theme;

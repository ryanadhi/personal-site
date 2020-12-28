import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";
import { css } from "styled-components";
import { FormUp, FormDown, Menu } from "grommet-icons";

const theme = deepMerge(grommet, {
  global: {
    focus: {
      outline: {
        color: "#fcf8e8",
      },
    },
    colors: {
      brand: "#c5a880",
      "accent-1": "#fcf8e8",
    },
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
    extend: `
      border: 1px solid #c5a880;
      box-shadow: 1px 1px 10px 1px #c5a880;
    `,
  },
  card: {
    footer: {
      background: "#FFFFFF27",
    },
  },
});

export default theme;

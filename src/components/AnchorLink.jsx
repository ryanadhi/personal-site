import React from "react";
import { Anchor } from "grommet";
import { Link } from "react-router-dom";

export default function AnchorLink(props) {
  return (
    <Anchor
      as={({ colorProp, hasIcon, hasLabel, focus, ...p }) => <Link {...p} />}
      {...props}
    />
  );
}

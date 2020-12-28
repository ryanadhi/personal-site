import React from "react";
import { Box, Anchor } from "grommet";
import { Github, Linkedin, Mail, DocumentText } from "grommet-icons";
import bio from "../constants/bio";

export default function SocialLink() {
  return (
    <Box direction="row" gap="large" align="center">
      <Anchor href={bio.github} icon={<Github />} target="_blank" />
      <Anchor
        href={bio.linkedin}
        icon={<Linkedin style={{ width: "20px", height: "20px" }} />}
        target="_blank"
      />
      <Anchor href={`mailto:${bio.email}`} icon={<Mail />} target="_blank" />
      <Anchor
        href={bio.github}
        icon={<DocumentText style={{ width: "20px", height: "20px" }} />}
        target="_blank"
      />
    </Box>
  );
}

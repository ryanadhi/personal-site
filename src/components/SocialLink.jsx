import React from "react";
import { Box, Anchor } from "grommet";
import { Github, Linkedin, Mail, DocumentText } from "grommet-icons";
import useEventTracker from "../hooks/useEventTracker";
import bio from "../constants/bio";

export default function SocialLink() {
  const eventTracker = useEventTracker("External Links");

  function tracker(social, link) {
    eventTracker(social, link);
  }

  return (
    <Box direction="row" gap="large" align="center">
      <Anchor
        href={bio.github}
        icon={<Github />}
        target="_blank"
        style={{ padding: "0" }}
        onClick={() => tracker("GitHub", bio.github)}
        rel="noopener noreferrer"
      />
      <Anchor
        href={bio.linkedin}
        icon={<Linkedin style={{ width: "20px", height: "20px" }} />}
        target="_blank"
        style={{ padding: "0" }}
        onClick={() => tracker("Linkedin", bio.linkedin)}
        rel="noopener noreferrer"
      />
      <Anchor
        href={`mailto:${bio.email}`}
        icon={<Mail />}
        target="_blank"
        style={{ padding: "0" }}
        onClick={() => tracker("Email", bio.email)}
        rel="noopener noreferrer"
      />
      <Anchor
        href={bio.github}
        icon={<DocumentText style={{ width: "20px", height: "20px" }} />}
        target="_blank"
        style={{ padding: "0" }}
        onClick={() => tracker("Resume", bio.resume)}
        rel="noopener noreferrer"
      />
    </Box>
  );
}

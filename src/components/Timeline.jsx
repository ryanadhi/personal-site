import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Box, Text, Heading, Anchor } from "grommet";

import { GiGraduateCap } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import timeline from "../constants/timeline";
import moment from "moment";

export default function TimelineComponent(props) {
  return (
    <>
      <Heading level="2" color="light-3">
        Work experience & Education
      </Heading>
      <VerticalTimeline>
        {timeline.map((step, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: index === 0 ? "#c5a880" : "#333333",
              color: "#F2F2F2",
            }}
            contentArrowStyle={{
              borderRight:
                index === 0 ? "7px solid #c5a880" : "7px solid #333333",
            }}
            date={
              index === 0
                ? `${moment(step.from).format("MMM YYYY")} - present`
                : `${moment(step.from).format("MMM YYYY")} - ${moment(
                    step.to
                  ).format("MMM YYYY")}`
            }
            iconStyle={{ background: "#777777", color: "#fff" }}
            icon={
              index === timeline.length - 1 ? <GiGraduateCap /> : <MdWork />
            }
          >
            <Box>
              <Text
                color={index === 0 ? "dark-1" : "light-3"}
                size="large"
                style={{ letterSpacing: "0.05em", fontWeight: "500" }}
              >
                {step.position}
              </Text>
              <Anchor
                href={step.url}
                target="_blank"
                style={{
                  padding: "0",
                  fontWeight: "normal",
                }}
                margin={{ bottom: "medium" }}
              >
                <Text
                  color={index === 0 ? "dark-1" : "light-3"}
                  style={{
                    borderBottom:
                      index === 0 ? "1px solid #333333" : "1px solid #EDEDED",
                  }}
                >
                  {step.company}
                </Text>
              </Anchor>
              <Text color={index === 0 ? "dark-1" : "light-3"} size="small">
                {step.stacks.map((stack, index) =>
                  index === step.stacks.length - 1 ? `${stack} ` : `${stack} | `
                )}
              </Text>
            </Box>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </>
  );
}

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DriveOverview from "../../components/DriveOverview";

export default {
  title: "Example/DriveOverview",
  component: DriveOverview,
} as ComponentMeta<typeof DriveOverview>;

const Template: ComponentStory<typeof DriveOverview> = (args) => (
  <DriveOverview {...args} />
);

export const Primary = Template.bind({});

Primary.args = {};

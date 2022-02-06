import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NewDrive from "../../components/Modals/NewDrive";

export default {
  title: "Example/NewDrive",
  component: NewDrive,
} as ComponentMeta<typeof NewDrive>;

const Template: ComponentStory<typeof NewDrive> = (args) => <NewDrive />;

export const Primary = Template.bind({});

Primary.args = {};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dropdown from "../../components/Dropdown";

export default {
  title: "Example/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  options: [
    { value: "0", label: "first" },
    { value: "1", label: "second" },
    { value: "2", label: "last" },
  ],
  label: "Label",
  placeHolder: "Select donation status",
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Pill from "../../components/Pill";

export default {
  title: "Example/Pill",
  component: Pill,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Pill>;

const Template: ComponentStory<typeof Pill> = (args) => <Pill {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  backgroundColor: "#FF98A8",
  label: "DZ Hospital",
};

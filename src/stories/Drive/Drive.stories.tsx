import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Drive from "../../components/Modals/Drive";

export default {
  title: "Example/Drive",
  component: Drive,
} as ComponentMeta<typeof Drive>;

const Template: ComponentStory<typeof Drive> = (args) => <Drive {...args} />;

export const New = Template.bind({});
export const Edit = Template.bind({});

New.args = {};
Edit.args = {
  bloodAmount: "1000",
  bloodType: { value: "AB+", label: "AB+" },
  urgency: true,
};

import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Input from "../../components/Input";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: "name",
  label: "Label",
  placeholder: "Placeholder",
  defaultValue: "Input",
};

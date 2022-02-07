import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import TextInput from "../../components/TextInput";

export default {
  title: "TextInput",
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Default = Template.bind({});

Default.args = {
  name: "name",
  label: "Label",
  placeholder: "Placeholder",
};

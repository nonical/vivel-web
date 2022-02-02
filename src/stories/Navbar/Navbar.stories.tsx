import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Navbar from "../../components/Navbar";

export default {
  title: "Example/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar />;

export const Primary = Template.bind({});

Primary.args = {};

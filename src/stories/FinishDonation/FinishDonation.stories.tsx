import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FinishDonation from "../../components/Modals/FinishDonation";

export default {
  title: "Example/FinishDonation",
  component: FinishDonation,
} as ComponentMeta<typeof FinishDonation>;

const Template: ComponentStory<typeof FinishDonation> = () => (
  <FinishDonation />
);

export const Primary = Template.bind({});

Primary.args = {};
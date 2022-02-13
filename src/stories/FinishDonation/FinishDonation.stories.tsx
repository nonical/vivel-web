import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FinishDonationModal from "../../components/Modals/FinishDonationModal";

export default {
  title: "Example/FinishDonation",
  component: FinishDonationModal,
} as ComponentMeta<typeof FinishDonationModal>;

const Template: ComponentStory<typeof FinishDonationModal> = () => (
  <FinishDonationModal
    title="Finish donation"
    isOpen={true}
    onClose={() => {}}
    donationId=""
  />
);

export const Primary = Template.bind({});

Primary.args = {};

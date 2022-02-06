import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import NewDonation from "../../components/Modals/NewDonation";

export default {
  title: "Example/NewDonation",
  component: NewDonation,
} as ComponentMeta<typeof NewDonation>;

const Template: ComponentStory<typeof NewDonation> = (args) => (
  <NewDonation {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  inputLabel: "Blood amount",
  inputName: "blood-amount",
  inputPlaceHolder: "type here...",
  selectOptions: [
    { value: "O+", label: "O+" },
    { value: "O-", label: "O-" },
    { value: "A+", label: "A+" },
    { value: "A-", label: "A-" },
    { value: "B+", label: "B+" },
    { value: "B-", label: "B-" },
    { value: "AB+", label: "AB+" },
    { value: "AB-", label: "AB-" },
  ],
  selectLabel: "Blood type",
  selectPlaceholder: "Select blood type",
};

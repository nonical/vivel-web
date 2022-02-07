// YourComponent.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Container from "../../components/Container";
import Table from "../../components/Table";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Container",
  component: Container,
  argTypes: {
    initChecked: { type: "boolean" },
  },
} as ComponentMeta<typeof Container>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: [
    <Table>
      <thead>
        <th>Head 1</th>
        <th>Head 2</th>
        <th>Head 3</th>
      </thead>
      <tr>
        <td>Col 1</td>
        <td>Col 2</td>
        <td>Col 3</td>
      </tr>
      <tr>
        <td>Col 1</td>
        <td>Col 2</td>
        <td>Col 3</td>
      </tr>
    </Table>,
  ],
};

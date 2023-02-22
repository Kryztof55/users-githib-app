import { withRouter } from "storybook-addon-react-router-v6";

import React from "react";

import Button from "./";

export default {
  title: "Atoms/Button",
  decorators: [withRouter],
  component: Button,
};

const Template = (args) => <Button {...args} />;
export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
  text: "Load More",
};

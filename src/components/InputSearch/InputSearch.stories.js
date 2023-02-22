import { withRouter } from "storybook-addon-react-router-v6";

import React from "react";

import InputSearch from "./";

export default {
  title: "Atoms/InputSearch",
  decorators: [withRouter],
  component: InputSearch,
};

const Template = (args) => <InputSearch {...args} />;
export const InputSearchPrimary = Template.bind({});
InputSearchPrimary.args = {
  placeholder: "Enter User or email",
};

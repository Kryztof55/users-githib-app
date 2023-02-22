import React from "react";
import { withRouter } from "storybook-addon-react-router-v6";

import Header from "./";

export default {
  title: "Molecules/Header",
  decorators: [withRouter],
  component: Header,
};

const Template = (args) => <Header {...args} />;
export const HeaderPrimary = Template.bind({});
HeaderPrimary.args = {
  url: "https://avatars.githubusercontent.com/u/2669?v=4",
};

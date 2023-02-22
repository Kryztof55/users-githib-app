import { withRouter } from "storybook-addon-react-router-v6";

import React from "react";

import Avatar from "./";

export default {
  title: "Molecules/Avatar",
  decorators: [withRouter],
  component: Avatar,
};

const Template = (args) => <Avatar {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  img: "https://avatars.githubusercontent.com/u/2669?v=4",
  name: "Name",
  showName: true,
  icon: "https://img.icons8.com/ios-glyphs/30/null/github.png",
};

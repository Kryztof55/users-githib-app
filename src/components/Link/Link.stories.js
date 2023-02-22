import React from "react";

import Link from "./";

export default {
  title: "Atoms/Link",
  component: Link,
};

const Template = (args) => <Link {...args} />;
export const LinkPrimary = Template.bind({});
LinkPrimary.args = {
  url: "https://avatars.githubusercontent.com/u/2669?v=4",
  text: "View profile",
};

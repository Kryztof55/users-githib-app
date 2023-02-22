import React from "react";

import Header from "./";

export default {
  title: "Organisms/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;
export const HeaderPrimary = Template.bind({});
HeaderPrimary.args = {
  url: "https://avatars.githubusercontent.com/u/2669?v=4",
};

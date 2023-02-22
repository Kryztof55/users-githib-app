import React from "react";

import InputSearch from "./";

export default {
  title: "Atoms/InputSearch",
  component: InputSearch,
};

const Template = (args) => <InputSearch {...args} />;
export const InputSearchPrimary = Template.bind({});
InputSearchPrimary.args = {
  placeholder: "Enter User or email",
};

import React from "react";
import Header from "../Header";
import "./LayoutBase.scss";

const LayoutBase = ({ children }) => {
  return (
    <>
      <Header />
      <section className="custom--container mx-auto">{children}</section>
    </>
  );
};

export default LayoutBase;

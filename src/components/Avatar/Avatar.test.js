import React from "react";
import { render, screen } from "@testing-library/react";
import Avatar from "./";
import Link from "../Link";
import { BrowserRouter } from "react-router-dom";

describe("Avatar", () => {
  it("renders an image and name when showName is true", () => {
    const imgSrc = "test.png";
    const name = "Test User";
    render(
      <BrowserRouter>
        <Avatar
          img={imgSrc}
          name={name}
          showName={true}
          icon="test-icon.png"
          to="/test"
        />
      </BrowserRouter>
    );
    const avatarImage = screen.getByAltText(name);
    expect(avatarImage).toBeInTheDocument();
    const avatarName = screen.getByText(name);
    expect(avatarName).toBeInTheDocument();
  });

  it("renders only an image when showName is false", () => {
    const imgSrc = "test.png";
    const name = "Test User";
    render(
      <BrowserRouter>
        <Avatar
          img={imgSrc}
          name={name}
          showName={false}
          icon="test-icon.png"
          to="/test"
        />
      </BrowserRouter>
    );
    const avatarImage = screen.getByAltText(name);
    expect(avatarImage).toBeInTheDocument();
    const avatarName = screen.queryByText(name);
    expect(avatarName).toBeNull();
  });

  it("renders a Link component with the correct text", () => {
    const imgSrc = "test.png";
    const name = "Test User";
    const linkText = "View profile";
    render(
      <BrowserRouter>
        <Avatar
          img={imgSrc}
          name={name}
          showName={true}
          icon="test-icon.png"
          to="/test"
        />
      </BrowserRouter>
    );
    const viewProfileLink = screen.getByText(linkText);
    expect(viewProfileLink).toBeInTheDocument();
    expect(viewProfileLink.closest("a")).toHaveAttribute("href");
  });
});

import React from "react";
import Link from "../Link";
import { NavLink } from "react-router-dom";

import "./Avatar.scss";

const Avatar = ({ img, name, showName, icon, to }) => {
  return (
    <article className="avatar-card">
      <div className="avatar-card--main">
        <img className="avatar-card--image" src={img} alt={`${name}-1`} />
        {showName && <p className="avatar-card--name">{name}</p>}
      </div>
      <div className="avatar-card--footer">
        <NavLink to={to} target="_blank" rel="noopener noreferrer">
          <img className="avatar-card--icon" src={icon} alt={name} />
        </NavLink>
        <NavLink to={`/${name}`}>
          <Link text="View profile" />
        </NavLink>
      </div>
    </article>
  );
};

export default Avatar;

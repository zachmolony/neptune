import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const NavItem = ({ name, link }) => {
  return (
    <>
      <NavLink to={link}>
        {({ isActive }) => (
          <li
            className={`w-full py-6 px-12 ${
              isActive && "underline bg-tertiary text-white"
            }`}
          >
            {name}
          </li>
        )}
      </NavLink>
    </>
  );
};

NavItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default NavItem;

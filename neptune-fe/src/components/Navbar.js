import React from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import NavItem from "./NavItem";
import Logo from "../assets/TextLogo.png";

const navlinks = {
  store: {
    dashboard: "Dashboard",
    orders: "Orders",
    inventory: "Inventory",
    manage: "Manage Store",
    discounts: "Discounts",
  },
  developer: {
    dashboard: "Dashboard",
    clients: "Clients",
  },
};

const Navbar = () => {
  const location = useLocation().pathname?.split("/")[1];
  const linkitems = Object.keys(navlinks[location])?.map((link) => (
    <NavItem key={link} name={navlinks[location][link]} link={link} />
  ));
  return (
    <div className="h-full bg-secondary text-white">
      <div className="p-6">
        <Link to="/">
          <img src={Logo} alt="Neptune Logo" />
        </Link>
      </div>
      <ul className="text-right text-lightGray text-2xl font-medium">{linkitems}</ul>
    </div>
  );
};

Navbar.propTypes = {
  target: PropTypes.string,
};

export default Navbar;

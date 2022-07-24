import { NavLink } from "react-router-dom";

const HomeBarItem = ({ title, link }) => {
  return (
    <div className="table h-full px-16 w-fit align-middle text-lightGray">
      <NavLink
        className={({ isActive }) =>
          "display-table-cell text-2xl font-bold  align-middle hover:text-white hover:underline transition-all " +
          (isActive && " text-white underline")
        }
        to={link}
      >
        {title}
      </NavLink>
    </div>
  );
};

export default HomeBarItem;

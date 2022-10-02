import { NavLink } from "react-router-dom";

const HomeBarItem = ({ title, link }) => {
  return (
    <div className="table h-full px-16 w-fit align-middle text-lightGray">
      <NavLink
        className={({ isActive }) =>
          "display-table-cell align-middle hover:text-white hover:underline transition-all drop-shadow-[0px_0px_5px_rgba(76,84,114,0.5)] " +
          (isActive && " text-white underline")
        }
        to={link}
      >
        <p className="text-2xl font-bold drop-shadow-[0px_0px_3px_rgba(76,84,114)]">{title}</p>
      </NavLink>
    </div>
  );
};

export default HomeBarItem;

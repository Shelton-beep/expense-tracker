import "./SideBar.css";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import CategoryIcon from "@mui/icons-material/Category";
import { NavLink } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <NavLink to="/">
              <span className="sideBarIcon">
                <ShoppingCartRoundedIcon />
              </span>
              Manage Expenses
            </NavLink>
          </li>
          <li className="sideBarListItem">
            <NavLink to="/categories">
              <span className="sideBarIcon">
                <CategoryIcon />
              </span>
              Manage Categories
            </NavLink>
          </li>
          <li className="sideBarListItem">
            <NavLink to="/revenue">
              <span className="sideBarIcon">
                <AttachMoneyRoundedIcon />
              </span>
              Manage Revenue
            </NavLink>
          </li>
          <hr />
          <h3 className="fw-lighter fs-5 headingText">DashBoards</h3>
          <li className="sideBarListItem">
            <span className="sideBarIcon">
              <DashboardCustomizeRoundedIcon />
            </span>
            View DashBoards
          </li>
        </ul>
      </div>
    </div>
  );
};

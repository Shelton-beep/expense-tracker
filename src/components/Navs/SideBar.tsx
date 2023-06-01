import "./SideBar.css";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import CategoryIcon from "@mui/icons-material/Category";

export const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <span className="sideBarIcon">
              <ShoppingCartRoundedIcon />
            </span>
            Manage Expenses
          </li>
          <li className="sideBarListItem">
            <span className="sideBarIcon">
              <CategoryIcon />
            </span>
            Manage Categories
          </li>
          <li className="sideBarListItem">
            <span className="sideBarIcon">
              <AttachMoneyRoundedIcon />
            </span>
            Manage Revenue
          </li>
          <hr />
          <h3 className="fw-lighter fs-5">DashBoards</h3>
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

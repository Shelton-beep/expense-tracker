import "./SideBar.css";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";

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
              <DashboardCustomizeRoundedIcon />
            </span>
            View Dashboards
          </li>
          <li className="sideBarListItem">
            <span className="sideBarIcon">
              <AttachMoneyRoundedIcon />
            </span>
            Manage Revenue
          </li>
          <li className="sideBarListItem">item4</li>
          <li className="sideBarListItem">item5</li>
          <li className="sideBarListItem">item6</li>
        </ul>
      </div>
    </div>
  );
};

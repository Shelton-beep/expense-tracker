import "./SideBar.css";

export const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <ul className="sideBarList">
          <li className="sideBarListItem">Manage Expenses</li>
          <li className="sideBarListItem">View Dashboards</li>
          <li className="sideBarListItem">Manage Revenue</li>
          <li className="sideBarListItem">item4</li>
          <li className="sideBarListItem">item5</li>
          <li className="sideBarListItem">item6</li>
        </ul>
      </div>
    </div>
  );
};

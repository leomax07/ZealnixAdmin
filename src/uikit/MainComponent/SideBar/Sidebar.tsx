import "./sidebar.scss";
import { Sidebar, Menu, SubMenu, MenuItem } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import sideMenu from "./menu";

function SidebarScreen() {
  const location = useLocation();

  return (
    <Sidebar>
      <Menu>
        {sideMenu.map((item) => {
          const isActive = location.pathname === item.to;
          const currentIcon = isActive ? item.Icon.active : item.Icon.inActive;
          return (
            <div
              key={item.label}
              className={`ItemsFlex ${isActive ? "active__tab " : ""}`}
            >
              <SubMenu
                icon={currentIcon}
                component={<Link to={item.to} />}
                label={item.label}
              >
                {item.subMenu &&
                  item.subMenu.map((sub) => (
                    <MenuItem component={<Link to={sub.to} key={sub.label} />}>
                      {sub.label}
                    </MenuItem>
                  ))}
              </SubMenu>
            </div>
          );
        })}
      </Menu>
    </Sidebar>
  );
}

export default SidebarScreen;

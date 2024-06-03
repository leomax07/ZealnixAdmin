import "./sidebar.scss";
import {
  Sidebar,
  Menu,
  // SubMenu,
  MenuItem,
  useProSidebar,
} from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import sideMenu from "./menu";
// import { useState } from "react";

function SidebarScreen() {
  const location = useLocation();
  const { collapsed, collapseSidebar } = useProSidebar();
  // const [full, setFull] = useState(true);

  const handleMouseEnter = () => {
    if (collapsed) {
      collapseSidebar();
    }
  };

  const handleMouseLeave = () => {
    if (!collapsed) {
      collapseSidebar();
    }
  };
  return (
    <Sidebar>
      <Menu>
        {sideMenu.map((item) => {
          const isActive = location.pathname === item.to;
          const currentIcon = isActive ? item.Icon.active : item.Icon.inActive;
          return (
            <div
              key={item.label}
              className={`ItemsFlex ${isActive ? "active__tab" : ""}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* {item.subMenu ? (
                <SubMenu
                  icon={currentIcon}
                  title={item.label}
                  defaultOpen={isActive}
                >
                  {item.subMenu.map((sub) => (
                    <MenuItem key={sub?.label} component={<Link to={sub?.to} />}>
                      {sub.label}
                    </MenuItem>
                  ))}
                </SubMenu>
              ) : ( */}
                <MenuItem
                  icon={currentIcon}
                  component={<Link to={item.to} />}
                  active={isActive}
                >
                  {item.label}
                </MenuItem>
              {/* )} */}
            </div>
          );
        })}
      </Menu>
    </Sidebar>
  );
}

export default SidebarScreen;

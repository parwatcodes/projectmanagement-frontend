import React from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { ReactComponent as HomeIcon } from '../images/icons/home.svg';
import { ReactComponent as TaskIcon } from '../images/icons/task.svg';
import { ReactComponent as MemberIcon } from '../images/icons/member.svg';
import { ReactComponent as SettingIcon } from '../images/icons/setting.svg';

const Menu = (props) => {
  const svgStroke = '#1442AE';
  const navigate = useNavigate();
  const location = useLocation();

  const getSelectedStyle = (tabId) => {
    return props.selectedBoard === tabId ? 'menu-wrapper selected' : 'menu-wrapper';
  };

  const handleTabClick = (tabId) => {
    props.setSelectedBoard(tabId);
  };

  // Set the tab according to the url pathname.
  // React.useEffect(() => {
  //   if (location.pathname) {

  //   }
  // }, [])

  return (
    <>
      <div className="main-wrapper">

        <Link to='/home' className="link-r">
          <div className={getSelectedStyle(1)} onClick={() => handleTabClick(1)}>
            <HomeIcon />
            <div>Home</div>
          </div>
        </Link>
        <Link to='/tasks' className="link-r">
          <div className={getSelectedStyle(2)} onClick={() => handleTabClick(2)}>
            <TaskIcon />
            <div>Tasks</div>
          </div>
        </Link>
        <Link to='/users' className="link-r">
          <div className={getSelectedStyle(3)} onClick={() => handleTabClick(3)}>
            <MemberIcon />
            <div>Users</div>
          </div>
        </Link>
        <Link to='/settings' className="link-r">
          <div className={getSelectedStyle(4)} onClick={() => handleTabClick(4)}>
            <SettingIcon />
            <div>Settings</div>
          </div>
        </Link>
      </div>
      <div className="line"></div>
    </>
  );
};

export default Menu;

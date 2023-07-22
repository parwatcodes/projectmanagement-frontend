import React from "react";

import HomeIcon from '../images/icons/home.svg';
import TaskIcon from '../images/icons/task.svg';
import MemberIcon from '../images/icons/member.svg';
import SettingIcon from '../images/icons/setting.svg';


const Menu = () => {
  return (
    <>
      <div className="main-wrapper">
        <div className="menu-wrapper">
          <img src={HomeIcon} alt="home" />
          <div>Home</div>
        </div>
        <div className="menu-wrapper">
          <img src={TaskIcon} alt="task" />
          <div>Tasks</div>
        </div>
        <div className="menu-wrapper">
          <img src={MemberIcon} alt="member" />
          <div>Members</div>
        </div>
        <div className="menu-wrapper">
          <img src={SettingIcon} alt="setting" />
          <div>Settings</div>
        </div>
      </div>
      <div class="line"></div>
    </>
  );

};

export default Menu;

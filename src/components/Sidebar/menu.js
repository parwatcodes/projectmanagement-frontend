import React from "react";

import { ReactComponent as HomeIcon } from '../images/icons/home.svg';
import { ReactComponent as TaskIcon } from '../images/icons/task.svg';
import { ReactComponent as MemberIcon } from '../images/icons/member.svg';
import { ReactComponent as SettingIcon } from '../images/icons/setting.svg';


const Menu = (props) => {
  const svgStroke = '#1442AE';

  return (
    <>
      <div className="main-wrapper" >
        <div className="menu-wrapper selected" onClick={() => {
          props.setSelectedBoard(1);
        }}>
          <HomeIcon/>
          <div>Home</div>
        </div>
        <div className="menu-wrapper" onClick={() => {
          props.setSelectedBoard(1);
        }} >
          <TaskIcon/>
          <div>Tasks</div>
        </div>
        <div className="menu-wrapper" onClick={() => {
          props.setSelectedBoard(3);
        }} >
          <MemberIcon />
          <div>Members</div>
        </div>
        <div className="menu-wrapper">
          <SettingIcon />
          <div>Settings</div>
        </div>
      </div>
      <div class="line"></div>
    </>
  );

};

export default Menu;

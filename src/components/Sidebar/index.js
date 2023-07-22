import './sidebar.css';
import Menu from './menu';
import ProjectMenu from './ProjectMenu';
import Widget from './Widget';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className='logo-container'>
        <img id='logo' src='https://raw.githubusercontent.com/parwatcodes/TaskMan/main/public/images/logo.png' alt='logo' />
        <h3>Task Man</h3>
      </div>
      <Menu />
      <ProjectMenu />
      <Widget />
    </div>
  )
}

export default Sidebar;

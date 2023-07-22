import './sidebar.css';
import Menu from './menu';
import ProjectMenu from './ProjectMenu';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Menu />
      <ProjectMenu />
    </div>
  )
}

export default Sidebar;

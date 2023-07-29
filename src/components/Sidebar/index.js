import './sidebar.css';
import Menu from './menu';
import ProjectMenu from './ProjectMenu';
import Widget from './Widget';
import LeftArrow from '../images/icons/left-arrow.svg';

const Sidebar = (props) => {

  return (
    <div className="sidebar">
      <div className='logo-container'>
        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <img id='logo' src='https://raw.githubusercontent.com/parwatcodes/TaskMan/main/public/images/logo.png' alt='logo' />
          <h3 style={{
            color: '#1442AE',
            fontWeight: 700,
            textShadow: '0.5px 0.5px #198754',
            cursor: 'default'
          }}>Task Man</h3>
        </div>
        <div>
          <img src={LeftArrow} alt='hide-sidebar' />
          <img src={LeftArrow} style={{
            marginLeft: '-14px'
          }} alt='hide-sidebar' />
        </div>
      </div>
      <Menu {...props} />
      <ProjectMenu projects={props.projects} />
      {/* <Widget /> */}
    </div>
  );
};

export default Sidebar;

import './sidebar.css';
import AddIcon from '../images/icons/add.svg';

const ProjectMenu = () => {
  return (
    <div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '10px'
      }}>
        <h2>MY PROJECTS</h2>
        <img style={{
          height: '25px',
          width: '25px'
        }} src={AddIcon} alt="" />
      </div>
      <div className='project-list'>
        <div className='s-list selected'>
          <span class="dot"></span>
          <div >Mobile App</div>
        </div>

        <div className='s-list'>
          <span class="dot"></span>
          <div >Website Redesign</div>
        </div>

        <div className='s-list'>
          <span class="dot"></span>
          <div >Design System</div>
        </div>

        <div className='s-list'>
          <span class="dot"></span>
          <div >Wireframes</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMenu;

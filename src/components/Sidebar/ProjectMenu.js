import './sidebar.css';
import AddIcon from '../images/icons/add.svg';

const ProjectMenu = (props) => {
  const { projects } = props;

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
        {projects.map(project => (
          <div key={project._id} className='s-list selected'>
            <span className="dot"></span>
            <div >{project.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectMenu;

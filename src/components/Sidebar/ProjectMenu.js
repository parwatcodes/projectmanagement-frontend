import { Link, useNavigate } from 'react-router-dom';

import './sidebar.css';
import AddIcon from '../images/icons/add.svg';

const ProjectMenu = (props) => {
  const { projects, selectedProject, setSelectedProject } = props;
  const navigate = useNavigate();

  const getSelectedStyle = (id) => {
    return selectedProject === id ? 's-list selected' : 's-list';
  };

  return (
    <div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '10px'
      }}>
        <h2>MY PROJECTS</h2>
        <Link to='add-project'>
          <img className='add-project-btn' src={AddIcon} alt="" />
        </Link>
      </div>
      <div className='project-list'>
        {projects.map(project => (
          <div key={project._id} className={getSelectedStyle(project._id)} onClick={() => {
            setSelectedProject(project._id);
            navigate(`/projects/${project._id}`)
          }}>
            <span className="dot"></span>
            <div >{project.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectMenu;

import './sidebar.css';

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
        <span style={{
          fontSize: '16px',
          display: 'inline-block',
          padding: '8px 3px',
          border: '1px solid grey',
          borderRadius: '4px',
          lineHeight: '0.1'
        }}>+</span>
      </div>
      <div className='project-list'>
        <div className='s-list selected-project'>
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

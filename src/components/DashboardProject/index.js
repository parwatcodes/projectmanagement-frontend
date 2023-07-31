import React from "react";

import { useParams, useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import Select from 'react-select';

import './styles.css';
import * as fetch from '../../api/fetch';
import AddIcon from '../images/icons/add.svg';
import EditIcon from '../images/icons/edit.svg';
// import LinkIcon from '../images/icons/link.svg';
import * as apiMethods from './methods';

const DashboardProject = (props) => {
  const { projectId } = useParams();
  const [projectData, setProjectData] = React.useState([]);
  const [members, setMembers] = React.useState([]);
  const [showDropdown, setShowDropdown] = React.useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const { data, success } = await fetch.get(`/projects/${projectId}?all=true`);

        setProjectData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (projectId) {
      fetchProjectData();
    }
  }, [projectId]);

  React.useEffect(() => {
    apiMethods.fetchMembers()
      .then(({ data, success }) => {
        setMembers(data);
      })
      .catch(error => {
        console.error("Error fetching members: ", error);
      });
  }, [projectId]);

  React.useEffect(() => {
    const filteredMembers = members?.filter(member => !projectData?.projectMembers?.some(projMember => projMember._id === member._id));

    setMembers(filteredMembers);
  }, [projectData?.projectMembers, projectId]);

  const handleOptionChange = async (event) => {
    const memberId = event.target.value;

    apiMethods.addMemberToProject(projectId, memberId)
      .then(resp => {
        console.log('Added', resp);
      })
      .catch(error => console.log("error adding member: ", error));

    toggleDropdown();
  };

  return (
    <div className="project-label">
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '20px 0'
      }}>
        <div className="title" style={{
          display: 'flex'
        }}>
          <div>{projectData?.project?.name}</div>
          <div className='edit-btn-wrap' onClick={() => navigate(`/projects/${projectData.project._id}/edit`)}>
            <img className="edit-btn" src={EditIcon} alt="" />
          </div>
        </div>

        <div style={{
          display: 'flex'
        }}>
          <div className="invite-member">
            {/* <div id='btn' onClick={toggleDropdown}>
              <img src={AddIcon} alt="" />
              <p>Invite</p>

            </div> */}
            <div className="custom-seleect">
              <select onChange={handleOptionChange} className="select">
                <option value="" selected disabled> + Select a member</option>
                {members.map(member => (
                  <option className="option" key={member._id} value={member._id}>{member.fullname}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="members ">
            {projectData?.projectMembers?.map((member, idx) => (
              <a key={member._id} className="tooltip">
                <img src={`https://i.pravatar.cc/500?img=${idx}`} alt="" />
              </a>
            ))}
            <Tooltip
              style={{
                fontSize: '12px'
              }}
              id="registerTip"
              anchorSelect=".tooltip"
            // content="parwat kunwar"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="select-wrapper">
          <select id="filter-select">
            <option disabled value="option1">Filter</option>
            <option value="option1">To Do</option>
            <option value="option2">In Review</option>
            <option value="option3">In Progress</option>
            <option value="option3">Done</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DashboardProject;

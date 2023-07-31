import * as fetch from '../../api/fetch';

export async function fetchMembers() {
  try {
    let response = await fetch.get('/users?role=member');

    return response;
  } catch (error) {
    return error;
  }
}

export async function addMemberToProject(projectId, memberId) {
  try {
    let response = await fetch.post('/users/link-user-to-project', { projectId, memberId });

    return response;
  } catch (error) {
    return error;
  }
}

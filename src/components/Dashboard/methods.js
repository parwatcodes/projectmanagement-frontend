import * as fetch from '../../api/fetch';

export async function getTask() {
  try {
    let response = await fetch.get('/tasks');

    return response;
  } catch (error) {
    return error;
  }
}

export async function getTaskByProjectId(projectId) {
  try {
    let response = await fetch.get(`/projects/${projectId}/tasks`);

    return response;
  } catch (error) {
    return error;
  }
}

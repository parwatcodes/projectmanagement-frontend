import * as fetch from '../../api/fetch';

export async function addUser(data) {
  try {
    let response = await fetch.post('/users', data);

    return response;
  } catch (error) {
    return error;
  }
}

export async function updateUser(id, data) {
  try {
    let resp = await fetch.put(`/users/${id}`, data);

    return resp;
  } catch (error) {
    return error;
  }
}

export async function addProject(data) {
  try {
    let response = await fetch.post('/projects', data);

    return response;
  } catch (error) {
    return error;
  }
}

export async function updateProject(id, data) {
  try {
    let resp = await fetch.put(`/projects/${id}`, data);

    return resp;
  } catch (error) {
    return error;
  }
}

export async function getMembersByProject(projectId) {
  try {
    let resp = await fetch.get(`/projects/${projectId}/members`);

    return resp;
  } catch (error) {
    return error;
  }
}

export async function getProjects() {
  try {
    let resp = await fetch.get(`/projects`);

    return resp;
  } catch (error) {
    return error;
  }
}

export async function getProject(id) {
  try {
    let resp = await fetch.get(`/projects/${id}`);

    return resp;
  } catch (error) {
    return error;
  }
}

export async function addTask(data) {
  try {
    let resp = await fetch.post(`/tasks`, data);

    return resp;
  } catch (error) {
    return error;
  }
}

export async function updateTask(taskId, data) {
  try {
    let resp = await fetch.put(`/tasks${taskId}`, data);

    return resp;
  } catch (error) {
    return error;
  }
}

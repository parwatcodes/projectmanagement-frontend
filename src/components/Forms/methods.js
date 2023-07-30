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

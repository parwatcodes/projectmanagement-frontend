const BASE_URL = 'https://127.0.0.1';

const headers = {
  'Content-Type': 'application/json',
};

const checkStatus = (response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(response.statusText);
  }
};

export default async function fetchApi(url, options = {}) {
  const requestOptions = {
    headers: { ...headers, ...options.headers },
    ...options,
  };

  try {
    const response = await fetch(url, requestOptions);
    const data = await checkStatus(response);

    return data;
  } catch (error) {
    throw new Error(`API call failed: ${error.message}`);
  }
}

export const post = (url, data = {}, options = {}) => {

  return fetchApi(`${BASE_URL}${url}`, {
    ...options,
    method: 'POST',
    body: JSON.stringify(data),
  });
};

export const put = (url, data = {}, options = {}) => {
  return fetchApi(`${BASE_URL}${url}`, {
    ...options,
    method: 'PUT',
    body: JSON.stringify(data),
  });
};

export const del = (url, options = {}) => {
  return fetchApi(`${BASE_URL}${url}`, { ...options, method: 'DELETE' });
};

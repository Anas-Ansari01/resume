import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://coremobileapidev.hibiscushealth.com",
    // withCredentials: true, 
    // headers: {
    //   'Access-Control-Allow-Credentials': 'true',
    //   'Access-Control-Allow-Origin': 'https://localhost:3000', 
    //   'Access-Control-Allow-Methods': 'GET, DELETE, PATCH, POST, PUT',
    //   'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    // },
});

const setAuthorizationToken = () => {
  const token = localStorage.getItem('accessToken');

  if (token) {
    axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
  } else {
    axiosInstance.defaults.headers.Authorization = '';
  }
};

const executeRequest = (method, endPoint, body, successCallback, errorCallback) => {
  setAuthorizationToken();

  const config = {
    method,
    url: endPoint,
    data: body,
    params: method === 'GET' || method === 'DELETE' ? body : null,
  };

  axiosInstance(config)
    .then((response) => {
      successCallback(response);
    })
    .catch((error) => {
      errorCallback(error);
    });
};

const getAPI = (endPoint, body, successCallback, errorCallback) => {
  executeRequest('GET', endPoint, body, successCallback, errorCallback);
};

const postAPI = (endPoint, body, successCallback, errorCallback) => {
  executeRequest('POST', endPoint, body, successCallback, errorCallback);
};

const putAPI = (endPoint, body, successCallback, errorCallback) => {
  executeRequest('PUT', endPoint, body, successCallback, errorCallback);
};

const patchAPI = (endPoint, body, successCallback, errorCallback) => {
  executeRequest('PATCH', endPoint, body, successCallback, errorCallback);
};

const deleteAPI = (endPoint, body, successCallback, errorCallback) => {
  executeRequest('DELETE', endPoint, body, successCallback, errorCallback);
};

export { axiosInstance, getAPI, postAPI, putAPI, patchAPI, deleteAPI };

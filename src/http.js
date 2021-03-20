const axios = require('axios');

export const getUrl = (endpoint) =>{
  return `${process.env["BACKEND_URL"]}${endpoint}`;
}

export const postData = (url,data)=>{
  let request = axios.post(url,data);
  return request;
}
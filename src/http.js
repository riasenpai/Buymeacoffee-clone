const axios = require('axios');

export const getUrl = (endpoint) =>{
  return `${process.env["BACKEND_URL"]}:5000/`+endpoint;
}

export const postData = (url,data)=>{
  let request = axios.post(url,data);
  return request;
}
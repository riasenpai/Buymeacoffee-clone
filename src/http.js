const axios = require('axios');

export const getUrl = (endpoint) =>{
  return `http://${process.env["BACKEND_IP"]}:5000/`+endpoint;
}

export const postData = (url,data)=>{
  let request = axios.post(url,data);
  return request;
}
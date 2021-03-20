const axios = require('axios');

export const getUrl = (endpoint) =>{
  console.log(process.env)
  return `${process.env["REACT_APP_WEBSITE_NAME"]}${endpoint}`;
}

export const postData = (url,data)=>{
  let request = axios.post(url,data);
  return request;
}
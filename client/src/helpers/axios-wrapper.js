import { store } from "../store"
import axios from "axios";

export const axiosWrapper = {
  post,
  get
}

function post(url, body, header) {
  let headers;
  
  if(header){
    headers = {...header, ...authHeader()}
  } else {
    headers = {...authHeader()}
  }
  
  return axios.post(url, body, headers)
}

function get(url) {
  const headers = authHeader();
  return axios.get(url, { headers });
}

function authHeader() {
  const token = store.getState().auth.token
  if (token) {
    return { Authorization: `Bearer ${token}` }
  }
  return {}
}
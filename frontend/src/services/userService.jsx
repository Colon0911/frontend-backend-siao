import axios from "axios";

const API = "http://localhost:4000";

export const registerUser = async (user) => {
  const res = await axios.post(`${API}/register`, user);
  return res;
};

export const loginUser = async (user) => {
  console.log(user);
  return await axios.post(`${API}/login`, user);
};

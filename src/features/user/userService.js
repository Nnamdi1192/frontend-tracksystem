import axios from "axios";

console.log(process.env.REACT_APP_URL);

const getUsers = async () => {
  const users = axios.get(`${process.env.REACT_APP_URL}/api/user`);
  return [...(await users).data.data.users];
};

export { getUsers };

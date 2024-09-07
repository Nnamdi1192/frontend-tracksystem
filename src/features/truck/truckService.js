import axios from "axios";

const getTrucks = async () => {
  const response = await axios.get(`${process.env.REACT_APP_URL}/api/truck`);
  return [...response.data.data.truck];
};

export { getTrucks };

import { BASE_URL } from "./baseURL";
import axios from "axios";

//get
export const getAll = async (name) => {
  let globalData;
  let URL;
  if (!name) {
    URL = BASE_URL + "/services";
  } else {
    URL = BASE_URL + `/services?name=${name}`;
  }
  await axios.get(URL).then((res) => {
    globalData = res.data;
  });
  return globalData;
};

//delete
export const deleteById = (id) => {
  axios.delete(`${BASE_URL}/services/${id}`);
};

// post
export const postService = (payload) => {
  axios.post(`${BASE_URL}/services`, payload);
};

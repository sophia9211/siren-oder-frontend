import { API_URL } from "Config/Config.js";
import axios from "axios";
import { API_URLSEC } from "../Config/Config";

export const post = ({ path, body }) => {
  return axios.post(
    `${API_URL}/${path}`,
    body,
    {
      validateStatus: function(status) {
        return true;
      }
    }
    // ,{headers: { Authorization: localStorage.getItem() || "" }}
  );
};

export const get = ({ path }) => {
  return axios.get(`${API_URLSEC}/${path}`);
};

// 호출할 떄
// import {postA} from 'utils/api';
// post({
//   path: "categiry",
//   body: { email: this.state.email, password: this.state.password }
// });

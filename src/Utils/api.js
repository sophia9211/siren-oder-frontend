import { API_URL } from "Config/Config.js";
import axios from "axios";

// const post = ({ path, body }) => {
//   fetch(`${API_URL}/${path}`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ body })
//   })
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//     });
// };

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

export const get = ({ path, body }) => {
  axios
    .get(
      `${API_URL}/${path}`,
      body,
      {
        validateStatus: function(status) {
          return true;
        }
      }
      // ,{headers: { Authorization: localStorage.getItem() || "" }}
    )
    .then(function(response) {
      console.log(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
};

// 호출할 떄
// import {postA} from 'utils/api';
// post({
//   path: "categiry",
//   body: { email: this.state.email, password: this.state.password }
// });

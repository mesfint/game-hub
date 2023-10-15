import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9404485e97c3477ab388870284cc250c",
  },
});

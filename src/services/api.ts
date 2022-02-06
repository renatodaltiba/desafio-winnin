import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.reddit.com/r/reactjs",
});

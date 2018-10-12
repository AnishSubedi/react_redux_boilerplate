import { FETCH } from "./types";
import axios from "axios";

const ROOT_URL = "API_URL";
const API_KEY = "?key=YOUR_API_KEY";

export function fetchPosts() {
  const res = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH,
    payload: res
  };
}

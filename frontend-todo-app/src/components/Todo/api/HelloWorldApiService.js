import axios from "axios";

// export function retrieveHelloWorldPathVariable() {
//   const { username } = useParams();
//   return axios.get(`/hello-world/path-variable/${username}`);

const BASE_URL = "http://localhost:8080";

export const retrieveHelloWorldPathVariable = (username) =>
  axios.get(`${BASE_URL}/hello-world/path-variable/${username}`);

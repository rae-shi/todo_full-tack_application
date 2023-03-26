import axios from "axios";

// export function retrieveHelloWorldPathVariable() {
//   const { username } = useParams();
//   return axios.get(`/hello-world/path-variable/${username}`);

// const BASE_URL = "http://localhost:8080";
const apiClient = axios.create({
  baseURL: "http://localhost:8080",
});

export const retrieveAllTodosForUsernameApi = (username) =>
  apiClient.get(`/users/${username}/todos`);

export const deleteTodoApi = (username, id) =>
  apiClient.delete(`/users/${username}/todos/${id}`);

export const retrieveTodoApi = (username, id) =>
  apiClient.get(`/users/${username}/todos/${id}`);

export const updateTodoApi = (username, id, todo) =>
  apiClient.put(`/users/${username}/todos/${id}`, todo);

export const addTodoApi = (username, todo) =>
  apiClient.post(`/users/${username}/todos`, todo);

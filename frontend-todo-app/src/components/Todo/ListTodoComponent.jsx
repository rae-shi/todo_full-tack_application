import { useEffect, useState } from "react";
import {
  deleteTodoApi,
  retrieveAllTodosForUsernameApi,
} from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ListTodoComponent() {
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState(null);
  const authContext = useAuth();
  const username = authContext.username;
  const navigate = useNavigate();
  // const today = new Date();
  // const targetDate = new Date(
  //   today.getFullYear() + 1,
  //   today.getMonth(),
  //   today.getDay()
  // );
  // const todos = [
  // {
  //   id: 1,
  //   description: "AI",
  //   done: false,
  //   targetDate: targetDate,
  // },
  // {
  //   id: 2,
  //   description: "DevOP",
  //   done: false,
  //   targetDate: targetDate,
  // },
  // {
  //   id: 3,
  //   description: "CV",
  //   done: false,
  //   targetDate: targetDate,
  // },
  // ];

  useEffect(() => refreshTodos(), []);

  function refreshTodos() {
    retrieveAllTodosForUsernameApi(username)
      .then((response) => {
        // console.log(response);
        // console.log(typeof response.data[0].targetDate);
        setTodos(response.data);
      })
      .catch((error) => console.log(error));
  }

  function deleteTodo(id) {
    // console.log("delete" + id);
    deleteTodoApi(username, id)
      .then(() => {
        setMessage(`Delete of todo with id ${id} successful`);
        refreshTodos();
      })
      .catch((error) => console.log(error));
  }

  function updateTodo(id) {
    navigate(`/todo/${id}`);
  }

  function addNewTodo() {
    navigate(`/todo/-1`);
  }

  return (
    <div className="container">
      <h1>Todo Lists</h1>
      {message && <div className="alert alert-warning">{message}</div>}

      <div style={{ margin: "50px" }}>
        <table className="table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
              <th>Target Date</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                {/* <td>{todo.targetDate.toDateString()}</td> */}
                <td>{todo.targetDate.toString()}</td>
                <td>
                  <button
                    className="btn btn-warning m"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-success m"
                    onClick={() => updateTodo(todo.id)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="btn btn-success m-3" onClick={addNewTodo}>
        Add New Todo
      </div>
    </div>
  );
}

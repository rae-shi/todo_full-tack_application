import { useParams, Link, useNavigate } from "react-router-dom";
import { retrieveHelloWorldPathVariable } from "./api/HelloWorldApiService";
import { useState } from "react";

export default function WelcomeComponent() {
  const { username } = useParams();

  const [message, setMessage] = useState(null);

  const navigate = useNavigate();

  function handleClick() {
    navigate("/todos");
  }

  // const a = function callHelloWorldRestAPI() {
  //   retrieveHelloWorldPathVariable(username)
  //     .then((response) => successfulResponse(response))
  //     .catch((error) => errorResponse(error))
  //     .finally(() => console.log("clean up"));
  // };

  // function successfulResponse(response) {
  //   setMessage(response.data.message);
  //   console.log(response);
  // }

  // function errorResponse(error) {
  //   console.log(error);
  // }

  return (
    <div className="Welcome">
      <h1>Welcome {username}</h1>
      {/* <div>
        todo lists
        <Link to="/todos">Click here</Link>
      </div> */}
      <div>
        <button className="btn btn-success btn-lg m-5" onClick={handleClick}>
          Your Todo Lists
        </button>
      </div>
      <div className="text-info">{message}</div>
    </div>
  );
}

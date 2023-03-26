import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./security/AuthContext";

export default function LoginComponent() {
  const [username, setUsername] = useState("Rae");
  const [password, setPassword] = useState("");
  const [showErrorMessage, setErrorMessage] = useState(false);

  const navigate = useNavigate();
  const authContext = useAuth();

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    if (authContext.login(username, password)) {
      setErrorMessage(false);
      navigate(`/welcome/${username}`);
    } else {
      setErrorMessage(true);
    }
  }

  return (
    <div className="Login">
      {showErrorMessage && (
        <div className="errorMessage">Authentication Failed</div>
      )}

      <div className="LoginForm">
        <div>
          <h1>Login</h1>
          <label>User Name:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
      </div>
      <div>
        <button type="button" name="login" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </div>
  );
}

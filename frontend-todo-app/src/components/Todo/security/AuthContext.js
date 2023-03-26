import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);
// const authContext = useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);

  const [username, setUsername] = useState(null);
  //   setInterval(() => setNumber(number + 1), 10000);

  function login(username, password) {
    if (username === "Rae" && password === "123") {
      setUsername(username);
      setAuthenticated(true);
      return true;
    } else {
      setAuthenticated(false);
      setUsername(null);
      return false;
    }
  }

  function logout() {
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setAuthenticated, login, logout, username }}
    >
      {children}
    </AuthContext.Provider>
  );
}

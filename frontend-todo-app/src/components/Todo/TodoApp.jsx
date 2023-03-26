import LogoutComponent from "./LogoutComponent";
import ListTodoComponent from "./ListTodoComponent";
import TodoComponent from "./TodoComponent";
import HeaderComponent from "./HeaderComponent";
import WelcomeComponent from "./WelcomeComponent";
import ErrorComponent from "./ErrorComponent";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import AuthProvider from "./security/AuthContext";
import "./TodoApp.css";
import { useAuth } from "./security/AuthContext";

function AuthenticatedRoute({ children }) {
  const authContext = useAuth();
  if (authContext.isAuthenticated) {
    return children;
  }
  return <Navigate to="/"></Navigate>;
}

export default function TodoApp() {
  return (
    <div className="TodoApp">
      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent></HeaderComponent>
          <Routes>
            <Route path="/" element={<LoginComponent />}></Route>
            <Route path="/login" element={<LoginComponent />}></Route>

            <Route
              path="/welcome/:username"
              element={
                <AuthenticatedRoute>
                  <WelcomeComponent />
                </AuthenticatedRoute>
              }
            ></Route>
            <Route
              path="/todos"
              element={
                <AuthenticatedRoute>
                  <ListTodoComponent />
                </AuthenticatedRoute>
              }
            ></Route>
            <Route
              path="/todo/:id"
              element={
                <AuthenticatedRoute>
                  <TodoComponent />
                </AuthenticatedRoute>
              }
            ></Route>
            <Route
              path="logout"
              element={
                <AuthenticatedRoute>
                  <LogoutComponent />
                </AuthenticatedRoute>
              }
            ></Route>

            <Route path="*" element={<ErrorComponent />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      {/* <FooterComponent></FooterComponent> */}
    </div>
  );
}

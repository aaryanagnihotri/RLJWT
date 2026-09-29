import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { getToken, decodeToken, logout } from "./utils/auth";

// Runs when the app starts: checks localStorage for an existing token
function loadUserFromStorage() {
  const token = getToken();
  if (token) {
    return decodeToken(token); // returns { userId, role } or null
  }
  return null;
}

function App() {
  // If a valid token already exists, the user starts as logged in
  const [user, setUser] = useState(loadUserFromStorage);
  const [isLoggedIn, setIsLoggedIn] = useState(user !== null);
  const [message, setMessage] = useState("");

  const handleLoginSuccess = (token) => {
    setUser(decodeToken(token));
    setIsLoggedIn(true);
    setMessage("Login Successful");
  };

  const handleLogout = () => {
    logout(); // remove token from localStorage
    setUser(null);
    setIsLoggedIn(false);
    setMessage("");
  };

  return (
    <div className="container">
      {isLoggedIn ? (
        <Dashboard user={user} message={message} onLogout={handleLogout} />
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;

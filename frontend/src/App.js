import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";



import Landing from "./pages/Landing";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { setTheme, getInitialTheme } from "./theme";



function App() {
  // This inner component allows us to use useNavigate at the top level
  function AuthRedirector() {
    const navigate = useNavigate();
    useEffect(() => {
      // Check for a token or flag in localStorage (simulate sign-in persistence)
      const token = localStorage.getItem("freedomwall_token");
      if (token) {
        navigate("/signin", { replace: true });
      }
    }, [navigate]);
    return null;
  }

  // Dark mode state
  const [theme, setThemeState] = useState(getInitialTheme());

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <Router>
      <AuthRedirector />
  <div className="App min-h-screen transition-colors duration-300 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <button
          onClick={toggleTheme}
          className="fixed top-4 right-4 z-50 px-4 py-2 rounded bg-primary-500 text-white dark:bg-primary-900 dark:text-gray-100 shadow"
        >
          {theme === "dark" ? "🌙 Dark" : "☀️ Light"} Mode
        </button>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/wall" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

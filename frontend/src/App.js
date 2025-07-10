import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
        <Link to="/">Home</Link> | <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

 

  function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
  
    const handleLogin = async () => {
      try {
        const res = await axios.post("http://localhost:5000/api/login", {
          email,
          password,
        });
  
        setMessage("✅ Login successful!");
        console.log("Token:", res.data.token); // For now
        localStorage.setItem("token", res.data.token); // Optional
      } catch (err) {
        setMessage("❌ Login failed. " + (err.response?.data?.message || ""));
      }
    };
  
    return (
      <div style={{ padding: "20px" }}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: "block", marginBottom: "10px", width: "200px" }}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: "block", marginBottom: "10px", width: "200px" }}
        />
        <button onClick={handleLogin}>Login</button>
        {message && <p>{message}</p>}
      </div>
    );
  }
  


function Register() {
  return <h1>Register Page (coming next)</h1>;
}

export default App;
 

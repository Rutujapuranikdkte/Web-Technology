import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (username === "" || password === "") {
      alert("Fill all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // check if user already exists
    const userExists = users.find((u) => u.username === username);
    if (userExists) {
      alert("User already exists");
      return;
    }

    const newUser = { username, password };
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful");
    navigate("/");
  };

  return (
    <div className="login-box">
      <h2>Register</h2>

      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleRegister}>Register</button>

      <p onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        Already have account? Login
      </p>
    </div>
  );
}

export default Register;
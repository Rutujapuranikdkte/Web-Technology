import { useState } from "react"; //used to store input values
import { useNavigate } from "react-router-dom";//used to move to another page

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();//changing pages

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];//his line gets users from localStorage, converts them into array, and if no data exists, it returns an empty array

    const validUser = users.find(
      (u) => u.username === username && u.password === password //if register data match with login then valid
    );

    if (validUser) {
      localStorage.setItem("user", username);
      navigate("/quiz");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-box">
      <h2>Login</h2>

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

      <button onClick={handleLogin}>Login</button>

      <p onClick={() => navigate("/register")} style={{ cursor: "pointer" }}>
        New user? Register
      </p>
    </div>
  );
}

export default Login;
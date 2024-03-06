import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/api/v1/user/login",
        {
          email,
          password,
        }
      );
      console.log(response.json());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <div className="form-input-div">
          <input
            type="email"
            className="form-input-box"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.value.target)}
          />
          <label className="form-input-label">Email ID</label>
        </div>
        <div className="form-input-div">
          <input
            type="password"
            className="form-input-box"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.value.target)}
          />
          <label className="form-input-label">Password</label>
        </div>
        <button className="btn">Login</button>
        <Link to="/signup" className="form-link">
          New to FLIXXIT?
        </Link>
      </form>
    </>
  );
};

export default Login;

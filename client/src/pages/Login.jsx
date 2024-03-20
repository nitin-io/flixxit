import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { saveCredentials } from "../store/slices/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/users/signin", {
        email,
        password,
      });
      console.log(response);
      if (response.data.success) {
        const { user, token } = response.data;
        dispatch(saveCredentials({ user, token }));
        navigate("/home");
      } else {
        navigate("/login");
      }
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
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-input-label">Email ID</label>
        </div>
        <div className="form-input-div">
          <input
            type="password"
            className="form-input-box"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

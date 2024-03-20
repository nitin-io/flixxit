import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { saveCredentials } from "../store/slices/authSlice";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/users/signup", {
        name,
        email,
        password,
      });

      if (response.data.success) {
        const { user, token } = response.data;
        dispatch(saveCredentials({ user, token }));
        return navigate("/home");
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-input-div">
          <input
            type="text"
            className="form-input-box"
            placeholder=""
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
          <label className="form-input-label">Name</label>
        </div>
        <div className="form-input-div">
          <input
            type="email"
            className="form-input-box"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="form-input-label">Email ID</label>
        </div>
        <div className="form-input-div">
          <input
            type="password"
            className="form-input-box"
            placeholder=""
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <label className="form-input-label">Password</label>
        </div>
        <button type="submit" className="btn">
          Sign Up
        </button>
        <Link to="/signin" className="form-link">
          Already have an account?
        </Link>
      </form>
    </>
  );
};

export default SignUp;

import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://127.0.0.1:5000/api/v1/user/signup",
      {
        name,
        email,
        password,
      }
    );
    console.log(response);
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

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <form action="POST">
        <h2>Sign In</h2>
        <div className="form-input-div">
          <input type="text" className="form-input-box" placeholder="" />
          <label className="form-input-label">Email ID</label>
        </div>
        <div className="form-input-div">
          <input type="text" className="form-input-box" placeholder="" />
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

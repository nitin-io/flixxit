import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="background-image center">
      <form>
        <h2>Sign Up</h2>
        <div className="form-input-div">
          <input type="text" className="form-input-box" placeholder="" />
          <label className="form-input-label">Name</label>
        </div>
        <div className="form-input-div">
          <input type="text" className="form-input-box" placeholder="" />
          <label className="form-input-label">Email ID</label>
        </div>
        <div className="form-input-div">
          <input type="password" className="form-input-box" placeholder="" />
          <label className="form-input-label">Password</label>
        </div>
        <button className="btn">Sign Up</button>
        <Link to="/signin" className="form-link">
          Already have an account?
        </Link>
      </form>
    </div>
  );
};

export default SignUp;

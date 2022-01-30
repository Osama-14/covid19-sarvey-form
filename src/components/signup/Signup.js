import react from "react";
import Image from "../../images/COVID.png";
import Google from "../../images/google.png";

import "./signup.css";
const Signup = () => {
  return (
    <div className="container">
      <div className="signup-box">
        <div className="col-1">
          <img src={Image} />
        </div>
        <div className="col-2">
          <h2>Let's Start Today</h2>
          <span>
            Already have an account? <a href="#"> Login </a>
          </span>
          <a href="" className="google-link">
            <img src={Google} /> Continue with Google
          </a>
          <h4>or</h4>

          <form>
            <label>Your Name</label>
            <input type="text" placeholder="Name" className="input-field" />

            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input-field"
            />

            <label>Set Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input-field"
            />

            <div className="row">
              <input type="checkbox" />
              <span>
                {" "}
                I agree to the <a href="#"> terms and conditions</a>
              </span>
            </div>
            <button type="submit"> Register Now </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

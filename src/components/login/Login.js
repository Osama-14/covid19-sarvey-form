import react from "react";
import Image from "../../images/COVID.png"
import Google from "../../images/google.png"

const Login = () => {
  return (
    <div className="container">
    <div className="signup-box">
        <div className="col-1">
            <img src={Image}/>
        </div>
        <div className="col-2">
            <h2>Let's Start Today</h2>
            <span>Dont have account? <a href="#"> Signup  </a></span>
            <a href="" className="google-link">
                <img src={Google} /> Continue with Google
            </a>
            <h4>or</h4>

            <form>

                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" className="input-field" />

                <label>Set Password</label>
                <input type="password" placeholder="Enter Password" className="input-field" />

                <div className="row">
                    <input type="checkbox"  />
                    <span> I agree to the <a href="#"> terms and conditions</a></span>
                </div>
                <button type="submit"> Login </button>

            </form>

        </div>
    </div>

   

</div>
  )
  
};

export default Login;

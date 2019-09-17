import React, { useCallback, useContext } from "react";
import { withRouter, Redirect, Link } from "react-router-dom";
import app from "./base.js";
import { AuthContext } from "../contexts/Auth";

const Login = ({ history, location }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/app");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);
  const { from } = location.state ||  { from: { pathname:"/app" }}
 
  if (currentUser) {
    return <Redirect to={from} />;
  }

  return (
    <div className="login-Cont">
      <h1 className = "pinkBtnClr">Log in</h1>
      <p>Welcome Back</p>
      <form onSubmit={handleLogin} style={{width:'280px'}}>
        <div>
          <label>
            Email
          </label>
            {/* <input name="email" type="email" placeholder="Email" /> */}
            <input name = "email" className = "input" type = "email" placeholder="enter your username" />
        </div>
        
        <div className = "mTop-17" >
          <label>
            Password
          </label>
            {/* <input name="password" type="password" placeholder="Password" /> */}
            <input name="password" className="input" type="password" placeholder="enter your password" />
            <p className=" pinkBtnClr mTop-6">Forgot Password?</p>
        </div>

        <div className = "mTop-20 textAlignCnt" >
          <button type = "submit"
          className = "whiteTxt width100 pinkBtnBgClr button"
          style={{borderRadius:'10px'}}
          > Log in </button> 
        </div>
        {/* <button type="submit">Log in</button> */}

        <div className = "mTop-17 textAlignCnt" >
          < Link to = "/login"
          className = "whiteTxt width100 button is-link" 
          style = {{height: '36px', 
          borderRadius:'10px',
          fontSize: '14px'
          }}
          >
            Sign in with facebook
          </Link>
        </div> 
      </form>

      <div className = "mTop-100" >
        < p > Don 't have an account? <Link to = "/signup" className = "pinkBtnClr">Sign up</Link></p>  
      </div>
    </div>
  );
};

export default withRouter(Login);

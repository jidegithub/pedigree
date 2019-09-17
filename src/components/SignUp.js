import React, { useCallback } from "react";
import { withRouter, Link } from "react-router-dom";
import app from "./base";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
         .createUserWithEmailAndPassword(email.value, password.value).then((cred) => {
           app.firestore().collection('users').doc(cred.user.uid)
           .set({
             whatyoudo: "breeder"
           })
           .then(() => {
             history.push("/login")
           });
         });
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div className = "login-Cont">
      <h1 className = "pinkBtnClr"> Sign up </h1>
      <p>Connect, Share and Adopt</p>
      <form onSubmit = {handleSignUp} style = {{width: '280px'}}>
      <div>
          <label>
            Username
          </label>
            <input name = "username" className = "input" type = "text" placeholder = "username" />
        </div>

        <div className = "mTop-17">
          <label>
            Email
          </label>
            <input name = "email" className = "input" type = "email" placeholder = "Email" />
        </div>

        <div className = "mTop-17">
          <label>
            Password
          </label>
            <input name = "password" className = "input" type = "password" placeholder = "Password" />
        </div>
        <div className = "mTop-20 textAlignCnt">
          <button type="submit"
          className = "whiteTxt width100 pinkBtnBgClr button"
          style={{ borderRadius:'10px'}} 
          >
            Sign Up</button>
        </div>

        <div className = "mTop-17 textAlignCnt" >
          < Link to = "/login"
          className = "whiteTxt width100 button is-link" 
          style = {{height: '36px', 
          borderRadius:'10px',
          fontSize: '14px'
          }}
          >
            Sign up with facebook
          </Link>
        </div>   
      </form>

      <div className = "mTop-100" >
        <p>Have an account? <Link to = "/login" className = "pinkBtnClr">Sign in</Link></p>  
      </div>
    </div>
  );
};

export default withRouter(SignUp);


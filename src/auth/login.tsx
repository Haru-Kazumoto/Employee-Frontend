import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import { AlertColor, Snackbar } from "@mui/material";
import "./style.css";
import {SignIn} from "../service/SignIn.tsx";

const Login = () => {
  const [loginDetail, setLoginDetail] = useState({
    email: '',
    password: '',
  });

  const[alert, setAlert] = useState<{open : boolean,content : string,type:AlertColor|undefined}>({
    open : false,
    content : "",
    type:undefined
  });

  const handleChange=(event: any, field: any) =>{
    let actualValue = event.target.value
    setLoginDetail(
      {
        ...loginDetail,
        [field]:actualValue
      }
    )
  }

  const handleFormSubmit=(event: any) => {
    event.preventDefault();
    console.log(loginDetail);

    if(loginDetail.email.trim() ==='' || loginDetail.password.trim() ===''){
      setAlert({
        open : true,
        content : "Field Cannot be empty !",
        type:"error"
      })
    }

    //Submit data
    SignIn(loginDetail).then((data) => {
      console.log("User login : ");
      console.log(data);
      setAlert({
        open: true,
        content: "Login success!",
        type: "success"
      })
      
    }).catch(err => { 
      console.log(err);
      if(err.response.status === 400){
        setAlert({
          open: true,
          content: "Bad Credentials",
          type: "error"
        })
      }
    })
  }

const onHandleClose = () => {
  setAlert({
    open : false,
    content : alert.content,
    type: undefined
  })
}

  return (
    <>
    <Snackbar open={alert.open} autoHideDuration={2000} onClose={onHandleClose} anchorOrigin={
      {vertical : "top",horizontal : "center"}}>
      <Alert severity={alert.type}>{alert.content}</Alert>
    </Snackbar> 
    <div className="container">
      
      <div className="login-left">
        {/* Header */}
        <div className="login-header">
          <h1>Welcome back!</h1>
          <p>Enter your credential</p>
        </div>

        {/* Form */}
        <form className="login-form" onSubmit={handleFormSubmit}>
          {/* Form content */}
          <div className="login-form-content">
            {/* Email input box */}
            <div className="form-item">
              <label htmlFor="email">Email</label>
              <input 
              type="text" 
              id="email" 
              value={loginDetail.email} 
              onChange={(e) => handleChange(e, 'email')}/>
            </div>

            {/* Password input box */}
            <div className="form-item">
              <label htmlFor="password">Password</label>
              <input 
              type="password" 
              id="password" 
              value={loginDetail.password}
              onChange={(e) => handleChange(e, 'password')}
              />
            </div>

            <div className="form-item">
              <div className="checkbox">
                <input type="checkbox" id="rememberMeCheckbox" />
                <label htmlFor="rememberMeCheckBox" className="checkBoxLabel">
                  Remember me
                </label>
              </div>
            </div>
            <button type="submit">Sign In</button>
            <a href="/register" className="redirect">Don't have account? Sign up now!</a>
          </div>
        </form>
      </div>
      <div className="login-right">
        <img src="/person-managing-it-settings.png" alt="" />
      </div>
    </div>
    </>
  );
};

export default Login;

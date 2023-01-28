import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";
import "./style.css";
import {SignIn} from "../service/SignIn.tsx";

const Login = () => {
  const [loginDetail, setLoginDetail] = useState({
    username: '',
    password: '',
  });

  const[alert, setAlert] = useState<{open : boolean,content : string}>({
    open : false,
    content : "" 
  });

  // const[notify, setNotify] = useState<{type: string}>({
  //   type:""
  // });

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

    if(loginDetail.username.trim() ==='' || loginDetail.password.trim() ===''){
      setAlert({
        open : true,
        content : "Field Cannot be empty !"
      })
    }

    //Submit data
    SignIn(loginDetail).then((jwtTokenData) => {
      console.log("User login : ");
      console.log(jwtTokenData);
    }).catch(err => { 
      console.log(err);
      if(err === 400 || err === 404){
        setAlert({
          open: true,
          content: "There is something trouble with server..."
        })
      } else {
        setAlert({
          open: true,
          content: "Credential is wrong!"
        })
      }
    })
  }

const onHandleClose = () => {
  setAlert({
    open : false,
    content : alert.content
  })
}

  return (
    <>
    <Snackbar open={alert.open} autoHideDuration={2000} onClose={onHandleClose} anchorOrigin={
      {
        vertical : "top",
        horizontal : "center"
      }
    }>
      <Alert severity="error">{alert.content}</Alert>
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
              value={loginDetail.username} 
              onChange={(e) => handleChange(e, 'username')}/>
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
          </div>
        </form>
      </div>
      <div className="login-right">
        <img src="/image.png" alt="" />
      </div>
    </div>
    </>
  );
};

export default Login;

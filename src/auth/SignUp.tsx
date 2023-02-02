import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import { AlertColor, Snackbar } from "@mui/material";
import "./SignUp.css";
import { Register } from "../service/Register.tsx";
import Login from "./login.tsx";

const SignUp = () => {
  const [register, setregister] = useState({
    username: '',
    email: '',
    password: '',
    role: '',
  });

  const[alert, setAlert] = useState<{open : boolean,content : string,type:AlertColor|undefined}>({
    open : false,
    content : "",
    type:undefined
  });

  const handleChange=(event: any, field: any) =>{
    let actualValue = event.target.value
    setregister(
      {
        ...register,
        [field]:actualValue
      }
    )
  }

  const handleFormSubmit=(event: any) => {
    event.preventDefault();

    if(register.username.trim() === '' || 
    register.email.trim() === '' ||
    register.password.trim() === '' ||
    register.role.trim() === ''){
      setAlert({
        open : true,
        content : "Field Cannot be empty !",
        type:"error"
      })
    }

    if(register.email === register.email){
      setAlert({
        open: true,
        content: "Email has been used!",
        type: "error"
      })
    }

    if(register.role !== 'ADMIN' && register.role !== 'SUPERADMIN'){
      setAlert({
        open : true,
        content : "Invalid Role!",
        type:"error"
      })
    }

    //Submit data
    Register(register).then((data) => {
      console.log(data);
      if(data.status === 200){
        setAlert({
          open: true,
          content: "Register success!",
          type: "success"
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
          <h1>Hi! Let's get started.</h1>
        </div>

        {/* Form */}
        <form className="login-form" onSubmit={handleFormSubmit}>
          {/* Form content */}
          <div className="login-form-content">
            {/* Username input box */}
            <div className="form-item">
              <label htmlFor="username">Username</label>
              <input 
              required
              type="text" 
              id="username" 
              value={register.username} 
              onChange={(e) => handleChange(e, 'username')}/>
            </div>
            {/* Email input box */}
            <div className="form-item">
              <label htmlFor="email">Email</label>
              <input 
              required
              type="text" 
              id="email" 
              value={register.email} 
              onChange={(e) => handleChange(e, 'email')}/>
            </div>

            {/* Password input box */}
            <div className="form-item">
              <label htmlFor="password">Password</label>
              <input 
              required
              type="password" 
              id="password" 
              value={register.password}
              onChange={(e) => handleChange(e, 'password')}
              />
            </div>
            {/* Role input box
            <div className="form-item">
              <label htmlFor="role">Role</label>
              <select name="roles" id="roles" required>
                <option value="admin">ADMIN</option>
                <option value="superadmin">SUPERADMIN</option>
              </select>
            </div> */}
            {/* Role input box */}
            <div className="form-item">
              <label htmlFor="role">Role</label>
              <input 
              required
              type="text" 
              id="roles" 
              value={register.role}
              onChange={(e) => handleChange(e, 'role')}
              />
            </div>
            <button type="submit">Sign In</button>
            <a href="/" className="redirect">Have an account? Sign in now!</a>
          </div>
        </form>
      </div>
      <div className="login-right">
        <img src="/person-learning-online.png" alt="" />
      </div>
    </div>
    </>
  );
};

export default SignUp;

import { Alert, Snackbar } from '@mui/material';
import React, { useState } from 'react'

const Notification = (props) => {

    const {notify, setNotify} = props;

    const[alert, setAlert] = useState<{open : boolean,content : string}>({
        open : false,
        content : "" 
    });

    const onHandleClose = () => {
        setAlert({
          open : false,
          content : alert.content
        })
      }

  return (
    <Snackbar open={alert.open} autoHideDuration={2000} onClose={onHandleClose} anchorOrigin={
        {
          vertical : "top",
          horizontal : "center"
        }
      }>
        <Alert severity="error">{alert.content}</Alert>
      </Snackbar> 
  )
}

export default Notification

import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert'; 


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackBar = ({setOpen, open}) => {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        } 
        setOpen(false);
      };

    
  return ( 
    <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
    <Alert onClose={handleClose} severity="success"  >
      Product added successfully
    </Alert>
  </Snackbar> 

  )
}

export default SnackBar
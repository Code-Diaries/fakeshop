import React, { useState} from "react";
 import { useNavigate } from "react-router-dom";
 import { useFormik } from "formik";
import * as yup from "yup";
 import loadingGif from "../assets/loading.gif";
import googlePng from "../assets/google.png";
import {
  Avatar,
  Button,
  CssBaseline,
  Grid,
  Paper,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {logIn, signUpWithGoogle } from "../auth/firebase";
 

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Invalid email.")
    .min(2, "Email should be of minimum 2 characters length.")
    .required("Email is required"),
  password: yup.string("Enter your password").required("Password is required"),
});

const styles = {
  root: {
    "& .MuiPaper-root": {
      borderRadius: "10px",
      boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75);",
      height: "fit-content",
      marginTop: 10,
      maxWidth: "500px",
    },
  }, 
  paper: {
    padding: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    width: 200,
    height: 200,
    backgroundColor: "#046582",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: 1,
  },
  submit: {
    marginTop: 3,
    backgroundColor: "grey",
    color: "white",
    fontWeight: "bold",
      "&:hover": {
        backgroundColor: "orange",
        color: "black"
      },
  },
  header: {
    fontFamily: "Girassol",
    textAlign: "center",
    color: "grey",
  },
  loadingGif: {
    width: 75,
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  bottomLink: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  googleImg: {
    width: 75,
    marginLeft: 10,
  },
  googleBtn: {
    backgroundColor: "white",
    color: "orange",
    fontWeight: "bold",
    marginTop: 3,
    "&:hover": {
      backgroundColor: "white",
    },
  },
};

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);


  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (e, values) => {
      e.preventDefault();
      setLoading(true);
      try {
        const email = values.email
        const password = values.password
        logIn(email, password, navigate);
        //navigate("/");
       // toastSuccessNotify("Logged in successfully!");
      } catch (error) {
        //toastErrorNotify(error.message);
      }

      setLoading(false);
    },
  });

  const handleGoogleProvider = (e) => {
    e.preventDefault();
    signUpWithGoogle(navigate);

  };
   

  return (
    <Grid container component="main" sx={styles.root}>  
      <CssBaseline />
      <Grid container justifyContent="center" sx={styles.image}>  
         <Grid item xs={12} sm={8} md={5} m={5} component={Paper} elevation={6} square> 
           <Box sx={styles.paper}>
            <Avatar sx={styles.avatar}>
              <img src={AccountCircleIcon} alt="candela" />
            </Avatar>
            <Typography sx={styles.header} component="h1" variant="h5">
              ── Login ──
            </Typography>
            <form sx={styles.form} onSubmit={formik.handleSubmit}>
              <TextField
              sx={{color : "grey"}}
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoFocus
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                sx={{color : "grey"}}
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              {loading ? (
                <div sx={styles.loadingContainer}>
                  <img src={loadingGif} alt="Loading" sx={styles.loadingGif} />
                </div>
              ) : (
                <>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={styles.submit}
                  >
                    LogIn
                  </Button>
 
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={handleGoogleProvider}
                    sx={styles.googleBtn}
                  >
                    With{" "}
                    <img
                      src={googlePng}
                      alt="google"
                      style={styles.googleImg}
                    />
                  </Button>
                </>
              )}
            </form>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Login;

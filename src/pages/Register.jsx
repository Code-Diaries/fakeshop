import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { toastSuccessNotify, toastErrorNotify } from "../helpers/ToastNotify";
import { useFormik } from "formik";
import * as yup from "yup";
import loadingGif from "../assets/loading.gif";
import googlePng from "../assets/google.png";
import { Avatar, Button, CssBaseline, Grid, Paper, TextField, Typography, Box, } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { createUser, signUpWithGoogle } from "../auth/firebase";
import { grey } from "@mui/material/colors";





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
      borderRadius: "30px",
      //   boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75);",
      height: "fit-content",
      marginTop: 10,
      maxWidth: "500px",
      border: "solid 5px orange",
    },
  },
  image: {
    //     backgroundImage: "url(https://picsum.photos/1600/900)",
    //     backgroundRepeat: "no-repeat",
    backgroundColor: grey[400],
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     width: "100%",
    //     paddingTop: "40px",
  },
  paper: {
    padding: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: grey[200],
    borderRadius: "30px",

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

function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);




  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (e, values) => {
      e.preventDefault();
      console.log(values)

      setLoading(true);
      try {
        const email = values.email
        const password = values.password
        const displayName = values.displayName

        createUser(email, password, navigate, displayName);
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

  //   useEffect(() => {
  //     if (currentUser) {
  //       navigate("/");
  //     }
  //      console.log({ currentUser });
  //   }, [currentUser, navigate]);

  return (
    <Grid container component="main" sx={styles.root}>
      {/* //ana konteynr  */}
      <CssBaseline />
      <Grid container justifyContent="center" sx={styles.image}>
        {/* // büyük bgfoto nun olduğu yer  */}
        <Grid item xs={12} sm={8} md={5} m={5} component={Paper} square>
          {/* //* paper şeklind companent kabartmayı sağlıyor carddan farkı elevetion kabartma miktarını  squer şeklini  */}
          <Box sx={styles.paper}>
            <Avatar sx={styles.avatar}>
              <img src={AccountCircleIcon} alt="user" />
            </Avatar>
            <Typography sx={styles.header} component="h1" variant="h5">
              ── Register ──
            </Typography>
            <form sx={styles.form} onSubmit={formik.handleSubmit}>
              <TextField
                sx={{ color: "grey" }}
                variant="outlined"
                margin="normal"
                fullWidth
                id="displayName"
                label="displayName"
                name="displayName"
                autoComplete="displayName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                autoFocus
                value={formik.values.displayName}
                error={formik.touched.displayName && Boolean(formik.errors.displayName)}
                helperText={formik.touched.displayName && formik.errors.displayName}
              />
              <TextField
                sx={{ color: "grey" }}
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
                sx={{ color: "grey" }}
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
                    SıgnIn
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

export default Register;
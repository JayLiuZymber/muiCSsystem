import * as React from "react";
import { useState } from 'react';
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Slide from '@mui/material/Slide';
import MuiAlert from '@mui/material/Alert';

// router
import { useNavigate, useLocation } from "react-router-dom";
// redux
import {  useDispatch } from "react-redux";
import { setUserInfo, setIsLogin } from "../store/mainSlice";

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Title() {
  return (
    <Typography
      variant="h4"
      color="#5D737E"
      sx={{
        marginLeft: 4,
        marginTop: 2,
      }}
    >
      CS <br />
      Admin <br />
      System
    </Typography>
  );
}

function Copyright(props) {
  return (
    <Typography
      variant="h6"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"CS System"}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const [values, setValues] = useState({
    access_token: "",
    cs_id: "",
    password: "",
  });
  const [errorTextID, setErrorTextID] = useState([]);
  const [bFocusID, setFocusID] = useState(false);
  const [errorTextPassword, setErrorTextPassword] = useState([]);
  const [bFocusPassword, setFocusPassword] = useState(false);

  // snackbar
  const [openLoginError, setOpenLoginError] = React.useState(false);
  const [openLoginSuccess, setOpenLoginSuccess] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  const handleCheck = () => {
    // setTransition(() => Transition);
    // setOpenLoginSuccess(true);
  };

  const handleClose = () => {
    // setOpenLoginSuccess(false);
  };

  const handleChange = (prop) => (event) => {
    // console.log('event.target.value', event.target.value);
    setValues({ ...values, [prop]: event.target.value });
    setErrorTextID([]);
    setErrorTextPassword([]);
  };

  const handleFocusID = () => {
    setFocusID(true);
  };

  const handleFocusPassword = () => {
    setFocusPassword(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      cs_id: data.get("cs_id"),
      password: data.get("password"),
    });
    // console.log(values);

    const csid = data.get("cs_id");
    const pw = data.get("password");
    if (csid === '')
      setErrorTextID(["CS ID can not be empty"]);
    if (pw === '')
      setErrorTextPassword(["Password can not be empty"]);
    if (csid !== '' && pw !== '') {
      login();
    }
  };

  // router
  const { state } = useLocation();
  // console.log('state', state);
  const navigate = useNavigate();
  // redux
  const dispatch = useDispatch();

  const login = () => {
    // console.log('>login')
    dispatch(
      setUserInfo({
        access_token: "f6ddee55-4168-11ec-9d26-02691930da90",
        // company: "testcc",
        // email: "test1",
        name: "cs2",
        cs_id: "cs-111111",
      })
    );

    dispatch(setIsLogin({
      value: true
    }))

    navigate("/", { state: { showSnackbar: true } });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* CS box */}
      <Box>
        <Title />
      </Box>

      {/* Sigin in box */}
      <Box
        sx={{
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
          paddingLeft: "50%",
          alignSelf: "center",
          display: "flex",
          flexDirection: "column",
          bgcolor: "#5D737E",
          color: "#fff",
          // height: "70%",
          height: 300,
        }}
      >
        <br /><br /><br />
        <Typography component="h1" variant="h4">
          Sing In
        </Typography>
        <Typography component="h1" variant="h6">
          Use your Account to continue.
        </Typography>
      </Box>

      {/* Login box */}
      <Box
        component="div"
        bgcolor={'#fff'}
        sx={{
          position: "absolute",
          top: 160,
          marginTop: 4,
          marginLeft: 16,
          display: "flex",
          flexDirection: "column",
          padding: 2,
          borderStyle: 'solid',
          borderWidth: '1px',
          width: 300,
          maxWidth: "40%",
          height: 400,
        }}
      >
        <Typography component="h1" variant="h5">
          LOG IN
        </Typography>
        <Box
          component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            variant="standard"
            required
            fullWidth
            id="email"
            label="CS ID"
            name="cs_id"
            autoComplete="cs_id"
            autoFocus
            onChange={handleChange("cs_id")}
            onFocus={handleFocusID}
            error={bFocusID && Boolean(errorTextID.length)}
            helperText={bFocusID && errorTextID[0]}
          />
          <TextField
            margin="normal"
            variant="standard"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange("password")}
            onFocus={handleFocusPassword}
            error={bFocusPassword && Boolean(errorTextPassword.length)}
            helperText={bFocusPassword && errorTextPassword[0]}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: "#63B1A9" }}
            disabled={Boolean(errorTextID.length) || Boolean(errorTextPassword.length)}
          >
            Login
          </Button>
        </Box>
      </Box>

      <Copyright sx={{ mt: 8, mb: 4 }} />
      {/* <Snackbar
        open={openLoginError}
        onClose={handleClose}
        TransitionComponent={transition}
        autoHideDuration={5000}
        // key={transition ? transition.name : ''}
        sx={{ width: '100%' }}
      >
        <Alert severity="Error" sx={{ width: '100%' }}>
          ID or Password Error!
        </Alert>
      </Snackbar> */}
    </ThemeProvider>
  );
}

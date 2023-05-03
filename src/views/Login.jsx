import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      <h2>{'CS System'}</h2>
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('cs_id'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ml:4}}>
        <h1>CS <br /> Admin <br /> System</h1>
      </Box>
      <Container component="main" maxWidth="xs">
        <Box
          component="button"
          sx={{
            marginTop: 2,
            ml: 8,
            display: 'flex',
            flexDirection: 'column',
            padding: 'inherit',
            // alignItems: 'center',
            // border: '1px #BEC6CA',
          }}
        >
          <Typography component="h1" variant="h5">
            LOG IN
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              variant='standard'
              required
              fullWidth
              id="email"
              label="CS ID"
              name="cs_id"
              autoComplete="cs_id"
              autoFocus
            />
            <TextField
              margin="normal"
              variant='standard'
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: '#63B1A9'}}
            >
              Login
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            bgcolor: '#5D737E',
            color: '#fff',
            padding: 'inherit',
          }}
        >
          <Typography component="h2" variant="h6">
            Sing In <br /> <h5>Use your Account to continue.</h5>
          </Typography>
        </Box>

        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

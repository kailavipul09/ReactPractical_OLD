import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

  
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
export default class Login extends Component {
    render() {

        return (
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div >
             
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form  noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
 
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary">
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="/forgot-password"  variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                 
                </Grid>
              </form>
            </div>

          </Container>
        );
    }
}

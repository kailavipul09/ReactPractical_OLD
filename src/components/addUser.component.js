import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class addUser extends Component {
    render() {
        return (
            <React.Fragment>
              <Typography variant="h6" gutterBottom>
               Add User
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="txtname"
                    name="name"
                    label="Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="txtemail"
                    name="email"
                    label="Email"
                    fullWidth
                    autoComplete="Email-Id"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="txtphone"
                    name="phone"
                    label="Phone"
                    fullWidth
                    autoComplete="given-phone"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="txtpassword"
                    name="password"
                    label="Password"
                    fullWidth
                    autoComplete="password"
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary">
                 Add User
                </Button>
                </Grid>
              </Grid>
              
            </React.Fragment>
          );
        
    }
}
import React from "react";
import { Grid, Paper, Avatar, Typography, TextField } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
const AdminSignUp = () => {
  const paperStyle = {
    padding: "30px 20px",
    width: 300,
    margin: "20px auto",
  };
  const headerStyle = {
    margin: 0,
  };
  const avatarStyle = {
    backgroundColor: "green",
  };
  const marginTop = {
    marginTop: 5,
  };
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineIcon />
          </Avatar>

          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption">
            Please fill this form to create an admin account
          </Typography>
        </Grid>
        <form>
          <TextField fullWidth label="Enter First Name"></TextField>
          <TextField fullWidth label="Enter Last Name"></TextField>
          <TextField fullWidth label="Enter Email" type="email"></TextField>
          <FormControl style={marginTop}>
            <FormLabel id="demo-radio-buttons-group-label">
              Please select your profession
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Doctor"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="Doctor"
                control={<Radio />}
                label="Doctor"
              />
              <FormControlLabel
                value="Immigration Officer"
                control={<Radio />}
                label="Immigration Officer"
              />
              <FormControlLabel
                value="Health Offical"
                control={<Radio />}
                label="Health Offical"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            fullWidth
            label="Enter Password"
            type="password"
          ></TextField>
          <TextField
            fullWidth
            label="Re-enter Password"
            type="password"
          ></TextField>
          <Button type="submit" variant="contained" color="primary" >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};
export default AdminSignUp;
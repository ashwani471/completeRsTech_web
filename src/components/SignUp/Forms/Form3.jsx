import React from "react";
import {
  Box,
  Grid,
  TextField,
  Input,
  InputAdornment,
  Typography,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  inputField: {
    border: "5px solid white",
    backgroundColor: "#edf0f2",
    borderRadius: "12px",
    height: "60px",
  },
  icon: {
    paddingLeft: "10px",
    paddingRight: "20px",
  },
  maincontainer: {
    border: "1px solid gray",
    borderRadius: "10px",
    padding: "5px",
  },
  formcontain: {
    marginTop: "25px",
    border: "1px solid #e8e8e8",
    borderRadius: "10px",
    padding: "15px",
  },
});

function Form3({ formdata, formhandlechange }) {
  const classes = useStyles();
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    formhandlechange(name, value);
  };

  return (
    <Grid container style={{ marginTop: "-20px" }}>
      <Grid item xs={12}>
        <Typography style={{ fontWeight: "bold" }}>
          Logistics Coordinator
        </Typography>
      </Grid>
      <Grid container className={classes.formcontain}>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={12}>
              <Typography>First Name</Typography>
            </Grid>
            <Grid item xs={12}>
              <Input
                className={classes.inputField}
                id="input-with-icon-adornment"
                placeholder="Peter"
                fullWidth="true"
                name="coordinator_first_name"
                disableUnderline={true}
                startAdornment={
                  <InputAdornment position="start">
                    <div className={classes.icon}>
                      <PersonIcon />
                    </div>
                  </InputAdornment>
                }
                value={formdata.coordinator_first_name}
                onChange={handlechange}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={12}>
              <Typography>Surname</Typography>
            </Grid>
            <Grid item xs={12}>
              <Input
                className={classes.inputField}
                id="input-with-icon-adornment"
                placeholder="Parker"
                fullWidth="true"
                name="coordinator_last_name"
                disableUnderline={true}
                startAdornment={
                  <InputAdornment position="start">
                    <div className={classes.icon}>
                      <PersonIcon />
                    </div>
                  </InputAdornment>
                }
                value={formdata.coordinator_last_name}
                onChange={handlechange}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Typography>Your e-mail address</Typography>
            </Grid>
            <Grid item xs={12}>
              <Input
                className={classes.inputField}
                id="input-with-icon-adornment"
                placeholder="peter@marvel.com"
                fullWidth="true"
                name="coordinator_email"
                disableUnderline={true}
                startAdornment={
                  <InputAdornment position="start">
                    <div className={classes.icon}>
                      <EmailIcon />
                    </div>
                  </InputAdornment>
                }
                value={formdata.coordinator_email}
                onChange={handlechange}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <Typography>Phone Number</Typography>
            </Grid>
            <Grid item xs={12}>
              <Input
                className={classes.inputField}
                id="input-with-icon-adornment"
                placeholder="+91 987-654-3210"
                fullWidth="true"
                name="coordinator_mobile"
                disableUnderline={true}
                startAdornment={
                  <InputAdornment position="start">
                    <div className={classes.icon}>
                      <PhoneIcon />
                    </div>
                  </InputAdornment>
                }
                value={formdata.coordinator_mobile}
                onChange={handlechange}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Form3;

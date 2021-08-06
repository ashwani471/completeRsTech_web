import React from "react";
import {
  Grid,
  Typography,
  Input,
  InputAdornment,
  makeStyles,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles({
  inputField: {
    border: "5px solid white",
    backgroundColor: "#edf0f2",
    borderRadius: "12px",
    height: "60px",
  },
});
const Form3 = ({ formdata3, formhandlechange3 }) => {
  const classes = useStyles();
  const handlechange = (e) => {
    // console.log(e.target.value);
    formhandlechange3(e.target.name, e.target.value);
  };
  return (
    <>
      <Typography>Fill up details for Supervisor 1</Typography>
      <Grid container>
        <Grid item xs={6}>
          <Typography>Name</Typography>
          <Input
            className={classes.inputField}
            id="input-with-icon-adornment"
            name="supervisor_name"
            placeholder="Enter your company's registered name"
            value={formdata3.supervisor_name}
            fullWidth={true}
            disableUnderline={true}
            onChange={handlechange}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography>Email</Typography>
          <Input
            className={classes.inputField}
            id="input-with-icon-adornment"
            name="supervisor_email"
            placeholder="Enter your company's registered name"
            value={formdata3.supervisor_email}
            fullWidth={true}
            disableUnderline={true}
            onChange={handlechange}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography>Contact Number</Typography>
          <Input
            className={classes.inputField}
            id="input-with-icon-adornment"
            name="supervisor_contact"
            placeholder="Enter your company's registered name"
            value={formdata3.supervisor_contact}
            fullWidth={true}
            disableUnderline={true}
            onChange={handlechange}
          />
        </Grid>
      </Grid>

      <Typography>Fill up details for Supervisor 2</Typography>
      <Grid container>
        <Grid item xs={6}>
          <Typography>Name</Typography>
          <Input
            className={classes.inputField}
            id="input-with-icon-adornment"
            name="supervisor2_name"
            placeholder="Enter your company's registered name"
            value={formdata3.supervisor2_name}
            fullWidth={true}
            disableUnderline={true}
            onChange={handlechange}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography>Email</Typography>
          <Input
            className={classes.inputField}
            id="input-with-icon-adornment"
            name="supervisor2_email"
            placeholder="Enter your company's registered name"
            value={formdata3.supervisor2_email}
            fullWidth={true}
            disableUnderline={true}
            onChange={handlechange}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography>Contact Number</Typography>
          <Input
            className={classes.inputField}
            id="input-with-icon-adornment"
            name="supervisor2_contact"
            placeholder="Enter your company's registered name"
            value={formdata3.supervisor2_contact}
            fullWidth={true}
            disableUnderline={true}
            onChange={handlechange}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Form3;

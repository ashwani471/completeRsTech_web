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
const Form4 = ({ formdata4, formhandlechange4 }) => {
  const classes = useStyles();
  const handlechange = (e) => {
    // console.log(e.target.value);
    formhandlechange4(e.target.name, e.target.value);
  };
  return (
    <>
      <Typography>Fill up details for Coordinator 1</Typography>
      <Grid container>
        <Grid item xs={6}>
          <Typography>Name</Typography>
          <Input
            className={classes.inputField}
            id="input-with-icon-adornment"
            name="coordinator_name"
            placeholder="Enter your company's registered name"
            value={formdata4.coordinator_name}
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
            name="coordinator_email"
            placeholder="Enter your company's registered name"
            value={formdata4.coordinator_email}
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
            name="coordinator_contact"
            placeholder="Enter your company's registered name"
            value={formdata4.coordinator_contact}
            fullWidth={true}
            disableUnderline={true}
            onChange={handlechange}
          />
        </Grid>
      </Grid>

      <Typography>Fill up details for Coordinator 2</Typography>
      <Grid container>
        <Grid item xs={6}>
          <Typography>Name</Typography>
          <Input
            className={classes.inputField}
            id="input-with-icon-adornment"
            name="coordinator2_name"
            placeholder="Enter your company's registered name"
            value={formdata4.coordinator2_name}
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
            name="coordinator2_email"
            placeholder="Enter your company's registered name"
            value={formdata4.coordinator2_email}
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
            name="coordinator2_contact"
            placeholder="Enter your company's registered name"
            value={formdata4.coordinator2_contact}
            fullWidth={true}
            disableUnderline={true}
            onChange={handlechange}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Form4;

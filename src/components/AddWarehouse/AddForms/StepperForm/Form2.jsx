import React from "react";
import {
  Grid,
  Typography,
  Input,
  InputAdornment,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  inputField: {
    border: "5px solid white",
    backgroundColor: "#edf0f2",
    borderRadius: "12px",
    height: "60px",
  },
});

const Form2 = ({ formdata2, formhandlechange2 }) => {
  const classes = useStyles();
  const handlechange = (e) => {
    // console.log(e.target.value);
    formhandlechange2(e.target.name, e.target.value);
  };
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <Typography>Manager Name</Typography>
          <Input
            className={classes.inputField}
            id="input-with-icon-adornment"
            name="manager_name"
            placeholder="Enter your company's registered name"
            value={formdata2.manager_name}
            fullWidth={true}
            disableUnderline={true}
            onChange={handlechange}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography>Manager E-mail</Typography>
          <Input
            className={classes.inputField}
            id="input-with-icon-adornment"
            name="manager_email"
            placeholder="Enter your company's registered name"
            value={formdata2.manager_email}
            fullWidth={true}
            disableUnderline={true}
            onChange={handlechange}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography>Manager Contact</Typography>
          <Input
            className={classes.inputField}
            id="input-with-icon-adornment"
            name="manager_contact"
            placeholder="Enter your company's registered name"
            value={formdata2.manager_contact}
            fullWidth={true}
            disableUnderline={true}
            onChange={handlechange}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Form2;

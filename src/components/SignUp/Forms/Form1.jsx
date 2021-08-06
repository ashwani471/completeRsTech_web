import React from "react";
import { Grid, Typography, Input, InputAdornment } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import DomainIcon from "@material-ui/icons/Domain";

const useStyles = makeStyles({
  inputField: {
    border: "5px solid white",
    backgroundColor: "#edf0f2",
    borderRadius: "12px",
    height: "60px",
  },
  icon: {
    paddingLeft: "20px",
    paddingRight: "30px",
    borderRight: "1px solid gray",
  },
});

function Form1({ formdata, formhandlechange }) {
  const classes = useStyles();
  const handlechange = (e) => {
    // console.log(e.target.value);
    formhandlechange(e.target.name, e.target.value);
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography>Company Name</Typography>
      </Grid>
      <Grid item xs={12}>
        <Input
          className={classes.inputField}
          id="input-with-icon-adornment"
          name="company_name"
          placeholder="Enter your company's registered name"
          fullWidth="true"
          disableUnderline={true}
          startAdornment={
            <InputAdornment position="start">
              <div className={classes.icon}>
                <DomainIcon />
              </div>
            </InputAdornment>
          }
          value={formdata.company_name}
          onChange={handlechange}
        />
      </Grid>
    </Grid>
  );
}

export default Form1;

import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const options = [
  "Aerospace",
  "Agriculture",
  "Construction",
  "Defense",
  "Education",
  "Energy",
  "Aerospace",
  "Agriculture",
  "Construction",
];

const useStyles = makeStyles({
  optionbox: {
    // border: "1px solid grey",
    borderRadius: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
    marginRight: "10px",
    height: "45px",
  },
});

function Form4() {
  const classes = useStyles();
  return (
    <>
      <Typography variant="p" component="h3">
        Please select one or more of your Industry Verticals
      </Typography>
      <Grid container>
        {options.map((item) => {
          return (
            <Grid item xs={6} md={3} className={classes.optionbox}>
              {item}
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default Form4;

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
});

function Form1({ formdata1, formhandlechange1 }) {
  const classes = useStyles();
  const handlechange = (e) => {
    // console.log(e.target.value);
    formhandlechange1(e.target.name, e.target.value);
  };
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>Warehouse Name</Typography>
        <Input
          className={classes.inputField}
          id="input-with-icon-adornment"
          name="warehouse_name"
          placeholder="Grugram"
          value={formdata1.warehouse_name}
          fullWidth={true}
          disableUnderline={true}
          onChange={handlechange}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography>Loading/Unloading Time</Typography>
        <Input
          className={classes.inputField}
          id="input-with-icon-adornment"
          name="loading_time"
          placeholder="HH:MM PM"
          type="time"
          value={formdata1.loading_time}
          fullWidth={true}
          disableUnderline={true}
          onChange={handlechange}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography>Off Days in month?</Typography>
        <Input
          className={classes.inputField}
          id="input-with-icon-adornment"
          name="offdays"
          placeholder="Enter no. off days"
          value={formdata1.offdays}
          fullWidth={true}
          disableUnderline={true}
          onChange={handlechange}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography>
          How many docking facilities for loading are available?
        </Typography>
        <Input
          className={classes.inputField}
          id="input-with-icon-adornment"
          name="total_docks"
          placeholder="Enter Numbers"
          value={formdata1.total_docks}
          fullWidth={true}
          disableUnderline={true}
          onChange={handlechange}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography>
          What max length of vehicle can enter your warehouse?
        </Typography>
        <Input
          className={classes.inputField}
          id="input-with-icon-adornment"
          name="max_length"
          placeholder="Enter your company's registered name"
          value={formdata1.max_length}
          fullWidth={true}
          disableUnderline={true}
          onChange={handlechange}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography>Scope of all parallel loading/unloading</Typography>
        <Input
          className={classes.inputField}
          id="input-with-icon-adornment"
          name="parallel_load"
          placeholder="Enter your company's registered name"
          value={formdata1.parallel_load}
          fullWidth={true}
          disableUnderline={true}
          onChange={handlechange}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography>Address/Geo Coordinates</Typography>
        <Input
          className={classes.inputField}
          id="input-with-icon-adornment"
          name="address_coordinates"
          placeholder="Enter Address"
          value={formdata1.address_coordinates}
          fullWidth={true}
          disableUnderline={true}
          onChange={handlechange}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography>No Entry Time Zone of city</Typography>
        <Input
          className={classes.inputField}
          id="input-with-icon-adornment"
          name="noentry"
          placeholder="Enter time zone"
          value={formdata1.noentry}
          fullWidth={true}
          disableUnderline={true}
          onChange={handlechange}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography>Scanning at Inbound?</Typography>
        <Input
          className={classes.inputField}
          id="input-with-icon-adornment"
          name="scanning_inbound"
          placeholder="Yes or No"
          value={formdata1.scanning_inbound}
          fullWidth={true}
          disableUnderline={true}
          onChange={handlechange}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography>Scanning at outbound?</Typography>
        <Input
          className={classes.inputField}
          id="input-with-icon-adornment"
          name="scanning_outbound"
          placeholder="Yes or No"
          value={formdata1.scanning_outbound}
          fullWidth={true}
          disableUnderline={true}
          onChange={handlechange}
        />
      </Grid>
    </Grid>
  );
}

export default Form1;

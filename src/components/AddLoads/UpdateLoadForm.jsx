import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Input,
  InputAdornment,
  Typography,
  InputLabel,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

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
});

function UpdateLoadForm({
  formdat,
  updateopen,
  handleUpdateClose,
  companyid,
  loadid,
}) {
  const classes = useStyles();
  const [formdata, setFormdata] = useState({
    product_name: formdat.ProductName,
    weight: formdat.weight,
    length: formdat.Length,
    height: formdat.Height,
    breadth: formdat.Breadth,
    volume: formdat.volume,
  });
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormdata({ ...formdata, [name]: value });
  };
  const handleupdate = () => {
    console.log(formdata);
    axios
      .post(
        `http://127.0.0.1:5000/editload?ID=${companyid}&LoadId=${loadid}&Breadth=${formdat.breadth}&Height=${formdat.height}&Length=${formdat.length}&Layer=8&ProductName=${formdat.product_name}&weight=${formdat.weight}`
      )
      .then(() => console.log("Updated"))
      .catch((err) => console.log(err));

    handleUpdateClose();
  };

  return (
    <Dialog
      open={updateopen}
      onClose={handleUpdateClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-slide-title">
        Update Load Details
      </DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid item xs={6}>
            <InputLabel>Product Name</InputLabel>
            <Input
              className={classes.inputField}
              id="input-with-icon-adornment"
              name="product_name"
              placeholder="A"
              fullWidth="true"
              disableUnderline={true}
              startAdornment={
                <InputAdornment position="start">
                  <div className={classes.icon}>
                    <AddLocationIcon />
                  </div>
                </InputAdornment>
              }
              value={formdata.product_name}
              onChange={handlechange}
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel>Length (in Feet)</InputLabel>
            <Input
              className={classes.inputField}
              id="input-with-icon-adornment"
              name="length"
              placeholder="24"
              fullWidth="true"
              disableUnderline={true}
              startAdornment={
                <InputAdornment position="start">
                  <div className={classes.icon}>
                    <AddLocationIcon />
                  </div>
                </InputAdornment>
              }
              value={formdata.length}
              onChange={handlechange}
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel>Weight (Kg)</InputLabel>
            <Input
              className={classes.inputField}
              id="input-with-icon-adornment"
              name="weight"
              placeholder="18"
              fullWidth="true"
              disableUnderline={true}
              startAdornment={
                <InputAdornment position="start">
                  <div className={classes.icon}>
                    <AddLocationIcon />
                  </div>
                </InputAdornment>
              }
              value={formdata.weight}
              onChange={handlechange}
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel>Breadth (in Feet)</InputLabel>
            <Input
              className={classes.inputField}
              id="input-with-icon-adornment"
              name="breadth"
              placeholder="8.5"
              fullWidth="true"
              disableUnderline={true}
              startAdornment={
                <InputAdornment position="start">
                  <div className={classes.icon}>
                    <AddLocationIcon />
                  </div>
                </InputAdornment>
              }
              value={formdata.breadth}
              onChange={handlechange}
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel>Length (in Feet)</InputLabel>
            <Input
              className={classes.inputField}
              id="input-with-icon-adornment"
              name="volume"
              placeholder="10"
              fullWidth="true"
              disableUnderline={true}
              startAdornment={
                <InputAdornment position="start">
                  <div className={classes.icon}>
                    <AddLocationIcon />
                  </div>
                </InputAdornment>
              }
              value={formdata.volume}
              onChange={handlechange}
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel>Height (in Feet)</InputLabel>
            <Input
              className={classes.inputField}
              id="input-with-icon-adornment"
              name="height"
              placeholder="24"
              fullWidth="true"
              disableUnderline={true}
              startAdornment={
                <InputAdornment position="start">
                  <div className={classes.icon}>
                    <AddLocationIcon />
                  </div>
                </InputAdornment>
              }
              value={formdata.height}
              onChange={handlechange}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleUpdateClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleupdate} color="primary" autoFocus>
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default UpdateLoadForm;

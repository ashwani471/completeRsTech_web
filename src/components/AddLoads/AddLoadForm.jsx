import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import axios from "axios";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import {
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  Button,
} from "@material-ui/core";

import AddLocationIcon from "@material-ui/icons/AddLocation";

import { makeStyles } from "@material-ui/core/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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

export default function AddLoadForm({
  open,
  handleClose,
  companyid,
  handleAddLoad,
}) {
  const classes = useStyles();
  const [formdata, setFormdata] = useState({});

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormdata({ ...formdata, [name]: value });
  };
  const formdataempty = () => {
    setFormdata({
      product_name: "",
      length: "",
      weight: "",
      breadth: "",
      volume: "",
      height: "",
    });
  };
  // const handleAddLoad = () => {
  //   axios
  //     .post(
  //       `http://127.0.0.1:5000/addload?ProductName=${formdata.product_name}&Length=${formdata.length}&Breadth=${formdata.breadth}&Height=${formdata.height}&weight=${formdata.weight}&Layer=5&ID=${companyid}`
  //     )
  //     .then(() => console.log("Load Added"))
  //     .catch((err) => console.log(err));

  //   handleClose();
  // };

  return (
    <Dialog
      fullWidth="true"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      //   onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">Add Truck Details</DialogTitle>
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
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            handleAddLoad(formdata);
            formdataempty();
          }}
          color="primary"
          autoFocus
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}

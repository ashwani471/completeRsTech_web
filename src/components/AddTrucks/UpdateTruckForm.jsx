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

function UpdateTruckForm({
  formdat,
  updateopen,
  handleUpdateClose,
  companyid,
  truckid,
}) {
  const classes = useStyles();
  const [formdata, setFormdata] = useState({
    truck_type: formdat.TruckType,
    // weight: formdat.weight,
    length: formdat.Length,
    height: formdat.Height,
    breadth: formdat.Breadth,
    payload: formdat.PayLoad,
    wheels: formdat.Wheels,
    body_type: formdat.BodyType,
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
        `http://127.0.0.1:5000/edittruck?ID=${companyid}&TruckId=${truckid}&BodyType=${formdata.body_type}&Breadth=${formdata.breadth}&Height=${formdata.height}&Length=${formdata.length}&PayLoad=${formdata.payload}&TruckType=${formdata.truck_type}&Wheels=${formdata.wheels}`
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
        Update Truck Details
      </DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid item xs={6}>
            <InputLabel>Truck Type</InputLabel>
            <Input
              className={classes.inputField}
              id="input-with-icon-adornment"
              name="truck_type"
              placeholder="New Delhi"
              fullWidth="true"
              disableUnderline={true}
              startAdornment={
                <InputAdornment position="start">
                  <div className={classes.icon}>
                    <AddLocationIcon />
                  </div>
                </InputAdornment>
              }
              value={formdata.truck_type}
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
            <InputLabel>Payload</InputLabel>
            <Input
              className={classes.inputField}
              id="input-with-icon-adornment"
              name="payload"
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
              value={formdata.payload}
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
            <InputLabel>Wheels</InputLabel>
            <Input
              className={classes.inputField}
              id="input-with-icon-adornment"
              name="wheels"
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
              value={formdata.wheels}
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
          <Grid item xs={6}>
            <InputLabel>Body Type</InputLabel>
            <Input
              className={classes.inputField}
              id="input-with-icon-adornment"
              name="body_type"
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
              value={formdata.body_type}
              onChange={handlechange}
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel>Volume(in cuft)</InputLabel>
            <Input
              className={classes.inputField}
              id="input-with-icon-adornment"
              name="volume"
              placeholder="1624"
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

export default UpdateTruckForm;

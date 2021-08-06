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

function UpdateRegion({
  formdat,
  updateopen,
  handleUpdateClose,
  companyid,
  handleupdate,
}) {
  const classes = useStyles();
  const [formdata, setFormdata] = useState({
    region_name: formdat.RegionName,
    head_name: formdat.Name,
    email: formdat.Email,
    mobile: formdat.MobNumber,
  });
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormdata({ ...formdata, [name]: value });
  };
  // const handleupdate = () => {
  //   // console.log(formdata);
  //   axios
  //     .post(
  //       `http://127.0.0.1:5000/editregion?ID=${companyid}&RegionId=${formdat.region_ID}&HeadName=${formdata.head_name}&RegionName=${formdata.region_name}&MobNo=${formdata.mobile}&Email=${formdata.email}`
  //     )
  //     .then(() => console.log("Updated"))
  //     .catch((err) => console.log(err));

  //   handleUpdateClose();
  // };

  return (
    <Dialog
      open={updateopen}
      onClose={handleUpdateClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-slide-title">
        Add Region Details
      </DialogTitle>
      <DialogContent>
        <InputLabel>Name of Region</InputLabel>
        <Input
          className={classes.inputField}
          id="input-with-icon-adornment"
          name="region_name"
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
          value={formdata.region_name}
          onChange={handlechange}
        />

        <InputLabel>Head Name</InputLabel>

        <Input
          className={classes.inputField}
          id="input-with-icon-adornment"
          placeholder="Rahul Sharma"
          fullWidth="true"
          name="head_name"
          disableUnderline={true}
          startAdornment={
            <InputAdornment position="start">
              <div className={classes.icon}>
                <PersonAddIcon />
              </div>
            </InputAdornment>
          }
          value={formdata.head_name}
          onChange={handlechange}
        />
        <InputLabel>Your Email Address</InputLabel>

        <Input
          className={classes.inputField}
          id="input-with-icon-adornment"
          placeholder="arbaz@gmil.com"
          fullWidth="true"
          name="email"
          disableUnderline={true}
          startAdornment={
            <InputAdornment position="start">
              <div className={classes.icon}>
                <EmailIcon />
              </div>
            </InputAdornment>
          }
          value={formdata.email}
          onChange={handlechange}
        />
        <InputLabel>Phone Number</InputLabel>

        <Input
          className={classes.inputField}
          id="input-with-icon-adornment"
          placeholder="9899380533"
          fullWidth="true"
          name="mobile"
          disableUnderline={true}
          startAdornment={
            <InputAdornment position="start">
              <div className={classes.icon}>
                <PhoneIcon />
              </div>
            </InputAdornment>
          }
          value={formdata.mobile}
          onChange={handlechange}
        />

        <Box style={{ float: "right" }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleUpdateClose}
            style={{ marginRight: "10px" }}
          >
            Cancel
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              handleupdate(formdata, formdat.region_ID);
              handleUpdateClose();
            }}
          >
            Update
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default UpdateRegion;

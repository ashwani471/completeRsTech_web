import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Form from "./Form";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FormHome({ open, handleClose, submitform }) {
  //   const [open, setOpen] = React.useState(false);

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  //   const handleClose = () => {
  //     setOpen(false);
  //   };
  const [formdata, setFormdata] = useState({
    region_name: "",
    head_name: "",
    email: "",
    mobile: "",
  });

  const formhandlechange = (na, val) => {
    setFormdata({ ...formdata, [na]: val });
  };
  const formdataempty = () => {
    setFormdata({
      region_name: "",
      head_name: "",
      email: "",
      mobile: "",
    });
  };

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
      <DialogTitle id="alert-dialog-slide-title">
        Add Region Details
      </DialogTitle>
      <DialogContent>
        <Form
          formdata={formdata}
          formhandlechange={formhandlechange}
          handleclose={handleClose}
          submitform={submitform}
          formdataempty={formdataempty}
        />
      </DialogContent>
      {/* <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary">
            Agree
          </Button>
        </DialogActions> */}
    </Dialog>
  );
}

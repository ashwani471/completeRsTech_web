import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";

export default function DeleteTruck({
  delopen,
  handledelclose,
  truckid,
  companyid,
}) {
  const handledelete = () => {
    axios
      .delete(
        `http://127.0.0.1:5000/edittruck?ID=${companyid}&TruckId=${truckid}`
      )
      .then(() => console.log("Deleted"))
      .catch((err) => console.log(err));

    handledelclose();
  };
  return (
    <Dialog
      open={delopen}
      onClose={handledelclose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure ? Truck T1 will be deleted.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handledelclose} color="primary">
          Cancel
        </Button>
        <Button onClick={handledelete} color="primary" autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";

export default function DeleteRegion({
  delopen,
  handledelclose,
  regionid,
  companyid,
  handledelete,
}) {
  return (
    <Dialog
      open={delopen}
      onClose={handledelclose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure ? Region Gurugram will be deleted.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handledelclose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            handledelete(regionid);
            handledelclose();
          }}
          color="primary"
          autoFocus
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

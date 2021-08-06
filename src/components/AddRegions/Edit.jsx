import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Popover, Box, IconButton } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles({
  popicon: {
    display: "flex",
    alignItems: "center",
  },
});

export default function Edit({
  anchorEl,
  handleClose,
  handledelopen,
  handleupdateopen,
}) {
  const classes = useStyles();
  //   const [anchorEl, setAnchorEl] = useState(null);

  //   const handleClick = (event) => {
  //     setAnchorEl(event.currentTarget);
  //   };

  //   const handleClose = () => {
  //     setAnchorEl(null);
  //   };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Box style={{ width: "10rem" }}>
        <Button
          startIcon={<EditIcon />}
          fullWidth={true}
          onClick={() => {
            handleClose();
            handleupdateopen();
          }}
        >
          Edit
        </Button>
        <Button
          startIcon={<DeleteIcon />}
          fullWidth={true}
          onClick={() => {
            handleClose();
            handledelopen();
          }}
        >
          Delete
        </Button>
      </Box>
    </Popover>
  );
}

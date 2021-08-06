import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Button,
  makeStyles,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "16rem",
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
}));

const WarehouseDialog = ({ open, handleclose, handlewarehouseopen }) => {
  const classes = useStyles();

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const handleNext = () => {
    handleclose();
    handlewarehouseopen();
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleclose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
              <ListItem
                button
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}
              >
                <ListItemText primary="Warehouse" />
              </ListItem>
              <ListItem
                button
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
              >
                <ListItemText primary="DC" />
              </ListItem>
              <ListItem
                button
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick(event, 2)}
              >
                <ListItemText primary="Plant/Yard" />
              </ListItem>
            </List>
            <Box style={{ float: "right" }}>
              <Button onClick={handleclose}>Cancel</Button>
              <Button onClick={handleNext}>Next</Button>
            </Box>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WarehouseDialog;

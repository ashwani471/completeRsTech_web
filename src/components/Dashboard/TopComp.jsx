import React from "react";
import Icon from "../../static/images/handwave.png";
import { makeStyles, Typography, Box } from "@material-ui/core";
import { AddBox } from "@material-ui/icons";

const useStyles = makeStyles({
  maintop: {
    display: "flex",
    backgroundColor: "white",
    padding: "8px",
    borderRadius: "5px",
    boxShadow: "0px 2px 3px 2px #919191",
    alignItems: "center",
  },
});

function TopComp() {
  const classes = useStyles();
  return (
    <div className={classes.maintop}>
      <Box ml={3} width="100%">
        <Typography style={{ fontSize: 30 }}>Getting Started</Typography>
        <Typography style={{ fontSize: 15 }}>
          Dear Customer, Welcome to Infinity Haul Dashboard
        </Typography>
      </Box>
      <Box mr={3}>
        <img src={Icon} alt="Logo" width={90} height={90} />
      </Box>
    </div>
  );
}

export default TopComp;

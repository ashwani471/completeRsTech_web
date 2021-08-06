import { Typography, Box, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  contain: {
    backgroundColor: "#008BF6",
    borderRadius: "8px",
    color: "white",
    height: "86vh",
    padding: "25px",
  },
  tmp: {
    height: "30vh",
    borderRadius: "10px",
    margin: "8px",
    backgroundColor: "white",
    position: "relative",
    top: "15%",
  },
  listelements: {
    paddingTop: "15px",
  },
});

function TipsCard() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.contain}>
        <Typography style={{ fontSize: 30 }}>Tips:</Typography>
        <Box>
          <ul>
            <Box className={classes.listelements}>
              <li>
                <Typography style={{ fontSize: 14 }}>
                  Please have a look at the Demo Simulator Video to witness the
                  capability of Infinity Solvers.
                </Typography>
              </li>
            </Box>
            <Box className={classes.listelements}>
              <li>
                <Typography style={{ fontSize: 14 }}>
                  Please add the Region details. You can update the regions
                  anytime by adding, deleting or editing.
                </Typography>
              </li>
            </Box>
            <Box className={classes.listelements}>
              <li>
                <Typography style={{ fontSize: 14 }}>
                  Post which you can start the Onboarding process.
                </Typography>
              </li>
            </Box>
          </ul>
        </Box>
        <Box className={classes.tmp}></Box>
      </Box>
    </>
  );
}

export default TipsCard;

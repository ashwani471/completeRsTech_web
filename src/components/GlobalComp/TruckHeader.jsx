import React from "react";
import {
  Box,
  makeStyles,
  Typography,
  Button,
  IconButton,
  Icon,
} from "@material-ui/core";
import FilterIcon from "../../static/images/Filter.svg";
import AscendIcon from "../../static/images/Ascend.svg";
import SearchComp from "../AddRegions/SearchComp";
import backIcon from "../../static/images/backicon.png";
import uploadIcon from "../../static/images/uploadicon.png";
const useStyles = makeStyles({
  topcontain: {
    display: "flex",
    justifyContent: "space-between",
  },
  filt: {
    display: "flex",
  },
  buttonicon: {
    borderRadius: "25px",
    backgroundColor: "#008BF6",
    color: "white",
  },
  icons: {
    borderRadius: "50%",
    backgroundColor: "#008BF6",
    width: "40px",
    height: "40px",
    marginRight: "10px",
    marginLeft: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  upload: {
    borderRadius: "25px",
  },
});

function TruckHeader({ handleOpen }) {
  const classes = useStyles();
  return (
    <Box className={classes.topcontain}>
      <Button
        startIcon={
          <Icon style={{ width: "30px", height: "28px" }}>
            <img src={backIcon} alt="icon" width={30} height={20} />
          </Icon>
        }
      >
        Onboarding
      </Button>
      <Box>
        <Typography style={{ fontSize: 30 }}>Define Truck Types</Typography>
      </Box>
      <Box className={classes.filt}>
        <Box mr={3}>
          <SearchComp />
        </Box>
        <Box mr={3}>
          <Button
            variant="contained"
            className={classes.buttonicon}
            onClick={handleOpen}
          >
            Add Trucks
          </Button>
        </Box>

        <Button
          variant="outlined"
          className={classes.upload}
          startIcon={
            <Icon style={{ width: "20px", height: "30 px" }}>
              <img src={uploadIcon} alt="upload" width={20} height={20} />
            </Icon>
          }
        >
          Upload Excel
        </Button>
      </Box>
    </Box>
  );
}

export default TruckHeader;

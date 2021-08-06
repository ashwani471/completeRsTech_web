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

function ArchitectureHeader({ handleOpen }) {
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
        <Typography style={{ fontSize: 30 }}>Define Architecture</Typography>
      </Box>
      <Box className={classes.filt}>
        <Button
          variant="contained"
          className={classes.buttonicon}
          onClick={handleOpen}
        >
          Add Region
        </Button>
        <Box>
          <SearchComp />
        </Box>
        <Icon style={{ width: "4rem", height: "3rem", marginLeft: "10px" }}>
          <img src={FilterIcon} alt="filter" style={{ height: "3rem" }} />
        </Icon>
        <Icon style={{ width: "4rem", height: "3rem" }}>
          <img src={AscendIcon} alt="filter" style={{ height: "3rem" }} />
        </Icon>
        {/* <Box className={classes.icons}>S</Box> */}
      </Box>
    </Box>
  );
}

export default ArchitectureHeader;

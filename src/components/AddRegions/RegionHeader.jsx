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
import SearchComp from "./SearchComp";
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
});

function Header({ handleOpen }) {
  const classes = useStyles();
  return (
    <Box className={classes.topcontain}>
      {/* <Box className={classes.buttonicon}>
        <Typography>Add Region</Typography>
      </Box> */}
      <Button
        variant="contained"
        className={classes.buttonicon}
        onClick={handleOpen}
      >
        Add Region
      </Button>
      <Box className={classes.filt}>
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

export default Header;

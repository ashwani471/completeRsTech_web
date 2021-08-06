import React from "react";
import {
  Box,
  makeStyles,
  SvgIcon,
  Button,
  Typography,
} from "@material-ui/core";
import BellIcon from "../../static/images/ic-notification.svg";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import PersonIcon from "@material-ui/icons/Person";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Logo from "../../static/images/haul.png";

const useStyles = makeStyles({
  maincon: {
    display: "flex",
    justifyContent: "space-between",
  },
  myprofile: {
    border: "2px solid #008BF6",
    borderRadius: "8px",
    color: "#008BF6",
  },
});

function Header() {
  const classes = useStyles();
  return (
    <Box className={classes.maincon}>
      <Box className={classes.maincon}>
        <Box mt={-2} ml={-3}>
          <img src={Logo} alt="Logo" height={80} width={200} />
        </Box>
      </Box>
      <Box className={classes.maincon}>
        <Box mr={3}>
          <img src={BellIcon} alt="BellIcon" width={30} height={30} />
        </Box>
        <Box>
          <Button className={classes.myprofile}>
            <PersonIcon />
            <Typography>My Profile</Typography>
            <ArrowForwardIosIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;

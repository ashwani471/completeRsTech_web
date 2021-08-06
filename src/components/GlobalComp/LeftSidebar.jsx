import React from "react";
import { Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../static/images/download.png";

const useStyles = makeStyles({
  sidebar: {
    backgroundColor: "#c9e8ff",
    width: "100%",
    height: "50vw",
  },
  logo: {
    width: "200px",
    height: "100px",
  },
});

function LeftSidebar() {
  const classes = useStyles();
  return (
    <>
      <Box component="div" className={classes.sidebar}>
        <img src={Logo} alt="company" className={classes.logo} />
      </Box>
    </>
  );
}

export default LeftSidebar;

import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  buttonmain: {
    display: "flex",
    borderRadius: "3px",
    backgroundColor: "#EFFCFF",
    width: "11rem",
    height: "8vh",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginLeft: "30px",
    boxShadow: "0px 2px 3px 2px #919191",
  },
});

function ButtonFoot({ icon, text }) {
  const classes = useStyles();
  return (
    <div className={classes.buttonmain}>
      <img src={icon} alt="Logo" width={30} height={35} />
      <Typography style={{ fontSize: 15 }}>{text}</Typography>
    </div>
  );
}

export default ButtonFoot;

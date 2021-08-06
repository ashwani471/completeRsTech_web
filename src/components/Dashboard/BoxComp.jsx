import React from "react";
import { makeStyles, Typography, Box } from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  inner: {},
  cardcontent: {
    padding: "30px 15px 0px 15px",
    backgroundColor: "white",
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "#E9EFF5",
      cursor: "pointer",
    },
    // textAlign: "center",
    height: "35vh",
    width: "13rem",
    boxShadow: "0px 2px 3px 2px #919191",
  },
});

function BoxComp({ heading, para, icon, lin }) {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = () => {
    history.push(lin);
  };

  return (
    <div className={classes.cardcontent}>
      <div className={classes.inner} onClick={handleClick}>
        <Typography style={{ fontSize: 20 }}>{heading}</Typography>
        <Box mt={2}>
          <Typography style={{ fontSize: 12 }}>{para}</Typography>
        </Box>
        <Box mt={2}>
          <img
            src={icon}
            alt="Logo"
            width={140}
            height={110}
            style={{ paddingLeft: "30px" }}
          />
        </Box>
      </div>
    </div>
  );
}

export default BoxComp;

import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  primarybtn: {
    backgroundColor: "#008bf6",
    "&:hover": {
      backgroundColor: "#008bf6",
    },
  },
  secondarybtn: {
    backgroundColor: "#707070",
    "&:hover": {
      backgroundColor: "#001920",
    },
  },
});

function NavButtons({ text, icon, funt }) {
  const classes = useStyles();
  return (
    <>
      {text === "Back" ? (
        <Button
          variant="contained"
          className={classes.secondarybtn}
          fullWidth={true}
          color="primary"
          onClick={funt}
          size="large"
          startIcon={icon}
        >
          {text}
        </Button>
      ) : (
        <Button
          variant="contained"
          className={classes.primarybtn}
          fullWidth={true}
          color="primary"
          onClick={funt}
          size="large"
          endIcon={icon}
        >
          {text}
        </Button>
      )}
    </>
  );
}

export default NavButtons;

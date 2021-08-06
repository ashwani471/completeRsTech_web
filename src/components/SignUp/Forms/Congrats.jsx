import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import { Box, makeStyles, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles({
  icon: {
    fontSize: "4rem",
    color: "#008bf6",
  },
  primarybtn: {
    backgroundColor: "#008bf6",
    "&:hover": {
      backgroundColor: "#008bf6",
    },
  },
  congratscontain: {
    marginTop: "20%",
    marginLeft: "10%",
    marginRight: "10%",
  },
});

function Congrats() {
  const classes = useStyles();

  return (
    <Box className={classes.congratscontain}>
      <Box>
        <CheckCircleIcon className={classes.icon} />
      </Box>
      <Box mt={3}>
        <Typography variant="h5">Congratulations, You're all set!</Typography>
      </Box>
      <Box mt={3}>
        <Typography>
          You have successfully setup your profile, now start <br /> exploring
          the application.
        </Typography>
      </Box>
      <Box mt={3}>
        <Button
          variant="contained"
          className={classes.primarybtn}
          fullWidth={true}
          color="primary"
          href="/dashboard"
          size="large"
          endIcon={<ArrowRightAltIcon />}
        >
          Continue to the dashboard
        </Button>
      </Box>
    </Box>
  );
}

export default Congrats;

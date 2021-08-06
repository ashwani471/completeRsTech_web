import { Typography, Box, makeStyles } from "@material-ui/core";
import React from "react";
import Header from "../GlobalComp/Header";
import ListOpt from "./ListOpt";

const useStyles = makeStyles({
  topcontain: {
    backgroundColor: "#F8F9FB",
    height: "100vh",
  },
  container: {
    padding: "20px 80px 0px 80px",
  },
  leftcomp: {
    paddingRight: "45px",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.topcontain}>
      <Box className={classes.container}>
        <Header />
        <Box>
          <Typography style={{ fontSize: 30 }}>Dear Customer</Typography>
          <Typography>
            The entire onboarding process will be carried out in 5 steps.
          </Typography>
        </Box>
        <Box mt={4}>
          <ListOpt />
        </Box>
      </Box>
    </div>
  );
};

export default Home;

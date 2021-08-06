import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import TipsCard from "./TipsCard";
import LeftProfile from "./LeftProfile";

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

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.topcontain}>
      <Grid container className={classes.container}>
        <Grid item xs={8} className={classes.leftcomp}>
          <LeftProfile />
        </Grid>
        <Grid item xs={4}>
          <TipsCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;

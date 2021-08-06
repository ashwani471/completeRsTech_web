import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import LeftSidebar from "../GlobalComp/LeftSidebar";
import RightSidebar from "./RightSidebar";
import Congrats from "./Forms/Congrats";

function SignUp() {
  const [flag, setFlag] = useState(false);
  const flagChange = () => {
    setFlag(true);
  };
  return (
    <Grid container>
      <Grid item xs={5}>
        <LeftSidebar />
      </Grid>
      <Grid item xs={7}>
        {!flag ? <RightSidebar flagChange={flagChange} /> : <Congrats />}
      </Grid>
    </Grid>
  );
}

export default SignUp;

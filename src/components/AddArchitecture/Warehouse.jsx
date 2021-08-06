import React, { useState } from "react";
import RegionHeader from "./RegionHeader";
import { Grid, makeStyles, Box } from "@material-ui/core";
import TableComp from "./TableComp";
import AddRegionForm from "./AddRegionForm/FormHome";
import Header from "../GlobalComp/Header";
import { useEffect } from "react";
import axios from "axios";

const useStyles = makeStyles({
  topcontain: {
    backgroundColor: "#F8F9FB",
    height: "100vh",
  },
  container: {
    padding: "25px 80px 0px 80px",
  },
});

function Warehouse({ loggedUser }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState({});

  return (
    <div className={classes.topcontain}>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Header />
        </Grid>

        <Grid item xs={12} style={{ marginTop: "25px" }}>
          <RegionHeader handleOpen={handleOpen} />
        </Grid>
        <Grid item xs={12} style={{ marginTop: "20px" }}>
          <TableComp
            rows={rows}
            // handledelopen={handledelopen}
            handledelete={handledelete}
            companyid={loggedUser.CompanyID}
          />
        </Grid>
        <AddRegionForm
          open={open}
          handleClose={handleClose}
          submitform={submitForm}
        />
        {/* <DeleteRegion
        delopen={delopen}
        handledelopen={handledelopen}
        handledelclose={handledelclose}
        handledelete={handledelete}
      /> */}
      </Grid>
    </div>
  );
}

export default Warehouse;

import React, { useState } from "react";
// import RegionHeader from "../AddRegions/RegionHeader";
import TruckHeader from "../GlobalComp/TruckHeader";
import { Grid } from "@material-ui/core";
import TableComp from "./TableComp";
// import AddRegionForm from "./AddRegionForm/FormHome";
import Header from "../GlobalComp/Header";
import { useEffect } from "react";
import axios from "axios";
// import DeleteRegion from "./UpdateRegion/DeleteRegion";
import AddTruckForm from "./AddTruckForm";

function Home({ loggedUser }) {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState({});
  // const [delopen, setDelopen] = useState(false);
  // const [regionid, setRegionid] = useState("");
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/truck?ID=${loggedUser.CompanyID}`)
      .then((res) => setRows(res.data))
      .catch((err) => console.log(err));
    // console.log(loggedUser);
  }, []);

  return (
    <Grid container style={{ padding: "70px" }}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <TruckHeader handleOpen={handleOpen} />
      </Grid>
      <Grid item xs={12}>
        <TableComp rows={rows} companyid={loggedUser.CompanyID} />
      </Grid>
      <AddTruckForm
        open={open}
        handleClose={handleClose}
        companyid={loggedUser.CompanyID}

        // submitform={submitForm}
      />
    </Grid>
  );
}

export default Home;

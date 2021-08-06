import React, { useState } from "react";
import WarehouseHeader from "./WarehouseHeader";
import { Grid, makeStyles, Box } from "@material-ui/core";
import AddWarehouse from "./AddForms/StepperForm/AddWarehouse";
import Header from "../GlobalComp/Header";
import { useEffect } from "react";
import axios from "axios";
import WarehouseDialog from "./WarehouseDialog";

const useStyles = makeStyles({
  topcontain: {
    backgroundColor: "#F8F9FB",
    height: "100vh",
  },
  container: {
    padding: "25px 80px 0px 80px",
  },
});

function Home({ loggedUser }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState({});
  const [warehouseopen, setWarehouseopen] = useState(false);
  // const [delopen, setDelopen] = useState(false);
  // const [regionid, setRegionid] = useState("");
  const handleOpen = () => {
    setOpen(true);
  };
  const handleclose = () => {
    setOpen(false);
  };
  const handlewarehouse = () => setWarehouseopen(false);
  const handlewarehouseopen = () => setWarehouseopen(true);
  const submitForm = (formdat) => {
    axios
      .post(
        `http://127.0.0.1:5000/addregion?MobNo=${formdat.mobile}&RegionName=${formdat.region_name}&HeadName=${formdat.head_name}&Email=${formdat.email}&ID=${loggedUser.CompanyID}`
      )
      .then(() => console.log("Data Added"))
      .catch((err) => console.log(err));
  };

  const handledelete = (regionid) => {
    axios
      .delete(
        `http://127.0.0.1:5000/editregion?ID=${loggedUser.CompanyID}&RegionId=${regionid}`
      )
      .then(() => console.log("Deleted"))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/getregion?ID=${loggedUser.CompanyID}`)
      .then((res) => setRows(res.data))
      .catch((err) => console.log(err));
    // console.log(loggedUser);
  }, []);

  return (
    <div className={classes.topcontain}>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Header />
        </Grid>

        <Grid item xs={12} style={{ marginTop: "25px" }}>
          <WarehouseHeader handleOpen={handleOpen} />
        </Grid>
        {/* <Grid item xs={12} style={{ marginTop: "20px" }}>
          <TableComp
            rows={rows}
            // handledelopen={handledelopen}
            handledelete={handledelete}
            companyid={loggedUser.CompanyID}
          />
        </Grid> */}
        {/* <AddRegionForm
          open={open}
          handleClose={handleClose}
          submitform={submitForm}
        /> */}

        <WarehouseDialog
          open={open}
          handleclose={handleclose}
          handlewarehouseopen={handlewarehouseopen}
        />
        <AddWarehouse open={warehouseopen} handleclose={handlewarehouse} />
      </Grid>
    </div>
  );
}

export default Home;

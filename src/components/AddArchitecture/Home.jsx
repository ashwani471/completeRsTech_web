import React, { useState } from "react";
import ArchitectureHeader from "./ArchitectureHeader";
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

function Home({ loggedUser }) {
  const classes = useStyles();
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
  const submitForm = (formdat) => {
    axios
      .post(
        `http://127.0.0.1:5000/addregion?MobNo=${formdat.mobile}&RegionName=${formdat.region_name}&HeadName=${formdat.head_name}&Email=${formdat.email}&ID=${loggedUser.CompanyID}`
      )
      .then(() => console.log("Data Added"))
      .catch((err) => console.log(err));
  };
  // const handledelclose = () => setDelopen(false);
  // const handledelopen = () => setDelopen(true);
  // const handleregion = (dat) => setRegionid(dat);

  const handledelete = (regionid) => {
    axios
      .delete(
        `http://127.0.0.1:5000/editregion?ID=${loggedUser.CompanyID}&RegionId=${regionid}`
      )
      .then(() => console.log("Deleted"))
      .catch((err) => console.log(err));
  };
  // const rows = [
  //   {
  //     no: 1,
  //     region: "New Delhi",
  //     head_name: "Rahul Sharma",
  //     number: "9899380533",
  //     email: "contact@rstech.com",
  //   },
  // ];

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
          <ArchitectureHeader handleOpen={handleOpen} />
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

export default Home;

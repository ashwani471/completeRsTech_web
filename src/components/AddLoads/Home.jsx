import React, { useState } from "react";
import LoadHeader from "../GlobalComp/LoadHeader";
import { Grid } from "@material-ui/core";
import TableComp from "./TableComp";
// import AddRegionForm from "./AddRegionForm/FormHome";
import Header from "../GlobalComp/Header";
import { useEffect } from "react";
import axios from "axios";
// import DeleteRegion from "./UpdateRegion/DeleteRegion";
import AddLoadForm from "./AddLoadForm";

function Home({ loggedUser }) {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState({});
  const [counter, setCounter] = useState(0);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleAddLoad = (formdata) => {
    axios
      .post(
        `http://127.0.0.1:5000/addload?ProductName=${formdata.product_name}&Length=${formdata.length}&Breadth=${formdata.breadth}&Height=${formdata.height}&weight=${formdata.weight}&Layer=5&ID=${loggedUser.CompanyID}`
      )
      .then(() => {
        console.log("Load Added");
        setCounter(counter + 1);
      })
      .catch((err) => console.log(err));

    handleClose();
  };
  const handledelete = (loadid) => {
    axios
      .delete(
        `http://127.0.0.1:5000/editload?ID=${loggedUser.companyid}&LoadId=${loadid}`
      )
      .then(() => {
        console.log("Deleted");
        setCounter(counter + 1);
        console.log(counter);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/load?ID=${loggedUser.CompanyID}`)
      .then((res) => setRows(res.data))
      .catch((err) => console.log(err));
  }, [counter]);

  return (
    <Grid container style={{ padding: "70px" }}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <LoadHeader handleOpen={handleOpen} />
      </Grid>
      <Grid item xs={12}>
        <TableComp
          rows={rows}
          companyid={loggedUser.CompanyID}
          handledelete={handledelete}
        />
      </Grid>
      <AddLoadForm
        open={open}
        handleClose={handleClose}
        companyid={loggedUser.CompanyID}
        handleAddLoad={handleAddLoad}
      />
    </Grid>
  );
}

export default Home;

import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import Form1 from "./StepperForm/Form1";
import Form2 from "./StepperForm/Form2";
import Form3 from "./StepperForm/Form3";
import Form4 from "./StepperForm/Form4";
import { Box } from "@material-ui/core";
import StepperComp from "./StepperForm/StepperComp";
import axios from "axios";
import Header from "../../GlobalComp/Header";

const Home = ({ companyid, regionid, city, handleclose }) => {
  const [formdata1, setFormdata1] = useState({});
  const [formdata2, setFormdata2] = useState({});
  const [formdata3, setFormdata3] = useState({});
  const [formdata4, setFormdata4] = useState({});
  const formhandlechange1 = (name, value) => {
    console.log(formdata1);
    setFormdata1({ ...formdata1, [name]: value });
  };
  const formhandlechange2 = (name, value) => {
    setFormdata2({ ...formdata2, [name]: value });
  };
  const formhandlechange3 = (name, value) => {
    setFormdata3({ ...formdata3, [name]: value });
  };
  const formhandlechange4 = (name, value) => {
    setFormdata4({ ...formdata4, [name]: value });
  };

  const handlesubmit1 = () => {
    setFlag((prev) => prev + 1);
    axios
      .post(
        `http://127.0.0.1:5000/addwarehousedetails?ID=${companyid}&RegionId=${regionid}&WarehouseId=sdfgh&City=${city}&WarehouseName=${formdata1.warehouse_name}&OffDays=${formdata1.offdays}&MaxLengthVehicle=${formdata1.max_length}&AddressCoordinates=${formdata1.address_coordinates}&ScanningInbound=${formdata1.scanning_inbound}&ScanningOutbound=${formdata1.scanning_outbound}&TotalDocks=${formdata1.total_docks}&DocksToIH=2&firstNoEntryStart=07:00:00&firstNoEntryEnd=11:00:00&secondNoEntryStart&secondNoEntryEnd`
      )
      .then(() => console.log("Data Added"))
      .catch((err) => console.log("Error", err));
  };
  const handlesubmit2 = () => {
    setFlag((prev) => prev + 1);
    axios
      .post(
        `http://127.0.0.1:5000/addwarehousemanagerdetails?ID=${companyid}&RegionId=${regionid}&WarehouseId=sdfgh&ManagerName=${formdata2.manager_name}&ManagerEmail=${formdata2.manager_email}&ManagerMobNo=${formdata2.manager_contact}`
      )
      .then(() => console.log("Data Added"))
      .catch((err) => {
        console.log("error", err);
      });
  };
  const handlesubmit3 = () => {
    setFlag((prev) => prev + 1);
    axios
      .post(
        `http://127.0.0.1:5000/addsupervisordetails?ID=${companyid}&RegionId=${regionid}&WarehouseId=sdfgh&FirstSupervisorName=${formdata3.supervisor_name}&FirstSupervisorMobNo=${formdata3.supervisor_contact}&FirstSupervisorEmail=${formdata3.supervisor_email}`
      )
      .then(() => console.log("Data Added"))
      .catch((err) => {
        console.log("error", err);
      });
  };
  const handlesubmit4 = () => {
    setFlag((prev) => prev + 1);
    axios
      .post(
        `http://127.0.0.1:5000/addcoordinatordetails?ID=${companyid}&RegionId=${regionid}&WarehouseId=sdfgh&FirstCoordinatorName=${formdata4.coordinator_name}&FirstCoordinatorMobNo=${formdata4.coordinator_contact}&FirstCoordinatorEmail=${formdata4.coordinator_email}`
      )
      .then(() => {
        console.log("Data Added");
        handleclose();
      })
      .catch((err) => console.log("error", err));
  };
  const prevform = () => {
    setFlag((prev) => prev - 1);
  };
  const [flag, setFlag] = useState(1);

  const [class1, setClass1] = useState(false);
  const [class2, setClass2] = useState(false);
  const [class3, setClass3] = useState(false);
  const [class4, setClass4] = useState(false);

  useEffect(() => {
    if (flag == 1) setClass1((prev) => !prev);
    if (flag == 2) setClass2((prev) => !prev);
    if (flag == 3) setClass3((prev) => !prev);
    if (flag == 4) setClass4((prev) => !prev);
  }, [flag]);

  return (
    <Box>
      <Header />
      <StepperComp
        class1={class1}
        class2={class2}
        class3={class3}
        class4={class4}
      />
      {flag == 1 && (
        <>
          <Form1 formdata1={formdata1} formhandlechange1={formhandlechange1} />
          <Box style={{ float: "right" }}>
            <Button onClick={handleclose}>Cancel</Button>
            <Button variant="outlined" onClick={handlesubmit1}>
              Next
            </Button>
          </Box>
        </>
      )}
      {flag == 2 && (
        <>
          <Form2 formdata2={formdata2} formhandlechange2={formhandlechange2} />
          <Box style={{ float: "right" }}>
            <Button variant="contained" onClick={prevform}>
              Back
            </Button>
            <Button variant="outlined" color="primary" onClick={handlesubmit2}>
              Next
            </Button>
          </Box>
        </>
      )}
      {flag == 3 && (
        <>
          <Form3 formdata3={formdata3} formhandlechange3={formhandlechange3} />
          <Box style={{ float: "right" }}>
            <Button variant="contained" onClick={prevform}>
              Back
            </Button>
            <Button variant="outlined" color="primary" onClick={handlesubmit3}>
              Next
            </Button>
          </Box>
        </>
      )}
      {flag == 4 && (
        <>
          <Form4 formdata4={formdata4} formhandlechange4={formhandlechange4} />
          <Box style={{ float: "right" }}>
            <Button variant="contained" onClick={prevform}>
              Back
            </Button>
            <Button variant="outlined" color="primary" onClick={handlesubmit4}>
              Submit
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Home;

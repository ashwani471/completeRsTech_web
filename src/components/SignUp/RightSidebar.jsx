import { React, useState, useEffect } from "react";
import axios from "axios";
import { Grid, Typography, Box, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Form1 from "./Forms/Form1";
import Form2 from "./Forms/Form2";
import Form3 from "./Forms/Form3";
import Review from "./Forms/Review";
import Steppercomp from "../testingcomps/Steppercomp";
import AllTags from "../testingcomps/AllTags";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import NavButtons from "../unusedcomponents/NavButtons";

const useStyles = makeStyles({
  contain: {
    padding: "10px",
  },
  topContainer: {
    marginTop: "15px",
  },
  top: {
    textAlign: "right",
  },
  forms: {
    marginTop: "50px",
  },
  primarybtn: {
    backgroundColor: "#008bf6",
    "&:hover": {
      backgroundColor: "#008bf6",
    },
  },
  secondarybtn: {
    backgroundColor: "#001920",
    "&:hover": {
      backgroundColor: "#001920",
    },
  },
});

function RightSidebar({ flagChange }) {
  const [currstate, setCurrstate] = useState(0);
  const [formdata, setFormdata] = useState({
    company_name: "",
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    coordinator_first_name: "",
    coordinator_last_name: "",
    coordinator_email: "",
    coordinator_mobile: "",
    industry_tags: [],
  });
  // const [rev, setRev] = useState(false);
  const formhandlechange = (name, value) => {
    // console.log("Object Data: ", formdata);
    setFormdata({ ...formdata, [name]: value });
  };
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  const nextState = () => {
    setCurrstate((prevstate) => prevstate + 1);
  };
  const prevState = () => {
    setCurrstate((prevstate) => prevstate - 1);
  };

  useEffect(() => {
    if (currstate == 5) {
      axios
        .post(
          `http://127.0.0.1:5000/signup?CompanyName=${formdata.company_name}&IndustryVert=Education&HeadName=${formdata.first_name}&HeadNumber=${formdata.mobile}&HeadEmail=${formdata.email}&CoordinatorName=${formdata.coordinator_first_name}&CoordinatorNumber=${formdata.coordinator_mobile}&CoordinatorEmail=${formdata.coordinator_email}&IndustryVert=Aerospace`
        )
        .then(() => console.log("Succesfull", formdata))
        .catch((err) => console.log("Error!!", err));
      flagChange();
    }
  }, [currstate]);

  return (
    <Box container mt={7} ml={15} mr={13}>
      <Grid container>
        <Grid item xs={12} className={classes.top}>
          <Typography>Having Troubles? </Typography>
          <Link
            href="#"
            onClick={preventDefault}
            style={{ color: "#008bf6", fontWeight: "bold" }}
          >
            Get Help
          </Link>
        </Grid>
        <Grid item xs={12} className={classes.topContainer}>
          <Typography variant="h5">Sign Up</Typography>
        </Grid>
        {currstate < 4 ? (
          <Grid item xs={12} className={classes.topContainer}>
            <Typography>Please Fill your information below</Typography>
          </Grid>
        ) : (
          <Grid item xs={12} className={classes.topContainer}>
            <Typography>
              Please crosscheck all the details before proceeding.
            </Typography>
          </Grid>
        )}
        {currstate < 4 && (
          <Grid item xs={12}>
            <Steppercomp currstate={currstate} />
          </Grid>
        )}
        <Grid item xs={12} className={classes.forms}>
          {currstate == 0 && (
            <Form1 formdata={formdata} formhandlechange={formhandlechange} />
          )}
          {currstate == 1 && (
            <Form2 formdata={formdata} formhandlechange={formhandlechange} />
          )}
          {currstate == 2 && (
            <Form3 formdata={formdata} formhandlechange={formhandlechange} />
          )}
          {currstate == 3 && (
            // <Form4 formdata={formdata} formhandlechange={formhandlechange} />
            <AllTags formhandlechange={formhandlechange} />
          )}
          {currstate == 4 && <Review formdata={formdata} />}
        </Grid>
        <Grid item xs={12}>
          {currstate == 0 ? (
            <Box mt={2}>
              <NavButtons
                text="Next"
                icon={<ArrowRightAltIcon />}
                funt={nextState}
              />
            </Box>
          ) : (
            <Box mt={2}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <NavButtons
                    text="Back"
                    icon={<KeyboardBackspaceIcon />}
                    funt={prevState}
                  />
                </Grid>
                {currstate <= 2 ? (
                  <Grid item xs={6}>
                    <NavButtons
                      text="Next"
                      icon={<ArrowRightAltIcon />}
                      funt={nextState}
                    />
                  </Grid>
                ) : (
                  <Grid item xs={6}>
                    {currstate == 3 ? (
                      <NavButtons
                        text="Review"
                        icon={<ArrowRightAltIcon />}
                        funt={nextState}
                      />
                    ) : (
                      <NavButtons
                        text="Confirm"
                        icon={<ArrowRightAltIcon />}
                        funt={nextState}
                      />
                    )}
                  </Grid>
                )}
              </Grid>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default RightSidebar;

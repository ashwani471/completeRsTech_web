import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import BoxComp from "./BoxComp";
import Icon1 from "../../static/images/demo-simulator.png";
import Icon2 from "../../static/images/update-regions.png";
import Icon3 from "../../static/images/ic-onboarding.png";
import faq from "../../static/images/faq.png";
import customer from "../../static/images/customer.png";
import ButtonFoot from "./ButtonFoot";
import TopComp from "./TopComp";
import Header from "./Header.jsx";

const cardcontent = [
  {
    heading: "Demo Simulator",
    para: "Checkout this demo video for simulator and learn from it.",
    icon: Icon1,
    lin: "/login",
  },
  {
    heading: "Update Regions",
    para: "Add, Delete or Edit Regions for blah blah",
    icon: Icon2,
    lin: "/region",
  },
  {
    heading: "Onboarding",
    para: "Dear Customer, Welcome to Infinity Haul Dashboard.",
    icon: Icon3,
    lin: "/onboarding",
  },
];

const useStyles = makeStyles({
  cardcompo: {
    display: "flex",
    justifyContent: "space-between",
  },
  faq: {
    display: "flex",
    justifyContent: "center",
  },
});

function LeftProfile() {
  const classes = useStyles();
  return (
    <>
      <Header />

      <Box style={{ marginTop: "40px" }}>
        <TopComp />
      </Box>
      <Box className={classes.cardcompo} style={{ marginTop: "40px" }}>
        {cardcontent.map((cardcon) => {
          return (
            <BoxComp
              heading={cardcon.heading}
              para={cardcon.para}
              icon={cardcon.icon}
              lin={cardcon.lin}
            />
          );
        })}
      </Box>
      <Box className={classes.faq} style={{ marginTop: "40px" }}>
        <ButtonFoot icon={faq} text="Read FAQs" />
        <ButtonFoot icon={customer} text="Customer Care" />
      </Box>
    </>
  );
}

export default LeftProfile;

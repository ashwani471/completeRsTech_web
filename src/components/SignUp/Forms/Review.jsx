import React from "react";
import { Typography, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  formcontent: {
    display: "flex",
    marginTop: "25px",
  },
  formdat: {
    display: "flex",
    flexDirection: "column",
  },
  userdata: {
    fontWeight: "bold",
  },
  reviewcontain: {
    border: "1px solid #e8e8e8",
    borderRadius: "10px",
    padding: "20px",
    "& hr": {
      borderColor: "#E8E8E8",
      width: "50%",
      marginLeft: 0,
      marginTop: "25px",
    },
  },
});

function Review({ formdata }) {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.reviewcontain}>
        <Box>
          <Box component="span" className={classes.userdata}>
            Company Name:
          </Box>
          <Box component="span" ml={15}>
            {formdata.company_name}
          </Box>
        </Box>
        <hr />
        <Box className={classes.formcontent}>
          <Box component="span" className={classes.userdata}>
            Logistics Head:
          </Box>
          <Box ml={16} className={classes.formdat}>
            <Typography>{formdata.first_name}</Typography>
            <Typography>{formdata.email}</Typography>
            <Typography>{formdata.mobile}</Typography>
          </Box>
        </Box>
        <hr />
        <Box className={classes.formcontent}>
          <Box component="span" className={classes.userdata}>
            Logistics Coordinator:
          </Box>
          <Box ml={10} className={classes.formdat}>
            <Typography>{formdata.coordinator_first_name}</Typography>
            <Typography>{formdata.coordinator_email}</Typography>
            <Typography>{formdata.coordinator_mobile}</Typography>
          </Box>
        </Box>
        <hr />
        <Box className={classes.formcontent}>
          <Box component="span" className={classes.userdata}>
            Industry Verticals:
          </Box>
          <Box ml={13}>
            {formdata.industry_tags.map((tag) => {
              return <Typography>{tag}, </Typography>;
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Review;

import { makeStyles, Typography, Box } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  change: {
    color: "#0176D0",
    "& hr": {
      border: "none",
      height: "4px",

      backgroundColor: "#0176D0",
    },
    width: "14rem",
  },
  default: {
    color: "#C6C6C6",
    "& hr": {
      border: "none",
      height: "4px",

      backgroundColor: "#C6C6C6",
    },
    width: "14rem",
  },
  container: {
    display: "flex",
    justifyContent: "space-evenly",
  },
});

const StepperComp = ({ class1, class2, class3, class4 }) => {
  const classes = useStyles();
  let classname1 = !class1 ? classes.default : classes.change;
  let classname2 = !class2 ? classes.default : classes.change;
  let classname3 = !class3 ? classes.default : classes.change;
  let classname4 = !class4 ? classes.default : classes.change;
  // console.log(stepperdata);

  return (
    <>
      <Box className={classes.container}>
        {/* {stepperdata.map((data, index) => {
          {
            !data.class
              ? (classname = classes.default)
              : (classname = classes.change);
          }
          return (
            <>
              <Box className={classname}>
                <Typography>{data.content}</Typography>

                {index <= 3 && <hr />}
              </Box>
            </>
          );
        })} */}
        {/* <Typography>Hello</Typography> */}

        <Box className={classname1}>
          <Typography>Warehouse Details</Typography>
          <hr />
        </Box>
        <Box className={classname2}>
          <Typography>Manager Details</Typography>
          <hr />
        </Box>
        <Box className={classname3}>
          <Typography>Supervisor Details</Typography>
          <hr />
        </Box>
        <Box className={classname4}>
          <Typography>Coordinator Details</Typography>
          <hr />
        </Box>
      </Box>
    </>
  );
};

export default StepperComp;

import { React, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 18,

    left: "-112px",
    right: "152px",
  },
  active: {
    "& $line": {
      //   backgroundImage:
      //     "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      backgroundColor: "#008bf6",
    },
  },
  completed: {
    "& $line": {
      //   backgroundImage:
      //     "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      backgroundColor: "#008bf6",
    },
  },
  line: {
    height: 3,
    border: 0,
    // backgroundColor: "#eaeaf0",
    backgroundColor: "grey",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    // backgroundColor: "#ccc",
    // backgroundColor: "white",
    // border: "1px solid gray",
    zIndex: 1,
    // color: "#fff",
    width: 40,
    height: 40,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid grey",
    marginLeft: "-88px",
  },
  active: {
    // backgroundImage:
    //   "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    // boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    backgroundColor: "#008bf6",
    border: "none",
    color: "white",
  },
  completed: {
    // backgroundImage:
    //   "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    backgroundColor: "#008bf6",
    border: "none",
    color: "white",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  //   const icons = {
  //     1: <Set,
  //     2: <GroupAddIcon />,
  //     3: <VideoLabelIcon />,
  //   };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {String(props.icon)}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function Steppercomp({ currstate }) {
  const classes = useStyles();
  // const [activeStep, setActiveStep] = useState(0);
  const steps = [0, 1, 2, 3];

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };
  // console.log(currstate);

  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={currstate}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

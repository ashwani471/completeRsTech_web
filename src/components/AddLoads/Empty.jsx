import React from "react";
import { Box, Icon, makeStyles, Typography } from "@material-ui/core";
import uploadIcon from "../../static/images/uploadicon.png";
const useStyles = makeStyles({});

const Empty = () => {
  const classes = useStyles();
  return (
    <Box mt={18} ml={70}>
      <Icon>
        <img src={uploadIcon} alt="Upload" />
      </Icon>
      <Typography>Upload Excel</Typography>
    </Box>
  );
};

export default Empty;

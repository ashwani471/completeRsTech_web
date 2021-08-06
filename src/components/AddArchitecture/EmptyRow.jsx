import { Typography, Box } from "@material-ui/core";
import React from "react";
import Icon from "../../static/images/ic-no-region.svg";

function EmptyRow() {
  return (
    <Box style={{ marginLeft: "31rem", marginTop: "8rem" }}>
      <Box style={{ paddingLeft: "2rem" }}>
        <img src={Icon} alt="Icons" />
      </Box>
      <Box ml={-2}>
        <Typography style={{ fontSize: 20 }}>No Regions added yet</Typography>
      </Box>
      <Box ml={-4}>
        <Typography>Please add a region to continue</Typography>
      </Box>
    </Box>
  );
}

export default EmptyRow;

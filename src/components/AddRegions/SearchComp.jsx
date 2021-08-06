import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import {
  Input,
  InputAdornment,
  InputBase,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  searchicon: {
    display: "flex",
    backgroundColor: "white",
    borderRadius: "20px",
    height: "42px",
    alignItems: "center",
    border: "1px solid #80808066",
    paddingLeft: "15px",
  },
  icon: {
    paddingTop: "5px",
    paddingRight: "8px",
  },
});

function SearchComp() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.searchicon}>
        <div className={classes.icon}>
          <SearchIcon />
        </div>
        <InputBase placeholder="Search Region" />
      </div>
    </div>
  );
}

export default SearchComp;
